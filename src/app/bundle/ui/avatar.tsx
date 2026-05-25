import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function AvatarPreview() {
  return (
    <BundlePreviewShell>
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-800">AM</div>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-950">Aarav Mehta</p>
          <p className="text-xs text-slate-500">MRN: HSP-10483</p>
        </div>
      </div>
    </BundlePreviewShell>
  );
}

export const avatarCode = `export function AvatarExample() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-800">AM</div>
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-950">Aarav Mehta</p>
        <p className="text-xs text-slate-500">MRN: HSP-10483</p>
      </div>
    </div>
  );
}`;
