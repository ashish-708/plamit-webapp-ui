import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function NavbarPreview() {
  return (
    <BundlePreviewShell>
      <header className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-950">Hospital UI</p>
          <p className="text-xs text-slate-500">Admin workspace</p>
        </div>
        <nav className="flex flex-wrap gap-2 text-sm">
          {["Dashboard", "Patients", "Reports"].map((item) => (
            <button className="rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-950" key={item} type="button">
              {item}
            </button>
          ))}
        </nav>
        <button className="rounded-md bg-sky-700 px-3 py-2 text-sm font-medium text-white" type="button">
          New
        </button>
      </header>
    </BundlePreviewShell>
  );
}

export const navbarCode = `export function NavbarExample() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
      <div>
        <p className="text-sm font-semibold text-slate-950">Hospital UI</p>
        <p className="text-xs text-slate-500">Admin workspace</p>
      </div>
      <nav className="flex flex-wrap gap-2 text-sm">
        {["Dashboard", "Patients", "Reports"].map((item) => (
          <button className="rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-950" key={item} type="button">
            {item}
          </button>
        ))}
      </nav>
      <button className="rounded-md bg-sky-700 px-3 py-2 text-sm font-medium text-white" type="button">
        New
      </button>
    </header>
  );
}`;
