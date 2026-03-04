import Image from "next/image";

const filters = ["mood", "size", "collection", "finish", "bundle"];

const catalog = [
  {
    title: "ashen 01",
    mood: "endurance",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_01.png",
  },
  {
    title: "ashen 02",
    mood: "containment",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_02.png",
  },
  {
    title: "ashen 03",
    mood: "ambiguity",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_03.png",
  },
  {
    title: "ashen 04",
    mood: "presence",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_04.png",
  },
  {
    title: "ashen 07",
    mood: "release",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_07.png",
  },
  {
    title: "ashen 08",
    mood: "threshold",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_08.png",
  },
  {
    title: "ashen 09",
    mood: "focus",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_09.png",
  },
  {
    title: "ashen 10",
    mood: "ritual",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_10.png",
  },
  {
    title: "ashen 11",
    mood: "echo",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_11.png",
  },
  {
    title: "ashen 12",
    mood: "quiet relic",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_12.png",
  },
  {
    title: "ashen 14",
    mood: "reverence",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_14.png",
  },
  {
    title: "ashen 15",
    mood: "still",
    price: "$4",
    image: "/stickers/ashen_tide_echoes/ashen_15.png",
  },
];

export default function CollectionsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
          Archive Filters
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Collections</h1>
        <p className="max-w-2xl text-sm leading-6 text-[var(--muted)]">
          Browse the catalog by mood, scale, and collection. Each entry is
          curated for quiet presence and clear sticker readability.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            className="archive-tag rounded-full bg-white/60 px-4 py-2 text-[10px] uppercase tracking-[0.3em]"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {catalog.map((item) => (
          <div
            key={item.title}
            className="archive-card flex flex-col gap-5 rounded-2xl border border-[var(--line)] bg-white/75 p-6"
          >
            <div className="relative h-44 rounded-2xl border border-dashed border-[var(--line)] bg-[var(--fog)]/60">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight">
                {item.title}
              </h2>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                {item.mood}
              </p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--muted)]">{item.price}</span>
              <button className="rounded-full border border-[var(--line)] bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
