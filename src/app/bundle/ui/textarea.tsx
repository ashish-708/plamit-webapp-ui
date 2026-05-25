import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function TextareaPreview() {
  return (
    <BundlePreviewShell>
      <label className="block max-w-xl">
        <span className="text-sm font-medium text-slate-900">Clinical notes</span>
        <textarea
          className="mt-2 min-h-28 w-full rounded-md border border-slate-300 bg-white p-3 text-sm text-slate-900 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
          defaultValue="Patient reports intermittent chest discomfort for 2 days."
        />
      </label>
    </BundlePreviewShell>
  );
}

export const textareaCode = `export function TextareaExample() {
  return (
    <label className="block max-w-xl">
      <span className="text-sm font-medium text-slate-900">Clinical notes</span>
      <textarea
        className="mt-2 min-h-28 w-full rounded-md border border-slate-300 bg-white p-3 text-sm text-slate-900 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
        defaultValue="Patient reports intermittent chest discomfort for 2 days."
      />
    </label>
  );
}`;
