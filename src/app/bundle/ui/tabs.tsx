import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function TabsPreview() {
  return (
    <BundlePreviewShell>
      <div className="flex flex-wrap gap-2 rounded-lg border border-slate-200 bg-slate-50 p-1">
        {["Queue", "Scan", "Report"].map((tab, index) => (
          <button
            className={[
              "rounded-md px-3 py-2 text-sm font-medium",
              index === 0 ? "bg-white text-slate-950 shadow-sm" : "text-slate-600 hover:text-slate-950",
            ].join(" ")}
            key={tab}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>
    </BundlePreviewShell>
  );
}

export const tabsCode = `export function TabsExample() {
  return (
    <div className="flex flex-wrap gap-2 rounded-lg border border-slate-200 bg-slate-50 p-1">
      {["Queue", "Scan", "Report"].map((tab, index) => (
        <button
          className={index === 0 ? "rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-950 shadow-sm" : "rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-950"}
          key={tab}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}`;
