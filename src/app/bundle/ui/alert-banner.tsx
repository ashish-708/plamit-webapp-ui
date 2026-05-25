import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function AlertBannerPreview() {
  return (
    <BundlePreviewShell>
      <div className="max-w-xl rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <p className="font-semibold">Preparation pending</p>
        <p className="mt-1">MRI safety checklist is required before scan starts.</p>
      </div>
    </BundlePreviewShell>
  );
}

export const alertBannerCode = `export function AlertBannerExample() {
  return (
    <div className="max-w-xl rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
      <p className="font-semibold">Preparation pending</p>
      <p className="mt-1">MRI safety checklist is required before scan starts.</p>
    </div>
  );
}`;
