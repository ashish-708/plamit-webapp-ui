import { BundlePreviewShell } from "../components/BundlePreviewShell";

const priorityOptions = ["Routine", "Urgent", "Emergency", "STAT"];

export function RadioGroupPreview() {
  return (
    <BundlePreviewShell>
      <div className="flex flex-wrap gap-3">
        {priorityOptions.map((item) => (
          <label className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm" key={item}>
            <input name="priority-preview" type="radio" />
            {item}
          </label>
        ))}
      </div>
    </BundlePreviewShell>
  );
}

export const radioGroupCode = `export function RadioGroupExample() {
  const priorityOptions = ["Routine", "Urgent", "Emergency", "STAT"];

  return (
    <div className="flex flex-wrap gap-3">
      {priorityOptions.map((item) => (
        <label className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm" key={item}>
          <input name="priority" type="radio" />
          {item}
        </label>
      ))}
    </div>
  );
}`;
