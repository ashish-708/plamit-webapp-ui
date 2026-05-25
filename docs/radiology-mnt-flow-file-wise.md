# Radiology MNT Flow - File Wise Detail

This document explains the current Radiology MNT module flow, route mapping, file responsibilities, and how data moves across the frontend.

## 1. High Level Flow

Radiology MNT follows this frontend workflow:

```text
Patient Search / Selection
-> Create Radiology Order
-> Billing Clearance
-> Scheduling
-> Patient Queue
-> Patient Check-in
-> Preparation Checklist
-> Technician Worklist
-> Scan Management
-> Send Images to PACS
-> Reporting Workbench
-> Report Verification
-> Report Preview / Print
-> Report Delivery
-> Critical Alerts
-> Masters / Analytics
```

The module is frontend-only right now. It uses mock data plus browser `localStorage` to make the workflow functional without backend APIs.

## 2. Sidebar / Menu Flow

### `src/data/navigation.ts`

This file defines the main website sidebar menu.

Radiology is added as:

```text
Radiology MNT
  Dashboard
  Order List
  Create Order
  Billing Status
  Scheduling
  Patient Queue
  Patient Check-in
  Preparation Checklist
  Technician Worklist
  Scan Management
  PACS Study List
  Reporting Workbench
  Report Templates
  Report Verification
  Report Preview / Print
  Report Delivery
  Critical Alerts
  Masters
  Analytics / MIS
```

Important behavior:

- Old `/radiology` landing is not used as the main menu target.
- Main Radiology menu points to `/radiology/dashboard`.
- Order List points to the new page `/radiology/order-list`.
- Role-based visibility is controlled through `radiologyRoles`.

### `src/components/shell/app-sidebar.tsx`

Desktop sidebar rendering.

Responsibilities:

- Shows `Radiology MNT` as one collapsible menu.
- Clicking `Radiology MNT` opens/closes submenu.
- Active submenu item is highlighted.
- If sidebar is collapsed and user clicks Radiology MNT, it expands first.

### `src/components/shell/mobile-navigation.tsx`

Mobile drawer navigation.

Responsibilities:

- Shows same Radiology MNT submenu on mobile.
- Supports open/close behavior.
- Closes drawer after clicking a submenu route.

### `src/components/providers/role-provider.tsx`

Role state provider.

Responsibilities:

- Reads current role from `localStorage`.
- Uses `useSyncExternalStore` so role changes stay synced.
- Required because Radiology MNT visibility depends on active user role.

## 3. Layout Flow

### `src/app/radiology/layout.tsx`

This is the shared layout for all new Radiology MNT pages.

Responsibilities:

- Uses main website `AppShell`.
- Uses existing website `PageHeader`.
- Keeps Radiology pages visually matched with rest of HMS.
- Adds top actions:
  - Orders
  - Queue
  - New Order

This file intentionally does not use a separate Radiology sidebar.

## 4. Data Store / Functional Workflow

### `src/features/radiology/hooks/useRadiologyWorkspace.ts`

This is the core frontend workflow store.

Storage:

```text
localStorage key: plasmit-radiology-workspace-v1
```

It starts with mock data and then persists user actions locally.

State managed:

- `orders`
- `schedules`
- `reports`
- `pacsStudies`
- `criticalAlerts`

Main actions:

- `resetWorkspace()`
- `createOrder()`
- `clearBilling()`
- `scheduleOrder()`
- `checkIn()`
- `completePreparation()`
- `startScan()`
- `completeScan()`
- `sendToPacs()`
- `saveReportDraft()`
- `verifyReport()`
- `releaseReport()`
- `deliverReport()`
- `acknowledgeAlert()`

Example flow inside store:

```text
createOrder()
  -> creates order
  -> status PAYMENT_PENDING or PAYMENT_DONE
  -> adds timeline event

clearBilling()
  -> status PAYMENT_DONE
  -> billingStatus Paid
  -> adds timeline event

scheduleOrder()
  -> creates Schedule record
  -> status SCHEDULED
  -> adds timeline event

checkIn()
  -> status PATIENT_ARRIVED

completePreparation()
  -> status READY_FOR_SCAN

startScan()
  -> status SCAN_IN_PROGRESS

completeScan()
  -> status SCAN_COMPLETED

sendToPacs()
  -> creates PACSStudy
  -> status IMAGE_SENT_TO_PACS

saveReportDraft()
  -> creates/updates RadiologyReport
  -> status REPORT_DRAFTED
  -> if critical, creates CriticalAlert

verifyReport()
  -> report status Verified
  -> order status REPORT_VERIFIED

releaseReport()
  -> report status Released
  -> order status REPORT_RELEASED

deliverReport()
  -> order status REPORT_DELIVERED
```

