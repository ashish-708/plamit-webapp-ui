import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function FileUploadPreview() {
  return (
    <BundlePreviewShell>
      <label className="flex max-w-lg cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:bg-slate-100">
        <span className="text-sm font-semibold text-slate-900">Upload document</span>
        <span className="mt-1 text-xs text-slate-500">PDF, JPG, PNG up to 10 MB</span>
        <input className="sr-only" type="file" />
      </label>
    </BundlePreviewShell>
  );
}

export const fileUploadCode = `export function FileUploadExample() {
  return (
    <label className="flex max-w-lg cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:bg-slate-100">
      <span className="text-sm font-semibold text-slate-900">Upload document</span>
      <span className="mt-1 text-xs text-slate-500">PDF, JPG, PNG up to 10 MB</span>
      <input className="sr-only" type="file" />
    </label>
  );
}`;
