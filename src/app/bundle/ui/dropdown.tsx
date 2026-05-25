import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function DropdownPreview() {
  return (
    <BundlePreviewShell>
      <div className="inline-block rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
        <button className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white" type="button">
          Actions
        </button>
        <div className="mt-2 w-44 rounded-md border border-slate-200 bg-white p-1 shadow-sm">
          {["View detail", "Edit record", "Print slip"].map((item) => (
            <button className="w-full rounded px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100" key={item} type="button">
              {item}
            </button>
          ))}
        </div>
      </div>
    </BundlePreviewShell>
  );
}

export const dropdownCode = `export function DropdownExample() {
  return (
    <div className="inline-block rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
      <button className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white" type="button">
        Actions
      </button>
      <div className="mt-2 w-44 rounded-md border border-slate-200 bg-white p-1 shadow-sm">
        {["View detail", "Edit record", "Print slip"].map((item) => (
          <button className="w-full rounded px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100" key={item} type="button">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}`;
