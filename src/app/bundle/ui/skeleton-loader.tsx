import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function SkeletonLoaderPreview() {
  return (
    <BundlePreviewShell>
      <div className="max-w-md animate-pulse space-y-3 rounded-lg border border-slate-200 p-4">
        <div className="h-4 w-32 rounded bg-slate-200" />
        <div className="h-8 w-48 rounded bg-slate-200" />
        <div className="h-3 w-full rounded bg-slate-200" />
        <div className="h-3 w-3/4 rounded bg-slate-200" />
      </div>
    </BundlePreviewShell>
  );
}

export const skeletonLoaderCode = `export function SkeletonLoaderExample() {
  return (
    <div className="max-w-md animate-pulse space-y-3 rounded-lg border border-slate-200 p-4">
      <div className="h-4 w-32 rounded bg-slate-200" />
      <div className="h-8 w-48 rounded bg-slate-200" />
      <div className="h-3 w-full rounded bg-slate-200" />
      <div className="h-3 w-3/4 rounded bg-slate-200" />
    </div>
  );
}`;
