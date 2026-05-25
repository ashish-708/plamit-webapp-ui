import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function CardPreview() {
  return (
    <BundlePreviewShell>
      <article className="max-w-sm rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Orders Today</p>
        <div className="mt-2 text-2xl font-semibold text-slate-950">48</div>
        <p className="mt-1 text-sm text-slate-500">Across CT, MRI, X-Ray and USG.</p>
        <button className="mt-4 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700" type="button">
          View all
        </button>
      </article>
    </BundlePreviewShell>
  );
}

export const cardCode = `export function CardExample() {
  return (
    <article className="max-w-sm rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Orders Today</p>
      <div className="mt-2 text-2xl font-semibold text-slate-950">48</div>
      <p className="mt-1 text-sm text-slate-500">Across CT, MRI, X-Ray and USG.</p>
      <button className="mt-4 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700" type="button">
        View all
      </button>
    </article>
  );
}`;
