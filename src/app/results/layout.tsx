import type { ReactNode } from "react";

import { AppShell } from "@/components/shell/app-shell";
import { PageHeader } from "@/components/shell/page-header";

export default function ResultsLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell variant="source">
      <PageHeader
        eyebrow="Diagnostics Results"
        title="Results Center"
        description="Unified patient results workspace for laboratory, radiology, POCT, reports, images, and critical alerts."
        variant="source"
      />
      <div className="pt-5">{children}</div>
    </AppShell>
  );
}
