import { PhotoEntry } from "@/components/PhotoEntry";
import { getEntries } from "@/lib/entries";

export default function Home() {
  const entries = getEntries();

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-8 md:px-12 md:py-12">
        <h1 className="text-sm tracking-wide text-gray-900">
          Jimmy Wingert
        </h1>
        <p className="mt-1 text-xs text-gray-500">
          Photography
        </p>
      </header>

      {/* Entries */}
      <div className="space-y-24 pb-24">
        {entries.map((entry) => (
          <PhotoEntry key={entry.id} entry={entry} />
        ))}
      </div>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Jimmy Wingert
        </p>
      </footer>
    </main>
  );
}
