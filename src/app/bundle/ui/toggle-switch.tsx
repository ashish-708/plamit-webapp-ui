import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function ToggleSwitchPreview() {
  return (
    <BundlePreviewShell>
      <button className="flex w-56 items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm" type="button">
        Critical alert
        <span className="flex h-6 w-11 items-center rounded-full bg-sky-700 p-1">
          <span className="h-4 w-4 translate-x-5 rounded-full bg-white" />
        </span>
      </button>
    </BundlePreviewShell>
  );
}

export const toggleSwitchCode = `export function ToggleSwitchExample() {
  return (
    <button className="flex w-56 items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm" type="button">
      Critical alert
      <span className="flex h-6 w-11 items-center rounded-full bg-sky-700 p-1">
        <span className="h-4 w-4 translate-x-5 rounded-full bg-white" />
      </span>
    </button>
  );
}`;
