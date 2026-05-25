import { BundlePreviewShell } from "../components/BundlePreviewShell";

export function AccordionPreview() {
  return (
    <BundlePreviewShell>
      <div className="max-w-xl divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
        <details className="group p-4" open>
          <summary className="cursor-pointer list-none text-sm font-semibold text-slate-950">Patient details</summary>
          <p className="mt-2 text-sm text-slate-600">Age, gender, contact, payer, and visit information.</p>
        </details>
        <details className="group p-4">
          <summary className="cursor-pointer list-none text-sm font-semibold text-slate-950">Order details</summary>
          <p className="mt-2 text-sm text-slate-600">Tests, modality, priority, and clinical indication.</p>
        </details>
      </div>
    </BundlePreviewShell>
  );
}

export const accordionCode = `export function AccordionExample() {
  return (
    <div className="max-w-xl divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
      <details className="group p-4" open>
        <summary className="cursor-pointer list-none text-sm font-semibold text-slate-950">Patient details</summary>
        <p className="mt-2 text-sm text-slate-600">Age, gender, contact, payer, and visit information.</p>
      </details>
      <details className="group p-4">
        <summary className="cursor-pointer list-none text-sm font-semibold text-slate-950">Order details</summary>
        <p className="mt-2 text-sm text-slate-600">Tests, modality, priority, and clinical indication.</p>
      </details>
    </div>
  );
}`;
