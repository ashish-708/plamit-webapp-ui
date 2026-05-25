import { BundlePreviewShell } from "../components/BundlePreviewShell";

const checklistItems = ["Patient identity verified", "Consent received", "Allergy checked"];

export function CheckboxPreview() {
  return (
    <BundlePreviewShell>
      <div className="space-y-3">
        {checklistItems.map((item) => (
          <label className="flex items-center gap-3 text-sm text-slate-800" key={item}>
            <input className="h-4 w-4 rounded border-slate-300 text-sky-700 focus:ring-sky-700" type="checkbox" />
            {item}
          </label>
        ))}
      </div>
    </BundlePreviewShell>
  );
}

export const checkboxCode = `export function CheckboxExample() {
  const checklistItems = ["Patient identity verified", "Consent received", "Allergy checked"];

  return (
    <div className="space-y-3">
      {checklistItems.map((item) => (
        <label className="flex items-center gap-3 text-sm text-slate-800" key={item}>
          <input className="h-4 w-4 rounded border-slate-300 text-sky-700 focus:ring-sky-700" type="checkbox" />
          {item}
        </label>
      ))}
    </div>
  );
}`;
