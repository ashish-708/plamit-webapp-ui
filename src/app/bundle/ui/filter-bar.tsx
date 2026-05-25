import { baseInputClass, BundlePreviewShell } from "../components/BundlePreviewShell";

export function FilterBarPreview() {
  return (
    <BundlePreviewShell>
      <div className="grid gap-3 md:grid-cols-[1fr_150px_150px_auto]">
        <input className={baseInputClass} placeholder="Search records" />
        <select className={baseInputClass} defaultValue="all">
          <option value="all">All status</option>
          <option value="active">Active</option>
        </select>
        <input className={baseInputClass} type="date" />
        <button className="rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white" type="button">
          Apply
        </button>
      </div>
    </BundlePreviewShell>
  );
}

export const filterBarCode = `export function FilterBarExample() {
  return (
    <div className="grid gap-3 md:grid-cols-[1fr_150px_150px_auto]">
      <input className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm" placeholder="Search records" />
      <select className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm" defaultValue="all">
        <option value="all">All status</option>
        <option value="active">Active</option>
      </select>
      <input className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm" type="date" />
      <button className="rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white" type="button">
        Apply
      </button>
    </div>
  );
}`;
