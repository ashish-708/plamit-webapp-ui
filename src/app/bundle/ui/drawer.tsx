import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function DrawerPreview() {
  return (
    <BundlePreviewShell>
      <div className="max-w-md rounded-l-xl border border-slate-200 bg-white p-5 shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-slate-950">Patient details</h3>
            <p className="mt-1 text-sm text-slate-500">Contextual side panel layout.</p>
          </div>
          <button className="rounded-md border border-slate-300 px-2 py-1 text-sm" type="button">
            X
          </button>
        </div>
        <div className="mt-4 space-y-3 text-sm text-slate-700">
          <p>MRN: HSP-10483</p>
          <p>Visit: OPD</p>
          <p>Status: Active</p>
        </div>
      </div>
    </BundlePreviewShell>
  );
}

export const drawerCode = `export function DrawerExample() {
  return (
    <div className="max-w-md rounded-l-xl border border-slate-200 bg-white p-5 shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-slate-950">Patient details</h3>
          <p className="mt-1 text-sm text-slate-500">Contextual side panel layout.</p>
        </div>
        <button className="rounded-md border border-slate-300 px-2 py-1 text-sm" type="button">X</button>
      </div>
      <div className="mt-4 space-y-3 text-sm text-slate-700">
        <p>MRN: HSP-10483</p>
        <p>Visit: OPD</p>
        <p>Status: Active</p>
      </div>
    </div>
  );
}`;
