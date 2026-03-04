import { PhotoEntry } from "@/components/PhotoEntry";
import { getEntries } from "@/lib/entries";

export default function Home() {
  const entries = getEntries();

  return (
    <main className="min-h-screen bg-white">
      {/* Top header bar — Cargo style: name | tagline | links */}
      <header className="border-b border-neutral-200">
        <div className="grid grid-cols-3 px-5 py-3 text-[13px]">
          <span className="text-neutral-800">Jimmy Wingert</span>
          <span className="text-neutral-500">Photography</span>
          <span className="text-neutral-500 text-right">
            <a href="mailto:[email]" className="hover:text-neutral-800 transition-colors">Email</a>
            {", "}
            <a href="https://instagram.com" className="hover:text-neutral-800 transition-colors">Instagram</a>
          </span>
        </div>
      </header>

      {/* Entries */}
      <div>
        {entries.map((entry) => (
          <PhotoEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </main>
  );
}
