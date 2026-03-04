import { PhotoEntry } from "@/components/PhotoEntry";
import { getEntries } from "@/lib/entries";

export default function Home() {
  const entries = getEntries();

  return (
    <main className="min-h-screen bg-white">
      {/* Fixed top-left header — Cargo style */}
      <header className="px-5 pt-6 pb-2">
        <p className="text-[13px] leading-tight text-neutral-800 tracking-normal">
          Jimmy Wingert
        </p>
        <p className="text-[13px] leading-tight text-neutral-400 tracking-normal">
          Photography
        </p>
      </header>

      {/* Entries */}
      <div className="mt-6">
        {entries.map((entry) => (
          <PhotoEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </main>
  );
}
