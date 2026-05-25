import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function ToastPreview() {
  return (
    <BundlePreviewShell>
      <div className="max-w-sm rounded-lg border border-slate-200 bg-white p-4 shadow-lg">
        <div className="flex items-start gap-3">
          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <div>
            <p className="text-sm font-semibold text-slate-950">Saved successfully</p>
            <p className="mt-1 text-xs text-slate-500">The record has been updated.</p>
          </div>
        </div>
      </div>
    </BundlePreviewShell>
  );
}

export const toastCode = `export function ToastExample() {
  return (
    <div className="max-w-sm rounded-lg border border-slate-200 bg-white p-4 shadow-lg">
      <div className="flex items-start gap-3">
        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
        <div>
          <p className="text-sm font-semibold text-slate-950">Saved successfully</p>
          <p className="mt-1 text-xs text-slate-500">The record has been updated.</p>
        </div>
      </div>
    </div>
  );
}`;
