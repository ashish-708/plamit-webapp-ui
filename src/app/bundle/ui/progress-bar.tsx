import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function ProgressBarPreview() {
  return (
    <BundlePreviewShell>
      <div className="max-w-md">
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium text-slate-900">Report completion</span>
          <span className="text-slate-500">72%</span>
        </div>
        <div className="h-2 rounded-full bg-slate-200" role="progressbar" aria-valuemax={100} aria-valuemin={0} aria-valuenow={72}>
          <div className="h-2 w-[72%] rounded-full bg-sky-700" />
        </div>
      </div>
    </BundlePreviewShell>
  );
}

export const progressBarCode = `export function ProgressBarExample() {
  return (
    <div className="max-w-md">
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-slate-900">Report completion</span>
        <span className="text-slate-500">72%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200" role="progressbar" aria-valuemax={100} aria-valuemin={0} aria-valuenow={72}>
        <div className="h-2 w-[72%] rounded-full bg-sky-700" />
      </div>
    </div>
  );
}`;
