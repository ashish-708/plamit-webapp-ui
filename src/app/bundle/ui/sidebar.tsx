import { BundlePreviewShell } from "../components/BundlePreviewShell";

const sidebarItems = ["Dashboard", "Appointments", "Billing", "Reports"];

export function SidebarPreview() {
  return (
    <BundlePreviewShell>
      <aside className="w-64 rounded-lg border border-slate-200 bg-white p-3">
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Main Menu</p>
        <div className="space-y-1">
          {sidebarItems.map((item, index) => (
            <button
              className={[
                "w-full rounded-md px-3 py-2 text-left text-sm font-medium",
                index === 0 ? "bg-sky-700 text-white" : "text-slate-700 hover:bg-slate-100",
              ].join(" ")}
              key={item}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </aside>
    </BundlePreviewShell>
  );
}

export const sidebarCode = `export function SidebarExample() {
  const sidebarItems = ["Dashboard", "Appointments", "Billing", "Reports"];

  return (
    <aside className="w-64 rounded-lg border border-slate-200 bg-white p-3">
      <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Main Menu</p>
      <div className="space-y-1">
        {sidebarItems.map((item, index) => (
          <button
            className={index === 0 ? "w-full rounded-md bg-sky-700 px-3 py-2 text-left text-sm font-medium text-white" : "w-full rounded-md px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"}
            key={item}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
    </aside>
  );
}`;
