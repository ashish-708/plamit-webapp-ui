"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronLeft, ChevronRight, Cross } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRole } from "@/components/providers/role-provider";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function AppSidebar({
  collapsed,
  onCollapsedChange,
}: {
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
}) {
  const pathname = usePathname();
  const { role } = useRole();
  const visibleItems = navigationItems.filter((item) => item.allowedRoles.includes(role));
  const groups = Array.from(new Set(visibleItems.map((item) => item.group)));
  const [openItems, setOpenItems] = useState<string[]>(() =>
    navigationItems
      .filter((item) => item.children?.some((child) => pathname === child.route || pathname.startsWith(`${child.route}/`)))
      .map((item) => item.id),
  );

  function toggleItem(itemId: string) {
    if (collapsed) {
      onCollapsedChange(false);
    }

    setOpenItems((current) => (current.includes(itemId) ? current.filter((id) => id !== itemId) : [...current, itemId]));
  }

  return (
    <aside
      className={cn(
        "hidden h-dvh shrink-0 border-r border-border bg-sidebar text-sidebar-foreground transition-all lg:sticky lg:top-0 lg:z-50 lg:flex lg:flex-col",
        collapsed ? "w-[72px]" : "w-[264px]",
      )}
    >
      <div className="flex h-14 items-center gap-3 border-b border-border px-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Cross className="h-5 w-5" />
        </div>
        {!collapsed ? (
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">Plasmit Hospital</div>
            <div className="text-xs text-sidebar-foreground/65">Enterprise HMS</div>
          </div>
        ) : null}
      </div>

      <nav className="min-h-0 flex-1 overflow-y-auto px-2 py-3">
        {groups.map((group) => (
          <div className="mb-3" key={group}>
            {!collapsed ? <div className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-sidebar-foreground/55">{group}</div> : null}
            <div className="space-y-1">
              {visibleItems
                .filter((item) => item.group === group)
                .map((item) => {
                  const Icon = item.icon;
                  const visibleChildren = item.children?.filter((child) => child.allowedRoles.includes(role)) ?? [];
                  const childActive = visibleChildren.some((child) => pathname === child.route || pathname.startsWith(`${child.route}/`));
                  const hasChildren = visibleChildren.length > 0;
                  const active = pathname === item.route || (item.route !== "/dashboard" && pathname.startsWith(item.route)) || childActive;
                  const isOpen = openItems.includes(item.id);
                  return (
                    <div key={item.id}>
                      {hasChildren ? (
                        <button
                          aria-expanded={isOpen}
                          aria-label={collapsed ? item.label : undefined}
                          className={cn(
                            "group flex h-9 w-full items-center gap-3 rounded-md px-2 text-left text-sm font-medium outline-none transition hover:bg-sidebar-active/10 focus-visible:ring-2 focus-visible:ring-ring",
                            active && "bg-sidebar-active text-sidebar-active-foreground hover:bg-sidebar-active",
                            collapsed && "justify-center",
                          )}
                          onClick={() => toggleItem(item.id)}
                          title={collapsed ? item.label : undefined}
                          type="button"
                        >
                          <Icon className="h-4 w-4 shrink-0" />
                          {!collapsed ? <span className="min-w-0 flex-1 truncate">{item.label}</span> : null}
                          {!collapsed ? <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform", isOpen && "rotate-180")} /> : null}
                        </button>
                      ) : (
                        <Link
                          aria-label={collapsed ? item.label : undefined}
                          className={cn(
                            "group flex h-9 items-center gap-3 rounded-md px-2 text-sm font-medium outline-none transition hover:bg-sidebar-active/10 focus-visible:ring-2 focus-visible:ring-ring",
                            active && "bg-sidebar-active text-sidebar-active-foreground hover:bg-sidebar-active",
                            collapsed && "justify-center",
                          )}
                          href={item.route}
                          title={collapsed ? item.label : undefined}
                        >
                          <Icon className="h-4 w-4 shrink-0" />
                          {!collapsed ? <span className="min-w-0 flex-1 truncate">{item.label}</span> : null}
                          {!collapsed && item.status === "planned" ? <Badge tone="muted">Plan</Badge> : null}
                        </Link>
                      )}
                      {!collapsed && hasChildren && isOpen ? (
                        <div className="mt-1 space-y-1 border-l border-sidebar-foreground/15 pl-3 ml-4">
                          {visibleChildren.map((child) => {
                            const ChildIcon = child.icon;
                            const childIsActive = pathname === child.route || pathname.startsWith(`${child.route}/`);

                            return (
                              <Link
                                className={cn(
                                  "flex min-h-8 items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium outline-none transition hover:bg-sidebar-active/10 focus-visible:ring-2 focus-visible:ring-ring",
                                  childIsActive ? "bg-sidebar-active text-sidebar-active-foreground hover:bg-sidebar-active" : "text-sidebar-foreground/75",
                                )}
                                href={child.route}
                                key={child.id}
                              >
                                <ChildIcon className="h-3.5 w-3.5 shrink-0" />
                                <span className="min-w-0 flex-1 truncate">{child.label}</span>
                                {child.status === "planned" ? <Badge tone="muted">Plan</Badge> : null}
                              </Link>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-border p-2">
        <Button
          className={cn("w-full", collapsed && "px-0")}
          onClick={() => onCollapsedChange(!collapsed)}
          variant="ghost"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          {!collapsed ? "Collapse" : null}
        </Button>
      </div>
    </aside>
  );
}