## 5. Types

### `src/features/radiology/types/index.ts`

This file defines all Radiology domain types.

Important types:

- `Patient`
- `RadiologyOrder`
- `RadiologyTest`
- `Modality`
- `Schedule`
- `Technician`
- `Radiologist`
- `PACSStudy`
- `RadiologyReport`
- `CriticalAlert`
- `RadiologyStatus`
- `Priority`

Important statuses:

```text
ORDER_CREATED
PAYMENT_PENDING
PAYMENT_DONE
SCHEDULED
PATIENT_ARRIVED
PREPARATION_PENDING
READY_FOR_SCAN
SCAN_IN_PROGRESS
SCAN_COMPLETED
IMAGE_SENT_TO_PACS
REPORT_PENDING
REPORT_DRAFTED
REPORT_VERIFIED
REPORT_RELEASED
REPORT_DELIVERED
CANCELLED
```

Priorities:

```text
ROUTINE
URGENT
EMERGENCY
STAT
```

## 6. Mock Data Files

### `src/features/radiology/data/patients.ts`

Patient data used in search, order creation, queue, report preview, and alerts.

### `src/features/radiology/data/radiologyOrders.ts`

Seed radiology orders with realistic statuses and timeline events.

### `src/features/radiology/data/modalities.ts`

CT, MRI, X-Ray, USG, Mammography, PET machine/room configuration.

### `src/features/radiology/data/tests.ts`

Radiology test catalogue.

Used in:

- Create order
- Billing amount
- Preparation checklist
- Scan management
- Report preview

### `src/features/radiology/data/schedules.ts`

Initial scheduling calendar data.

### `src/features/radiology/data/technicians.ts`

Technician roster and modality capability.

### `src/features/radiology/data/radiologists.ts`

Radiologist roster, specialization, modality coverage.

### `src/features/radiology/data/reports.ts`

Seed reports and report templates.

### `src/features/radiology/data/pacsStudies.ts`

Seed PACS study list.

### `src/features/radiology/data/criticalAlerts.ts`

Seed critical alert records.

## 7. Utility Files

### `src/features/radiology/utils/status.ts`

Responsibilities:

- Status labels
- Priority labels
- Badge tone classes
- Status progress percentage

Used by:

- `RadiologyStatusBadge`
- `PriorityBadge`
- `ScanStatusCard`
- `OrderTimeline`

### `src/features/radiology/utils/formatters.ts`

Responsibilities:

- Currency formatting
- Date/time formatting
- Patient age/gender formatting
- Name initials

## 8. Reusable Component Files

### `src/features/radiology/components/RadiologyStatusBadge.tsx`

Shows colored status pill for Radiology order status.

### `src/features/radiology/components/PriorityBadge.tsx`

Shows priority pill:

- Routine
- Urgent
- Emergency
- STAT

### `src/features/radiology/components/ModalityBadge.tsx`

Shows modality pill:

- CT
- MRI
- XRAY
- USG
- MAMMO
- PET

### `src/features/radiology/components/RadiologyStatsCard.tsx`

Reusable dashboard metric card.

### `src/features/radiology/components/PatientSummaryCard.tsx`

Shows patient profile, MRN, phone, consultant, department, location, and order summary.

### `src/features/radiology/components/OrderTimeline.tsx`

Shows order lifecycle timeline from order creation to report delivery.

### `src/features/radiology/components/RadiologyFilterBar.tsx`

Common filter component.

Fields:

- Search
- Modality
- Status
- Date range

Used across:

- Dashboard
- Billing
- Scheduling
- Queue
- Check-in
- Preparation
- Technician Worklist
- Scan Management
- PACS
- Reporting
- Verification
- Preview
- Delivery
- Critical Alerts
- Analytics

### `src/features/radiology/components/RadiologyOrderListView.tsx`

Functional order list page view.

Features:

- Search/filter orders
- View order detail
- Clear billing
- Schedule
- Check-in
- Reads live workspace state from `useRadiologyWorkspace`

### `src/features/radiology/components/RadiologyCreateOrderView.tsx`

Functional create order form.

Features:

- Patient search
- Patient selection
- Test selection
- Priority selection
- Billing status selection
- Clinical indication
- Provisional diagnosis
- Ordered by
- Creates order into local workspace
- Redirects to order detail page

### `src/features/radiology/components/RadiologyWorkflowViews.tsx`

Main functional workflow views.

This is the biggest workflow file.

Exports:

