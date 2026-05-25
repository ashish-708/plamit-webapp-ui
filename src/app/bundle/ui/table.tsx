import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function TablePreview() {
  return (
    <BundlePreviewShell>
      <div className="overflow-hidden rounded-lg border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-4 py-3 font-medium">RAD-2026-07001</td>
              <td className="px-4 py-3">Aarav Mehta</td>
              <td className="px-4 py-3">Scheduled</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">RAD-2026-07002</td>
              <td className="px-4 py-3">Meera Singh</td>
              <td className="px-4 py-3">Reported</td>
            </tr>
          </tbody>
        </table>
      </div>
    </BundlePreviewShell>
  );
}

export const tableCode = `export function TableExample() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-4 py-3">Order</th>
            <th className="px-4 py-3">Patient</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="px-4 py-3 font-medium">RAD-2026-07001</td>
            <td className="px-4 py-3">Aarav Mehta</td>
            <td className="px-4 py-3">Scheduled</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}`;
