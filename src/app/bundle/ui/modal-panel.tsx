import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function ModalPanelPreview() {
  return (
    <BundlePreviewShell>
      <div className="max-w-md rounded-lg border border-slate-200 bg-white p-4 shadow-lg">
        <h3 className="text-base font-semibold text-slate-950">Confirm action</h3>
        <p className="mt-2 text-sm text-slate-600">Are you sure you want to release this report?</p>
        <div className="mt-4 flex justify-end gap-2">
          <button className="rounded-md border border-slate-300 px-3 py-2 text-sm" type="button">
            Cancel
          </button>
          <button className="rounded-md bg-sky-700 px-3 py-2 text-sm font-medium text-white" type="button">
            Confirm
          </button>
        </div>
      </div>
    </BundlePreviewShell>
  );
}

export const modalPanelCode = `export function ModalPanelExample() {
  return (
    <div className="max-w-md rounded-lg border border-slate-200 bg-white p-4 shadow-lg">
      <h3 className="text-base font-semibold text-slate-950">Confirm action</h3>
      <p className="mt-2 text-sm text-slate-600">Are you sure you want to release this report?</p>
      <div className="mt-4 flex justify-end gap-2">
        <button className="rounded-md border border-slate-300 px-3 py-2 text-sm" type="button">Cancel</button>
        <button className="rounded-md bg-sky-700 px-3 py-2 text-sm font-medium text-white" type="button">Confirm</button>
      </div>
    </div>
  );
}`;