- `RadiologyDashboardView`
- `RadiologyBillingStatusView`
- `RadiologyPatientQueueView`
- `RadiologySchedulingWorkflowView`
- `RadiologyCheckInView`
- `RadiologyPreparationView`
- `RadiologyScanWorkflowView`
- `RadiologyTechnicianWorklistView`
- `RadiologyPacsStudiesView`
- `RadiologyReportingWorkflowView`
- `RadiologyVerificationWorkflowView`
- `RadiologyReportPreviewWorkflowView`
- `RadiologyDeliveryWorkflowView`
- `RadiologyAnalyticsWorkflowView`
- `RadiologyCriticalAlertsView`
- `RadiologyOrderDetailActions`
- `RadiologyOrderDetailView`

Also contains filter helpers:

- `filterOrders`
- `filterSchedules`
- `filterPacsStudies`
- `filterReports`
- `filterAlerts`

### `src/features/radiology/components/RadiologyConfigurationViews.tsx`

Configuration/masters UI.

Exports:

- `RadiologyReportTemplatesView`
- `RadiologyMastersView`

Features:

- Search templates
- Filter templates by modality
- Search masters
- Filter modalities/tests/technicians/radiologists by modality

### `src/features/radiology/components/PatientQueueTable.tsx`

Reusable patient queue table.

Used in dashboard, patient queue, and reporting queue.

### `src/features/radiology/components/PreparationChecklistCard.tsx`

Shows prep checklist for a selected order/test.

Used in preparation workflow.

### `src/features/radiology/components/ScanStatusCard.tsx`

Shows scan progress card with room, duration, modality, machine, and status progress bar.

### `src/features/radiology/components/SchedulingCalendar.tsx`

Shows modality-wise schedule calendar.

### `src/features/radiology/components/TechnicianWorklistTable.tsx`

Shows technician assigned scan slots.

### `src/features/radiology/components/PACSStudyTable.tsx`

Shows PACS studies, accession number, patient, images, PACS status, and viewer link.

### `src/features/radiology/components/ReportPreview.tsx`

Print-ready report preview component.

### `src/features/radiology/components/ReportEditor.tsx`

Earlier static editor component. Current active reporting workflow uses `RadiologyReportingWorkflowView`.

### `src/features/radiology/components/CriticalAlertCard.tsx`

Critical alert display card.

## 9. Route Files

All new Radiology MNT routes live under:

```text
src/app/radiology/
```

### `src/app/radiology/dashboard/page.tsx`

Uses:

```text
RadiologyDashboardView
```

Purpose:

- Dashboard metrics
- Filtered queue
- Filtered critical alerts
- Reset demo data

Route:

```text
/radiology/dashboard
```

### `src/app/radiology/order-list/page.tsx`

Uses:

```text
RadiologyOrderListView
```

Purpose:

- Main new order list
- Search/filter
- Action buttons

Route:

```text
/radiology/order-list
```

### `src/app/radiology/orders/create/page.tsx`

Uses:

```text
RadiologyCreateOrderView
```

Purpose:

- Create new order
- Saves order to local workspace

Route:

```text
/radiology/orders/create
```

### `src/app/radiology/orders/[id]/page.tsx`

Uses:

```text
RadiologyOrderDetailView
```

Purpose:

- Order detail
- Patient summary
- Study information
- Timeline
- Next-step workflow actions

Route example:

```text
/radiology/orders/ord-7001
```

### `src/app/radiology/billing-status/page.tsx`

Uses:

```text
RadiologyBillingStatusView
```

Purpose:

- Billing filter
- Clear bill
- Move order toward scheduling

Route:

```text
/radiology/billing-status
```

### `src/app/radiology/scheduling/page.tsx`

Uses:

```text
RadiologySchedulingWorkflowView
```

Purpose:

- Filter schedule
- Schedule ready orders
- Calendar view

Route:

```text
/radiology/scheduling
```

### `src/app/radiology/patient-queue/page.tsx`

Uses:

```text
RadiologyPatientQueueView
```

Purpose:

- Queue table
- Filter queue
- Schedule/check-in/prep actions

Route:

```text
/radiology/patient-queue
```

### `src/app/radiology/check-in/page.tsx`

Uses:

```text
RadiologyCheckInView
```

Purpose:

- Filter scheduled arrivals
- Mark patient checked in

Route:

```text
/radiology/check-in
```

### `src/app/radiology/preparation-checklist/page.tsx`

Uses:

```text
RadiologyPreparationView
```

Purpose:

- Filter prep cases
- Mark ready for scan

Route:

```text
/radiology/preparation-checklist
```

### `src/app/radiology/technician-worklist/page.tsx`

Uses:

```text
RadiologyTechnicianWorklistView
```

Purpose:

- Filter technician worklist
- See scheduled scans
- Includes scan workflow area

Route:

```text
/radiology/technician-worklist
```

### `src/app/radiology/scan-management/page.tsx`

Uses:

```text
RadiologyScanWorkflowView
```

Purpose:

- Filter scan cases
- Start scan
- Complete scan
- Send images to PACS

