import Image from "next/image";

const related = [
  { title: "ashen 02", image: "/stickers/ashen_tide_echoes/ashen_02.png" },
  { title: "ashen 10", image: "/stickers/ashen_tide_echoes/ashen_10.png" },
  { title: "ashen 12", image: "/stickers/ashen_tide_echoes/ashen_12.png" },
];

export default function ProductPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="archive-card flex h-[420px] items-center justify-center rounded-3xl border border-[var(--line)] bg-white/80">
          <div className="relative h-80 w-80 rounded-3xl border border-dashed border-[var(--line)] bg-[var(--fog)]/70">
            <Image
              src="/stickers/ashen_tide_echoes/ashen_01.png"
              alt="ashen 01"
              fill
              className="object-contain p-6"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
              Archive Entry
            </p>
            <h1 className="text-3xl font-semibold tracking-tight">ashen 01</h1>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
              contained · symbolic · calm
            </p>
          </div>

          <p className="text-base leading-7 text-[var(--muted)]">
            A quiet, sea‑worn form with internal echo. Designed for clarity at
            small scale, with soft grain and restrained color.
          </p>

          <div className="flex items-center gap-4 text-sm">
            <span className="rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 uppercase tracking-[0.3em]">
              $4
            </span>
            <button className="rounded-full bg-[var(--ink)] px-6 py-3 text-xs uppercase tracking-[0.35em] text-white">
              Add to Cart
            </button>
            <button className="rounded-full border border-[var(--line)] bg-white/70 px-6 py-3 text-xs uppercase tracking-[0.35em]">
              Add to Bundle
            </button>
          </div>

          <div className="grid gap-3 rounded-2xl border border-[var(--line)] bg-white/60 p-4 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            <div className="flex items-center justify-between">
              <span>Finish</span>
              <span>Matte</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Size</span>
              <span>3 in</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Durability</span>
              <span>Water resistant</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">Related Entries</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Archive set
          </span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <div
              key={item.title}
              className="archive-card rounded-2xl border border-[var(--line)] bg-white/70 p-5"
            >
              <div className="relative mb-4 h-28 rounded-xl border border-dashed border-[var(--line)] bg-[var(--bone)]/70">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-3"
                />
              </div>
              <p className="text-sm font-semibold tracking-tight">{item.title}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                still · curated
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
