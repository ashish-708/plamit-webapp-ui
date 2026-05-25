import type { ReactNode } from "react";

export const baseInputClass =
  "h-10 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-sky-700 focus:ring-2 focus:ring-sky-100";

export function BundlePreviewShell({ children }: { children: ReactNode }) {
  return <div className="max-w-full overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm">{children}</div>;
}
