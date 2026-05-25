import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function BoxPreview() {
  return (
    <BundlePreviewShell>
      <div className="max-w-lg rounded-lg border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-base font-semibold text-slate-950">Basic Box</h3>
          <span className="text-xs font-medium text-slate-500">Section</span>
        </div>
        <p className="mt-3 text-sm text-slate-600">Use this for simple grouped content where a full card is not needed.</p>
      </div>
    </BundlePreviewShell>
  );
}

export const boxCode = `export function BoxExample() {
  return (
    <div className="max-w-lg rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-base font-semibold text-slate-950">Basic Box</h3>
        <span className="text-xs font-medium text-slate-500">Section</span>
      </div>
      <p className="mt-3 text-sm text-slate-600">Use this for simple grouped content where a full card is not needed.</p>
    </div>
  );
}`;