Route:

```text
/radiology/scan-management
```

### `src/app/radiology/pacs-studies/page.tsx`

Uses:

```text
RadiologyPacsStudiesView
```

Purpose:

- Filter PACS studies
- View accession/image status
- Shows studies created from `sendToPacs()`

Route:

```text
/radiology/pacs-studies
```

### `src/app/radiology/reporting/page.tsx`

Uses:

```text
RadiologyReportingWorkflowView
```

Purpose:

- Filter reporting queue
- Select order
- Add findings/impression
- Mark critical
- Send report for verification

Route:

```text
/radiology/reporting
```

### `src/app/radiology/report-templates/page.tsx`

Uses:

```text
RadiologyReportTemplatesView
```

Purpose:

- Search report templates
- Filter templates by modality

Route:

```text
/radiology/report-templates
```

### `src/app/radiology/report-verification/page.tsx`

Uses:

```text
RadiologyVerificationWorkflowView
```

Purpose:

- Filter reports
- Verify report
- Release report

Route:

```text
/radiology/report-verification
```

### `src/app/radiology/report-preview/page.tsx`

Uses:

```text
RadiologyReportPreviewWorkflowView
```

Purpose:

- Filter/select report
- Preview print-ready report
- Print button

Route:

```text
/radiology/report-preview
```

### `src/app/radiology/report-delivery/page.tsx`

Uses:

```text
RadiologyDeliveryWorkflowView
```

Purpose:

- Filter ready reports
- Mark report delivered

Route:

```text
/radiology/report-delivery
```

### `src/app/radiology/critical-alerts/page.tsx`

Uses:

```text
RadiologyCriticalAlertsView
```

Purpose:

- Filter alerts
- Acknowledge critical alerts

Route:

```text
/radiology/critical-alerts
```

### `src/app/radiology/masters/page.tsx`

Uses:

```text
RadiologyMastersView
```

Purpose:

- Filter modalities
- Filter tests
- Filter technicians
- Filter radiologists

Route:

```text
/radiology/masters
```

### `src/app/radiology/analytics/page.tsx`

Uses:

```text
RadiologyAnalyticsWorkflowView
```

Purpose:

- Filter analytics by search/modality/status/date
- Modality utilization
- PACS/report/alert counts

Route:

```text
/radiology/analytics
```

## 10. Filter Coverage

Filters are available on these pages:

```text
/radiology/dashboard
/radiology/order-list
/radiology/billing-status
/radiology/scheduling
/radiology/patient-queue
/radiology/check-in
/radiology/preparation-checklist
/radiology/technician-worklist
/radiology/scan-management
/radiology/pacs-studies
/radiology/reporting
/radiology/report-templates
/radiology/report-verification
/radiology/report-preview
/radiology/report-delivery
/radiology/critical-alerts
/radiology/masters
/radiology/analytics
```

Filter behavior:

- Search matches patient name, MRN, phone, order no, test, indication, report text, PACS accession, alert finding.
- Modality filters CT/MRI/X-Ray/USG/Mammography/PET.
- Status filters order status where applicable.
- Date range filters created/scheduled/study/report/alert dates where applicable.

## 11. How To Test Full Flow

Open:

```text
http://localhost:3003/radiology/dashboard
```

Suggested test:

1. Go to `Radiology MNT -> Create Order`.
2. Select patient.
3. Select test.
4. Set billing as `Pending`.
5. Create order.
6. On order detail click `Clear Bill`.
7. Click `Schedule`.
8. Go to `Patient Queue` or `Check-in`.
9. Click `Check-in`.
10. Go to `Preparation Checklist`.
11. Click `Mark Ready for Scan`.
12. Go to `Scan Management`.
13. Click `Start Scan`.
14. Click `Complete Scan`.
15. Click `Send PACS`.
16. Go to `PACS Study List` and see new study.
17. Go to `Reporting Workbench`.
18. Add findings/impression and send for verification.
19. Go to `Report Verification`.
20. Click `Verify Report`.
21. Click `Release Report`.
22. Go to `Report Preview`.
23. Preview/print.
24. Go to `Report Delivery`.
25. Click `Mark Delivered`.
26. If report was marked critical, go to `Critical Alerts` and acknowledge it.

## 12. Important Notes

- This is frontend-only.
- No backend API is connected yet.
- Data persists in browser `localStorage`.
- `Reset demo data` button on dashboard resets Radiology MNT local state.
- Old routes under `src/app/(app)/radiology/*` still exist, but the new sidebar uses Radiology MNT routes under `src/app/radiology/*`.

## 13. Verification Status

Current checks after implementation:

```text
npm run typecheck -> passed
npm run lint      -> passed
```

Main Radiology routes tested with HTTP `200`.
