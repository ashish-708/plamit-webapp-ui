import { baseInputClass, BundlePreviewShell } from "../components/BundlePreviewShell";

export function SelectPreview() {
  return (
    <BundlePreviewShell>
      <label className="block max-w-sm">
        <span className="text-sm font-medium text-slate-900">Department</span>
        <select className={`${baseInputClass} mt-2 w-full`} defaultValue="radiology">
          <option value="radiology">Radiology</option>
          <option value="opd">OPD</option>
          <option value="ipd">IPD</option>
          <option value="pharmacy">Pharmacy</option>
        </select>
      </label>
    </BundlePreviewShell>
  );
}

export const selectCode = `export function SelectExample() {
  return (
    <label className="block max-w-sm">
      <span className="text-sm font-medium text-slate-900">Department</span>
      <select
        className="mt-2 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
        defaultValue="radiology"
      >
        <option value="radiology">Radiology</option>
        <option value="opd">OPD</option>
        <option value="ipd">IPD</option>
        <option value="pharmacy">Pharmacy</option>
      </select>
    </label>
  );
}`;
