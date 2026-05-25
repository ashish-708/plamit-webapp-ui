import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function BreadcrumbPreview() {
  return (
    <BundlePreviewShell>
      <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
        <button className="font-medium text-slate-700 hover:text-slate-950" type="button">
          Dashboard
        </button>
        <span>/</span>
        <button className="font-medium text-slate-700 hover:text-slate-950" type="button">
          Radiology
        </button>
        <span>/</span>
        <span className="font-medium text-slate-950">Order Detail</span>
      </nav>
    </BundlePreviewShell>
  );
}

export const breadcrumbCode = `export function BreadcrumbExample() {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
      <button className="font-medium text-slate-700 hover:text-slate-950" type="button">Dashboard</button>
      <span>/</span>
      <button className="font-medium text-slate-700 hover:text-slate-950" type="button">Radiology</button>
      <span>/</span>
      <span className="font-medium text-slate-950">Order Detail</span>
    </nav>
  );
}`;
