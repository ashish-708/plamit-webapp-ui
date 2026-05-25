import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function EmptyStatePreview() {
  return (
    <BundlePreviewShell>
      <div className="max-w-lg rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-slate-500">+</div>
        <h3 className="mt-4 text-base font-semibold text-slate-950">No records found</h3>
        <p className="mt-1 text-sm text-slate-500">Create a new record or change your filters.</p>
        <button className="mt-4 rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white" type="button">
          Create record
        </button>
      </div>
    </BundlePreviewShell>
  );
}

export const emptyStateCode = `export function EmptyStateExample() {
  return (
    <div className="max-w-lg rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-slate-500">+</div>
      <h3 className="mt-4 text-base font-semibold text-slate-950">No records found</h3>
      <p className="mt-1 text-sm text-slate-500">Create a new record or change your filters.</p>
      <button className="mt-4 rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white" type="button">
        Create record
      </button>
    </div>
  );
}`;
