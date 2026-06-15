import type { ReactNode } from "react";
import { AppShell } from "@/components/shell/app-shell";
import { RadiologyModuleHeaderActions } from "@/features/radiology/components/RadiologyModuleHeaderActions";

export default function RadiologyModuleLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell variant="source">
      <div className="-mx-4 border-b border-border bg-background px-4 py-3 md:-mx-6 md:px-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div className="mb-1 text-xs font-medium text-muted-foreground">Diagnostics</div>
            <h1 className="truncate text-xl font-semibold tracking-tight text-foreground">Radiology</h1>
            <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
              Orders, scheduling, scan operations, PACS, reporting, delivery, and critical communication in one workflow.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <RadiologyModuleHeaderActions />
          </div>
        </div>
      </div>
      <div className="pt-5">{children}</div>
    </AppShell>
  );
}
