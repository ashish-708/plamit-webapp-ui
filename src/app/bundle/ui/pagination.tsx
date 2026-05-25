import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function PaginationPreview() {
  return (
    <BundlePreviewShell>
      <div className="flex flex-wrap items-center gap-2">
        <button className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700" type="button">
          Previous
        </button>
        {[1, 2, 3].map((page) => (
          <button
            className={page === 2 ? "h-9 w-9 rounded-md bg-sky-700 text-sm font-medium text-white" : "h-9 w-9 rounded-md border border-slate-300 text-sm"}
            key={page}
            type="button"
          >
            {page}
          </button>
        ))}
        <button className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700" type="button">
          Next
        </button>
      </div>
    </BundlePreviewShell>
  );
}

export const paginationCode = `export function PaginationExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700" type="button">Previous</button>
      {[1, 2, 3].map((page) => (
        <button
          className={page === 2 ? "h-9 w-9 rounded-md bg-sky-700 text-sm font-medium text-white" : "h-9 w-9 rounded-md border border-slate-300 text-sm"}
          key={page}
          type="button"
        >
          {page}
        </button>
      ))}
      <button className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700" type="button">Next</button>
    </div>
  );
}`;
