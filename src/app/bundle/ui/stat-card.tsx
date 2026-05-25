import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function StatCardPreview() {
  return (
    <BundlePreviewShell>
      <div className="grid max-w-3xl gap-3 md:grid-cols-3">
        {[
          { label: "Revenue", value: "Rs. 4.8L", trend: "+12%" },
          { label: "Patients", value: "328", trend: "+8%" },
          { label: "Pending", value: "19", trend: "-4%" },
        ].map((stat) => (
          <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm" key={stat.label}>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{stat.label}</p>
            <div className="mt-2 flex items-end justify-between gap-3">
              <span className="text-2xl font-semibold text-slate-950">{stat.value}</span>
              <span className="text-xs font-semibold text-emerald-700">{stat.trend}</span>
            </div>
          </article>
        ))}
      </div>
    </BundlePreviewShell>
  );
}

export const statCardCode = `export function StatCardExample() {
  const stats = [
    { label: "Revenue", value: "Rs. 4.8L", trend: "+12%" },
    { label: "Patients", value: "328", trend: "+8%" },
    { label: "Pending", value: "19", trend: "-4%" },
  ];

  return (
    <div className="grid max-w-3xl gap-3 md:grid-cols-3">
      {stats.map((stat) => (
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm" key={stat.label}>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{stat.label}</p>
          <div className="mt-2 flex items-end justify-between gap-3">
            <span className="text-2xl font-semibold text-slate-950">{stat.value}</span>
            <span className="text-xs font-semibold text-emerald-700">{stat.trend}</span>
          </div>
        </article>
      ))}
    </div>
  );
}`;
