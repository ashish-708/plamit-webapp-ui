import { BundlePreviewShell } from "../components/BundlePreviewShell";

const timelineEvents = ["Order created", "Patient checked in", "Scan completed"];

export function TimelinePreview() {
  return (
    <BundlePreviewShell>
      <div className="space-y-4">
        {timelineEvents.map((item, index) => (
          <div className="grid grid-cols-[20px_1fr] gap-3" key={item}>
            <div className="flex flex-col items-center">
              <span className="mt-1 h-3 w-3 rounded-full bg-sky-700" />
              {index < timelineEvents.length - 1 ? <span className="mt-1 h-8 w-px bg-slate-200" /> : null}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-950">{item}</p>
              <p className="text-xs text-slate-500">Today, 10:{index}5 AM</p>
            </div>
          </div>
        ))}
      </div>
    </BundlePreviewShell>
  );
}

export const timelineCode = `export function TimelineExample() {
  const timelineEvents = ["Order created", "Patient checked in", "Scan completed"];

  return (
    <div className="space-y-4">
      {timelineEvents.map((item, index) => (
        <div className="grid grid-cols-[20px_1fr] gap-3" key={item}>
          <div className="flex flex-col items-center">
            <span className="mt-1 h-3 w-3 rounded-full bg-sky-700" />
            {index < timelineEvents.length - 1 ? <span className="mt-1 h-8 w-px bg-slate-200" /> : null}
          </div>
          <div>
            <p className="text-sm font-medium text-slate-950">{item}</p>
            <p className="text-xs text-slate-500">Today, 10:{index}5 AM</p>
          </div>
        </div>
      ))}
    </div>
  );
}`;
