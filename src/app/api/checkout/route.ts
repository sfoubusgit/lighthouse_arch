import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

const fallbackItems = [
  { name: "ashen 01", price: 4, quantity: 1 },
  { name: "ashen 10", price: 4, quantity: 1 },
];

export async function POST(request: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured." },
      { status: 500 }
    );
  }

  const origin = request.headers.get("origin") ?? "http://localhost:3000";
  let items = fallbackItems;

  try {
    const body = await request.json();
    if (Array.isArray(body?.items) && body.items.length > 0) {
      items = body.items;
    }
  } catch {
    // Use fallback items when no body is provided.
  }

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
    (item: { name: string; price: number; quantity?: number }) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity ?? 1,
    })
  );

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/cart?checkout=cancel`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to create checkout session." },
      { status: 500 }
    );
  }
}
