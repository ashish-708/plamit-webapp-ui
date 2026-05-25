"use client";

import * as React from "react";

import { roles } from "@/data/navigation";
import type { Role } from "@/types";

type RoleContextValue = {
  role: Role;
  setRole: (role: Role) => void;
  roles: Role[];
};

const RoleContext = React.createContext<RoleContextValue | null>(null);
const roleChangeEvent = "plasmit-role-change";

function readSavedRole(): Role {
  if (typeof window === "undefined") {
    return "Hospital Admin";
  }

  const saved = window.localStorage.getItem("plasmit-role");
  return saved && roles.includes(saved as Role) ? (saved as Role) : "Hospital Admin";
}

function subscribeToRoleChanges(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(roleChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(roleChangeEvent, onStoreChange);
  };
}

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const role = React.useSyncExternalStore(subscribeToRoleChanges, readSavedRole, (): Role => "Hospital Admin");

  const setRole = React.useCallback((nextRole: Role) => {
    window.localStorage.setItem("plasmit-role", nextRole);
    window.dispatchEvent(new Event(roleChangeEvent));
  }, []);

  const value = React.useMemo(() => ({ role, setRole, roles }), [role, setRole]);

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole() {
  const context = React.useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used inside RoleProvider");
  }
  return context;
}
