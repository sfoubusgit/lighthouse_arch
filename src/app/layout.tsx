import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lighthouse Archive",
  description: "A quiet catalog of recovered stickers and symbolic artifacts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-[var(--paper)] text-[var(--ink)] antialiased`}
      >
        <div className="min-h-screen bg-archive-texture">
          <header className="border-b border-[var(--line)]/60">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                  Lighthouse Archive
                </span>
                <span className="text-lg font-semibold tracking-tight">
                  Quiet Sticker Catalog
                </span>
              </div>
              <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
                <a
                  className="transition-colors hover:text-[var(--ink)]"
                  href="/#collections"
                >
                  Collections
                </a>
                <a
                  className="transition-colors hover:text-[var(--ink)]"
                  href="/#signal"
                >
                  Signal
                </a>
                <a
                  className="transition-colors hover:text-[var(--ink)]"
                  href="/#archive"
                >
                  Archive
                </a>
                <a
                  className="rounded-full border border-[var(--line)] bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--ink)]"
                  href="/cart"
                >
                  Cart
                </a>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t border-[var(--line)]/60">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs uppercase tracking-[0.35em] text-[var(--muted)] md:flex-row md:items-center md:justify-between">
              <span>Archive Catalog 01</span>
              <span>Recovered and Curated</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
