"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Cross, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRole } from "@/components/providers/role-provider";
import { RoleSwitcher } from "@/components/shell/role-switcher";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { role } = useRole();
  const visibleItems = navigationItems.filter((item) => item.allowedRoles.includes(role));
  const [openItems, setOpenItems] = useState<string[]>(() =>
    navigationItems
      .filter((item) => item.children?.some((child) => pathname === child.route || pathname.startsWith(`${child.route}/`)))
      .map((item) => item.id),
  );

  function toggleItem(itemId: string) {
    setOpenItems((current) => (current.includes(itemId) ? current.filter((id) => id !== itemId) : [...current, itemId]));
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="lg:hidden" size="icon" variant="outline" aria-label="Open navigation">
          <Menu className="h-4 w-4" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/35" />
        <Dialog.Content className="fixed inset-y-0 left-0 z-[90] flex w-[min(88vw,360px)] flex-col border-r border-border bg-sidebar text-sidebar-foreground shadow-soft outline-none">
          <div className="flex h-14 items-center justify-between border-b border-border px-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Cross className="h-5 w-5" />
              </div>
              <div>
                <Dialog.Title className="text-sm font-semibold">Plasmit Hospital</Dialog.Title>
                <Dialog.Description className="text-xs text-sidebar-foreground/65">Mobile navigation</Dialog.Description>
              </div>
            </div>
            <Dialog.Close asChild>
              <Button size="icon" variant="ghost" aria-label="Close navigation">
                <X className="h-4 w-4" />
              </Button>
            </Dialog.Close>
          </div>
          <div className="border-b border-border p-3">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-sidebar-foreground/55">Active role</div>
            <RoleSwitcher className="w-full border-border bg-sidebar text-sidebar-foreground hover:bg-sidebar-active/10" />
          </div>
          <nav className="min-h-0 flex-1 overflow-auto p-2">
            {visibleItems.map((item) => {
              const Icon = item.icon;
              const visibleChildren = item.children?.filter((child) => child.allowedRoles.includes(role)) ?? [];
              const childActive = visibleChildren.some((child) => pathname === child.route || pathname.startsWith(`${child.route}/`));
              const hasChildren = visibleChildren.length > 0;
              const active = pathname === item.route || childActive;
              const isOpen = openItems.includes(item.id);
              return (
                <div key={item.id}>
                  {hasChildren ? (
                    <button
                      aria-expanded={isOpen}
                      className={cn(
                        "flex h-10 w-full items-center gap-3 rounded-md px-3 text-left text-sm font-medium",
                        active ? "bg-sidebar-active text-sidebar-active-foreground" : "hover:bg-sidebar-active/10",
                      )}
                      onClick={() => toggleItem(item.id)}
                      type="button"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="min-w-0 flex-1 truncate">{item.label}</span>
                      <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform", isOpen && "rotate-180")} />
                    </button>
                  ) : (
                    <Link
                      className={cn(
                        "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium",
                        active ? "bg-sidebar-active text-sidebar-active-foreground" : "hover:bg-sidebar-active/10",
                      )}
                      href={item.route}
                      onClick={() => setOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  )}
                  {hasChildren && isOpen ? (
                    <div className="mb-2 mt-1 space-y-1 border-l border-sidebar-foreground/15 pl-3 ml-5">
                      {visibleChildren.map((child) => {
                        const ChildIcon = child.icon;
                        const childIsActive = pathname === child.route || pathname.startsWith(`${child.route}/`);

                        return (
                          <Link
                            className={cn(
                              "flex min-h-9 items-center gap-2 rounded-md px-3 py-2 text-xs font-medium",
                              childIsActive ? "bg-sidebar-active text-sidebar-active-foreground" : "text-sidebar-foreground/75 hover:bg-sidebar-active/10",
                            )}
                            href={child.route}
                            key={child.id}
                            onClick={() => setOpen(false)}
                          >
                            <ChildIcon className="h-3.5 w-3.5" />
                            <span className="min-w-0 flex-1 truncate">{child.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
