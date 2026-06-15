"use client";

import { Building2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CommandSearch } from "@/components/shell/command-search";
import { MobileNavigation } from "@/components/shell/mobile-navigation";
import { NotificationPopover } from "@/components/shell/notification-popover";
import { ProfileMenu } from "@/components/shell/profile-menu";
import { RoleSwitcher } from "@/components/shell/role-switcher";
import { Button } from "@/components/ui/button";
import { hospitalContext } from "@/data/mock";

export function TopHeader({ variant = "default" }: { variant?: "default" | "source" }) {
  if (variant === "source") {
    return (
      <header className="flex h-14 items-center gap-2 border-b border-header-border bg-header px-3 md:px-4">
        <MobileNavigation />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <span className="truncate">{hospitalContext.name}</span>
            <span className="hidden text-muted-foreground sm:inline">/ {hospitalContext.branch}</span>
          </div>
          <div className="hidden text-xs text-muted-foreground md:block">{hospitalContext.department} • {hospitalContext.shift}</div>
        </div>
        <CommandSearch
          label="Search radiology or command..."
          triggerClassName="hidden h-9 min-w-64 items-center gap-2 rounded-md border border-border bg-surface px-3 text-left text-sm text-muted-foreground hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:flex"
        />
        <RoleSwitcher className="hidden sm:flex" />
        <NotificationPopover />
        <Button asChild size="icon" variant="outline" aria-label="Open UI settings">
          <Link href="/settings/ui">
            <ShieldCheck className="h-4 w-4" />
          </Link>
        </Button>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-1 border-b border-header-border bg-white/92 px-2 shadow-[0_1px_0_rgba(229,227,236,0.7)] backdrop-blur sm:gap-2 md:px-4">
      <MobileNavigation />
      <div className="min-w-0 flex-1">
        <Image
          src="/plasmit-sidebar-logo.webp"
          alt="Plasmit Healthcare IT Vector"
          width={150}
          height={61}
          priority
          className="h-8 w-[112px] max-w-[34vw] object-contain object-left lg:hidden"
        />
        <div className="hidden items-center gap-2 text-sm font-bold text-foreground lg:flex">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          <span className="truncate">{hospitalContext.name}</span>
          <span className="hidden text-muted-foreground sm:inline">/ {hospitalContext.branch}</span>
        </div>
        <div className="hidden text-xs text-muted-foreground md:block">{hospitalContext.department} • {hospitalContext.shift}</div>
      </div>
      <CommandSearch />
      <RoleSwitcher className="hidden sm:flex" />
      <ProfileMenu />
    </header>
  );
}
