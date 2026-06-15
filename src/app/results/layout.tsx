import type { ReactNode } from "react";
import Link from "next/link";
import { AlertTriangle, FlaskConical } from "lucide-react";

import { AppShell } from "@/components/shell/app-shell";
import { PageHeader } from "@/components/shell/page-header";
import { Button } from "@/components/ui/button";
import { ResultsHeaderActions } from "@/features/results/components/ResultsHeaderActions";

export default function ResultsLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell variant="source">
      <PageHeader
        eyebrow="Diagnostics Results"
        title="Results Center"
        description="Unified patient results workspace for laboratory, radiology, POCT, reports, images, and critical alerts."
        actions={
          <>
            <Button asChild variant="outline">
              <Link href="/results/laboratory">
                <FlaskConical className="h-4 w-4" />
                Laboratory
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/results/critical">
                <AlertTriangle className="h-4 w-4" />
                Critical
              </Link>
            </Button>
            <ResultsHeaderActions />
          </>
        }
        variant="source"
      />
      <div className="pt-5">{children}</div>
    </AppShell>
  );
}
