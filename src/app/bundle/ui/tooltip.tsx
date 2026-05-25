import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function TooltipPreview() {
  return (
    <BundlePreviewShell>
      <div className="group relative inline-flex">
        <button className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700" type="button">
          Hover info
        </button>
        <span className="absolute left-0 top-12 hidden w-48 rounded-md bg-slate-950 px-3 py-2 text-xs text-white shadow-lg group-hover:block">
          Helpful information appears here.
        </span>
      </div>
    </BundlePreviewShell>
  );
}

export const tooltipCode = `export function TooltipExample() {
  return (
    <div className="group relative inline-flex">
      <button className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700" type="button">
        Hover info
      </button>
      <span className="absolute left-0 top-12 hidden w-48 rounded-md bg-slate-950 px-3 py-2 text-xs text-white shadow-lg group-hover:block">
        Helpful information appears here.
      </span>
    </div>
  );
}`;
