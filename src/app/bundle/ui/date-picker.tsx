import { baseInputClass, BundlePreviewShell } from "../components/BundlePreviewShell";

export function DatePickerPreview() {
  return (
    <BundlePreviewShell>
      <label className="block max-w-xs">
        <span className="text-sm font-medium text-slate-900">Appointment date</span>
        <input className={`${baseInputClass} mt-2 w-full`} defaultValue="2026-05-21" type="date" />
      </label>
    </BundlePreviewShell>
  );
}

export const datePickerCode = `export function DatePickerExample() {
  return (
    <label className="block max-w-xs">
      <span className="text-sm font-medium text-slate-900">Appointment date</span>
      <input
        className="mt-2 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
        defaultValue="2026-05-21"
        type="date"
      />
    </label>
  );
}`;
