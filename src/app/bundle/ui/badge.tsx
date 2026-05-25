import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function BadgePreview() {
  return (
    <BundlePreviewShell>
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800">Completed</span>
        <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800">Pending</span>
        <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-800">Critical</span>
        <span className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-800">Active</span>
      </div>
    </BundlePreviewShell>
  );
}

export const badgeCode = `export function BadgeExample() {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800">Completed</span>
      <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800">Pending</span>
      <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-800">Critical</span>
      <span className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-800">Active</span>
    </div>
  );
}`;
