import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function SearchBoxPreview() {
  return (
    <BundlePreviewShell>
      <div className="flex max-w-lg gap-2">
        <input
          className="h-10 flex-1 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
          placeholder="Search patient, order, mobile"
        />
        <button className="rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800" type="button">
          Search
        </button>
      </div>
    </BundlePreviewShell>
  );
}

export const searchBoxCode = `export function SearchBoxExample() {
  return (
    <div className="flex max-w-lg gap-2">
      <input
        className="h-10 flex-1 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
        placeholder="Search patient, order, mobile"
      />
      <button className="rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800" type="button">
        Search
      </button>
    </div>
  );
}`;
