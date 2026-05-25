# Radiology MNT Tab-Wise Workflow

## Why the menu was reduced

Radiology had many separate submenu items, so daily work was hard to scan. The sidebar is now reduced into 8 clean workspaces. Each workspace opens one page, and related screens are available as tabs inside that page.

Old direct routes are still available for compatibility, but the sidebar now uses the grouped workflow.

## Sidebar structure

| Sidebar menu | Tabs inside | Main users | Use |
| --- | --- | --- | --- |
| Dashboard | Dashboard view | Admin, Radiologist, Reception, Technician | Overall command view for orders, scan activity, pending reports, alerts, and next actions. |
| Orders | Order List, Create Order, Billing Status | Doctor, Reception, Billing | Create radiology orders, track order status, and clear billing before scheduling or scan movement. |
| Front Office | Scheduling, Patient Queue, Check-in, Preparation | Reception, Nurse, Technician | Manage appointment slots, arrival, waiting queue, and patient preparation before scan. |
| Scan Room | Technician Worklist, Scan Management | Technician | See ready cases, start scans, complete scans, and move studies toward PACS. |
| PACS | PACS Study List | Technician, Radiologist | Verify image transfer, accession number, PACS status, and study readiness. |
| Reporting | Workbench, Templates, Verification, Preview / Print | Radiologist, Doctor, Admin | Draft reports, use templates, verify reports, and preview or print released reports. |
| Delivery & Alerts | Report Delivery, Critical Alerts | Reception, Doctor, Radiologist | Deliver reports and acknowledge or close critical findings. |
| Admin & MIS | Masters, Analytics / MIS | Admin, Management | Manage setup data and review performance, revenue, turnaround time, and alert metrics. |

## Role-wise use

| Role | Primary workspaces | What they do |
| --- | --- | --- |
| Doctor | Orders, Reporting, Delivery & Alerts | Create or review orders, see final reports, and respond to critical findings. |
| Reception | Orders, Front Office, Delivery & Alerts | Register or find patient orders, schedule appointments, check in patients, and deliver reports. |
| Billing Executive | Orders | Review payment status and clear billing before scan workflow continues. |
| Nurse / Floor Staff | Front Office | Complete preparation checklist, consent, fasting, contrast readiness, and safety checks. |
| Technician | Front Office, Scan Room, PACS | Pick ready patients, perform scans, complete study status, and confirm PACS transfer. |
| Radiologist | PACS, Reporting, Delivery & Alerts | Review studies, draft and verify reports, and manage critical alerts. |
| Admin / Management | Dashboard, Admin & MIS | Monitor operations, masters, utilization, turnaround time, and business metrics. |

## Screen behavior

The user should first choose a broad sidebar workspace. After that, they should switch tabs inside the page instead of moving through many sidebar links.

Example flow:

1. Doctor or reception opens `Orders`.
2. They use `Create Order` to make a new order. Header and dashboard `New Order` actions open the form in a centered window without leaving the current screen.
3. Billing user checks `Billing Status`.
4. Reception opens `Front Office` and uses `Scheduling`, `Patient Queue`, and `Check-in`.
5. Technician opens `Scan Room` and uses `Technician Worklist` and `Scan Management`.
6. PACS user checks `PACS`.
7. Radiologist opens `Reporting` and uses `Workbench`, `Verification`, and `Preview / Print`.
8. Reception or doctor uses `Delivery & Alerts` for final delivery and critical communication.
9. Admin uses `Admin & MIS` for masters and analytics.

## Current grouped routes

| Route | Purpose |
| --- | --- |
| `/radiology/dashboard` | Radiology command dashboard. |
| `/radiology/order-list` | Orders workspace with order, create, and billing tabs. |
| `/radiology/front-office` | Front-office workspace with scheduling, queue, check-in, and preparation tabs. |
| `/radiology/scan-room` | Scan-room workspace with technician and scan execution tabs. |
| `/radiology/pacs-studies` | PACS workspace for image study readiness. |
| `/radiology/reporting` | Reporting workspace with report drafting, templates, verification, and print preview. |
| `/radiology/delivery-alerts` | Delivery and critical alerts workspace. |
| `/radiology/admin-mis` | Masters and analytics workspace. |
