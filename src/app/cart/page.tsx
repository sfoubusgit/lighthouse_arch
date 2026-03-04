"use client";

import { useState } from "react";

type CartItem = {
  title: string;
  price: number;
  qty: number;
};

const cartItems: CartItem[] = [
  { title: "ashen 01", price: 4, qty: 1 },
  { title: "ashen 10", price: 4, qty: 1 },
];

export default function CartPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const shipping = 3;
  const total = subtotal + shipping;

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            name: item.title,
            price: item.price,
            quantity: item.qty,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Checkout failed.");
      }

      const data = (await response.json()) as { url?: string };
      if (data.url) {
        window.location.href = data.url;
        return;
      }

      throw new Error("Checkout session missing.");
    } catch (err) {
      setError("Unable to start checkout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
          Archive Cart
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Your Selection</h1>
        <p className="text-sm text-[var(--muted)]">
          Quiet, curated entries ready for checkout.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.title}
              className="archive-card flex items-center justify-between rounded-2xl border border-[var(--line)] bg-white/80 p-5"
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-xl border border-dashed border-[var(--line)] bg-[var(--fog)]/60" />
                <div>
                  <p className="text-sm font-semibold tracking-tight">
                    {item.title}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    qty {item.qty}
                  </p>
                </div>
              </div>
              <span className="text-sm text-[var(--muted)]">
                ${item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="archive-card rounded-2xl border border-[var(--line)] bg-white/80 p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--muted)]">Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--muted)]">Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--muted)]">Total</span>
              <span className="text-base font-semibold">${total}</span>
            </div>
            <button
              type="button"
              onClick={handleCheckout}
              disabled={isLoading}
              className="mt-4 w-full rounded-full bg-[var(--ink)] px-6 py-3 text-xs uppercase tracking-[0.35em] text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? "Redirecting..." : "Continue to Checkout"}
            </button>
            {error ? (
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--rust)]">
                {error}
              </p>
            ) : (
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                Payments handled securely
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
