import {
  Activity,
  Archive,
  AlertTriangle,
  BarChart3,
  Bell,
  ClipboardList,
  FileCheck2,
  FileText,
  LayoutDashboard,
  MonitorUp,
  ScanSearch,
  Search,
  Settings,
  Truck,
  Users,
} from "lucide-react";

import type { NavigationItem, Role } from "@/types";

export const roles: Role[] = [
  "Super Admin",
  "Hospital Admin",
  "Doctor",
  "Nurse",
  "Receptionist",
  "Lab Technician",
  "Radiologist",
  "Pharmacist",
  "Billing Executive",
  "HR Manager",
  "Management",
];

const allRoles = roles;
const radiologyRoles: Role[] = ["Super Admin", "Hospital Admin", "Doctor", "Nurse", "Receptionist", "Radiologist", "Billing Executive", "Management"];
const resultsRoles: Role[] = ["Super Admin", "Hospital Admin", "Doctor", "Nurse", "Receptionist", "Lab Technician", "Radiologist", "Management"];

export const navigationItems: NavigationItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, route: "/dashboard", group: "Command", allowedRoles: allRoles, status: "ready" },
  { id: "search", label: "Global Search", icon: Search, route: "/search", group: "Command", allowedRoles: allRoles, status: "ready" },
  { id: "notifications", label: "Notifications", icon: Bell, route: "/notifications", group: "Command", allowedRoles: allRoles, status: "ready" },
  {
    id: "results",
    label: "Results",
    icon: FileCheck2,
    route: "/results",
    group: "Diagnostics",
    allowedRoles: resultsRoles,
    status: "ready",
    children: [
      { id: "results-center", label: "Results Center", icon: FileCheck2, route: "/results", allowedRoles: resultsRoles, status: "ready" },
      { id: "results-laboratory", label: "Laboratory Results", icon: ClipboardList, route: "/results/laboratory", allowedRoles: resultsRoles, status: "ready" },
      { id: "results-radiology", label: "Radiology Results", icon: ScanSearch, route: "/results/radiology", allowedRoles: resultsRoles, status: "ready" },
      { id: "results-poct", label: "POCT Results", icon: Activity, route: "/results/poct", allowedRoles: resultsRoles, status: "ready" },
      { id: "results-critical", label: "Critical Results", icon: AlertTriangle, route: "/results/critical", allowedRoles: resultsRoles, status: "ready" },
    ],
  },
  {
    id: "radiology",
    label: "Radiology MNT",
    icon: ScanSearch,
    route: "/radiology/dashboard",
    group: "Radiology",
    allowedRoles: radiologyRoles,
    status: "ready",
    children: [
      { id: "radiology-dashboard", label: "Dashboard", icon: LayoutDashboard, route: "/radiology/dashboard", allowedRoles: radiologyRoles, status: "ready" },
      { id: "radiology-orders", label: "Orders", icon: ClipboardList, route: "/radiology/order-list", allowedRoles: radiologyRoles, status: "ready" },
      { id: "radiology-front-office", label: "Front Office", icon: Users, route: "/radiology/front-office", allowedRoles: radiologyRoles, status: "ready" },
      { id: "radiology-scan-room", label: "Scan Room", icon: Activity, route: "/radiology/scan-room", allowedRoles: radiologyRoles, status: "ready" },
      { id: "radiology-pacs", label: "PACS", icon: MonitorUp, route: "/radiology/pacs-studies", allowedRoles: radiologyRoles, status: "ready" },
      { id: "radiology-reporting", label: "Reporting", icon: FileText, route: "/radiology/reporting", allowedRoles: radiologyRoles, status: "ready" },
      { id: "radiology-delivery-alerts", label: "Delivery & Alerts", icon: Truck, route: "/radiology/delivery-alerts", allowedRoles: radiologyRoles, status: "ready" },
      { id: "radiology-admin-mis", label: "Admin & MIS", icon: BarChart3, route: "/radiology/admin-mis", allowedRoles: radiologyRoles, status: "ready" },
    ],
  },
  { id: "settings", label: "UI Settings", icon: Settings, route: "/settings/ui", group: "Command", allowedRoles: allRoles, status: "ready" },
  { id: "preview", label: "Components Preview", icon: Archive, route: "/components-preview", group: "Command", allowedRoles: ["Super Admin", "Hospital Admin"], status: "ready" },
];

export const dashboardQuickActions = [
  { id: "radiology", label: "Open radiology", icon: ScanSearch, route: "/radiology/dashboard" },
  { id: "radiology-orders", label: "Radiology orders", icon: ScanSearch, route: "/radiology/order-list" },
  { id: "radiology-front-office", label: "Radiology front office", icon: ScanSearch, route: "/radiology/front-office" },
  { id: "radiology-reports", label: "Radiology reports", icon: ScanSearch, route: "/radiology/reporting" },
];
