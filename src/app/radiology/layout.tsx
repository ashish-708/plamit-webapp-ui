import type { ReactNode } from "react";
import { ScanSearch } from "lucide-react";

import { AppShell } from "@/components/shell/app-shell";
import { PageHeader } from "@/components/shell/page-header";
import { RadiologyModuleHeaderActions } from "@/features/radiology/components/RadiologyModuleHeaderActions";

export default function RadiologyModuleLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Radiology MNT"
        title="Radiology Management"
        description="Single, easy workflow for orders, billing, scheduling, scan room, PACS, reporting, alerts, masters, and MIS."
        actions={<RadiologyModuleHeaderActions />}
        metrics={
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2 py-1">
              <ScanSearch className="h-3.5 w-3.5" />
              RIS workflow active
            </span>
            <span className="rounded-md border border-border bg-surface px-2 py-1">Reception - Technician - Radiologist - Delivery</span>
          </div>
        }
      />
      <div className="pt-5">{children}</div>
    </AppShell>
  );
}
