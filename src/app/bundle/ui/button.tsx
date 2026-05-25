import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function ButtonPreview() {
  return (
    <BundlePreviewShell>
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Button types</p>
          <p className="mt-1 text-sm text-slate-600">Primary, secondary, outline, danger, success, disabled, small, large, and icon.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <button className="rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800" type="button">
            Primary Button
          </button>
          <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800" type="button">
            Secondary Button
          </button>
          <button
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            type="button"
          >
            Outline Button
          </button>
          <button className="rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700" type="button">
            Danger Button
          </button>
          <button className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700" type="button">
            Success Button
          </button>
          <button className="rounded-md bg-slate-200 px-4 py-2 text-sm font-medium text-slate-500" disabled type="button">
            Disabled Button
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-md bg-sky-700 px-3 py-1.5 text-xs font-medium text-white" type="button">
            Small
          </button>
          <button className="rounded-md bg-sky-700 px-5 py-3 text-base font-medium text-white" type="button">
            Large Button
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-lg text-slate-700 hover:bg-slate-50"
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </BundlePreviewShell>
  );
}

export const buttonCode = `export function ButtonExample() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <button className="rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800" type="button">
          Primary Button
        </button>
        <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800" type="button">
          Secondary Button
        </button>
        <button className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" type="button">
          Outline Button
        </button>
        <button className="rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700" type="button">
          Danger Button
        </button>
        <button className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700" type="button">
          Success Button
        </button>
        <button className="rounded-md bg-slate-200 px-4 py-2 text-sm font-medium text-slate-500" disabled type="button">
          Disabled Button
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="rounded-md bg-sky-700 px-3 py-1.5 text-xs font-medium text-white" type="button">
          Small
        </button>
        <button className="rounded-md bg-sky-700 px-5 py-3 text-base font-medium text-white" type="button">
          Large Button
        </button>
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-lg text-slate-700 hover:bg-slate-50" type="button">
          +
        </button>
      </div>
    </div>
  );
}`;
