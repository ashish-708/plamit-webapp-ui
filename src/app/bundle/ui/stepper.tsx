import { BundlePreviewShell } from "../components/BundlePreviewShell";

const steps = ["Order", "Billing", "Scan", "Report"];

export function StepperPreview() {
  return (
    <BundlePreviewShell>
      <div className="flex flex-wrap items-center gap-3">
        {steps.map((step, index) => (
          <div className="flex items-center gap-3" key={step}>
            <div className="flex items-center gap-2">
              <span className={index < 2 ? "flex h-7 w-7 items-center justify-center rounded-full bg-sky-700 text-xs font-semibold text-white" : "flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-600"}>
                {index + 1}
              </span>
              <span className="text-sm font-medium text-slate-700">{step}</span>
            </div>
            {index < steps.length - 1 ? <span className="h-px w-8 bg-slate-200" /> : null}
          </div>
        ))}
      </div>
    </BundlePreviewShell>
  );
}

export const stepperCode = `export function StepperExample() {
  const steps = ["Order", "Billing", "Scan", "Report"];

  return (
    <div className="flex flex-wrap items-center gap-3">
      {steps.map((step, index) => (
        <div className="flex items-center gap-3" key={step}>
          <div className="flex items-center gap-2">
            <span className={index < 2 ? "flex h-7 w-7 items-center justify-center rounded-full bg-sky-700 text-xs font-semibold text-white" : "flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-600"}>
              {index + 1}
            </span>
            <span className="text-sm font-medium text-slate-700">{step}</span>
          </div>
          {index < steps.length - 1 ? <span className="h-px w-8 bg-slate-200" /> : null}
        </div>
      ))}
    </div>
  );
}`;
