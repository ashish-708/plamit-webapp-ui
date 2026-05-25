import { baseInputClass, BundlePreviewShell } from "../components/BundlePreviewShell";

export function TextboxPreview() {
  return (
    <BundlePreviewShell>
      <label className="block max-w-md">
        <span className="text-sm font-medium text-slate-900">Patient name</span>
        <input className={`${baseInputClass} mt-2 w-full`} placeholder="Enter patient name" />
        <span className="mt-1 block text-xs text-slate-500">Use full legal name as per hospital record.</span>
      </label>
    </BundlePreviewShell>
  );
}

export const textboxCode = `export function TextboxExample() {
  return (
    <label className="block max-w-md">
      <span className="text-sm font-medium text-slate-900">Patient name</span>
      <input
        className="mt-2 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
        placeholder="Enter patient name"
      />
      <span className="mt-1 block text-xs text-slate-500">Use full legal name as per hospital record.</span>
    </label>
  );
}`;
