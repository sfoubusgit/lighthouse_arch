"use client";

export const dynamic = "force-dynamic";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Entry = {
  title: string;
  note: string;
  price: string;
  image: string;
};

const collections = [
  {
    title: "Drift",
    description: "Soft figures held in slow motion.",
    tone: "calm",
  },
  {
    title: "Echo",
    description: "Contained symbols that remember water.",
    tone: "watchful",
  },
  {
    title: "Still",
    description: "Quiet artifacts with no narrative.",
    tone: "held",
  },
];

const archiveEntries: Entry[] = [
  {
    title: "ashen 01",
    note: "resting, worn, contained",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_01.png",
  },
  {
    title: "ashen 02",
    note: "sealed, internal, calm",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_02.png",
  },
  {
    title: "ashen 03",
    note: "ambiguous, distant, quiet",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_03.png",
  },
  {
    title: "ashen 04",
    note: "fading edges, gentle presence",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_04.png",
  },
  {
    title: "ashen 07",
    note: "weightless, quiet release",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_07.png",
  },
  {
    title: "ashen 08",
    note: "dissolving, calm",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_08.png",
  },
  {
    title: "ashen 09",
    note: "contained focus",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_09.png",
  },
  {
    title: "ashen 10",
    note: "ritual mark",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_10.png",
  },
  {
    title: "ashen 11",
    note: "tide-worn echo",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_11.png",
  },
  {
    title: "ashen 12",
    note: "quiet relic",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_12.png",
  },
  {
    title: "ashen 14",
    note: "contained reverence",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_14.png",
  },
  {
    title: "ashen 15",
    note: "still, reflective",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_15.png",
  },
];

const signalSize = 4;

export default function Home() {
  const [signalSeed, setSignalSeed] = useState(0);
  const [checkoutStatus, setCheckoutStatus] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCheckoutStatus(params.get("checkout"));
  }, []);

  const signalEntries = useMemo(() => {
    const start = signalSeed % archiveEntries.length;
    return Array.from({ length: signalSize }, (_, index) => {
      return archiveEntries[(start + index) % archiveEntries.length];
    });
  }, [signalSeed]);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24">
        <div className="flex flex-col gap-8">
          {checkoutStatus === "success" && (
            <div className="rounded-2xl border border-[var(--line)] bg-white/80 px-5 py-4 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Checkout confirmed · Your order is secured in the archive.
            </div>
          )}
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
              Archive Signal
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
              A quiet catalog of recovered stickers and symbolic artifacts.
            </h1>
            <p className="text-base leading-7 text-[var(--muted)] sm:text-lg">
              The Lighthouse Archive curates calm, symbolic sticker forms. Each
              piece is restrained, still, and designed to read clearly at small
              scale.
            </p>
          </div>

          <div id="signal" className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setSignalSeed((prev) => prev + signalSize)}
              className="signal-button inline-flex items-center gap-4 rounded-full border border-[var(--line)] bg-white/80 px-6 py-3 text-xs uppercase tracking-[0.35em] text-[var(--ink)] transition hover:bg-white"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--rust)] motion-safe:animate-pulse" />
              Signal Discovery
            </button>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Reveals 3-5 curated artifacts
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {signalEntries.map((entry) => (
              <div
                key={`signal-${entry.title}`}
                className="archive-card flex flex-col gap-3 rounded-2xl border border-[var(--line)] bg-white/75 p-4"
              >
                <div className="relative h-32 rounded-xl border border-dashed border-[var(--line)] bg-[var(--bone)]/60">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                    {entry.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Featured Collections</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Archive 01
          </span>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {collections.map((item) => (
            <div
              key={item.title}
              className="archive-card rounded-3xl border border-[var(--line)] bg-white/80 p-6"
            >
              <div className="mb-6 h-40 rounded-2xl border border-dashed border-[var(--line)] bg-[var(--fog)]/60" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="text-sm text-[var(--muted)]">{item.description}</p>
                <span className="archive-tag inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
                  {item.tone}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="archive" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Archive Entries</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Catalog grid
          </span>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {archiveEntries.map((entry) => (
            <div
              key={entry.title}
              className="archive-card flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-white/70 p-5"
            >
              <div className="relative h-44 rounded-xl border border-dashed border-[var(--line)] bg-[var(--bone)]/70">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold tracking-tight">{entry.title}</h3>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                  {entry.note}
                </p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[var(--muted)]">{entry.price}</span>
                <button className="rounded-full border border-[var(--line)] bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

