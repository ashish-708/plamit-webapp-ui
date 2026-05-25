import type { BundleItem } from "../types";
import { AccordionPreview, accordionCode } from "../ui/accordion";
import { AlertBannerPreview, alertBannerCode } from "../ui/alert-banner";
import { AvatarPreview, avatarCode } from "../ui/avatar";
import { BadgePreview, badgeCode } from "../ui/badge";
import { BoxPreview, boxCode } from "../ui/box";
import { BreadcrumbPreview, breadcrumbCode } from "../ui/breadcrumb";
import { ButtonPreview, buttonCode } from "../ui/button";
import { CardPreview, cardCode } from "../ui/card";
import { CheckboxPreview, checkboxCode } from "../ui/checkbox";
import { DatePickerPreview, datePickerCode } from "../ui/date-picker";
import { DrawerPreview, drawerCode } from "../ui/drawer";
import { DropdownPreview, dropdownCode } from "../ui/dropdown";
import { EmptyStatePreview, emptyStateCode } from "../ui/empty-state";
import { FileUploadPreview, fileUploadCode } from "../ui/file-upload";
import { FilterBarPreview, filterBarCode } from "../ui/filter-bar";
import { ModalPanelPreview, modalPanelCode } from "../ui/modal-panel";
import { NavbarPreview, navbarCode } from "../ui/navbar";
import { PaginationPreview, paginationCode } from "../ui/pagination";
import { ProgressBarPreview, progressBarCode } from "../ui/progress-bar";
import { RadioGroupPreview, radioGroupCode } from "../ui/radio-group";
import { SearchBoxPreview, searchBoxCode } from "../ui/search-box";
import { SelectPreview, selectCode } from "../ui/select";
import { SidebarPreview, sidebarCode } from "../ui/sidebar";
import { SkeletonLoaderPreview, skeletonLoaderCode } from "../ui/skeleton-loader";
import { StatCardPreview, statCardCode } from "../ui/stat-card";
import { StepperPreview, stepperCode } from "../ui/stepper";
import { TablePreview, tableCode } from "../ui/table";
import { TabsPreview, tabsCode } from "../ui/tabs";
import { TextareaPreview, textareaCode } from "../ui/textarea";
import { TextboxPreview, textboxCode } from "../ui/textbox";
import { TimelinePreview, timelineCode } from "../ui/timeline";
import { ToastPreview, toastCode } from "../ui/toast";
import { ToggleSwitchPreview, toggleSwitchCode } from "../ui/toggle-switch";
import { TooltipPreview, tooltipCode } from "../ui/tooltip";

export const uiBundleItems: BundleItem[] = [
  {
    id: "button",
    label: "Button",
    group: "Actions",
    description: "Primary, secondary, outline, danger, and icon button patterns.",
    filePath: "src/app/bundle/ui/button.tsx",
    preview: <ButtonPreview />,
    code: buttonCode,
  },
  {
    id: "textbox",
    label: "Textbox",
    group: "Forms",
    description: "Single-line text input with label, helper text, placeholder, and focus state.",
    filePath: "src/app/bundle/ui/textbox.tsx",
    preview: <TextboxPreview />,
    code: textboxCode,
  },
  {
    id: "textarea",
    label: "Textarea",
    group: "Forms",
    description: "Multi-line notes field for comments, findings, and descriptions.",
    filePath: "src/app/bundle/ui/textarea.tsx",
    preview: <TextareaPreview />,
    code: textareaCode,
  },
  {
    id: "search-box",
    label: "Search Box",
    group: "Forms",
    description: "Search input with compact action button.",
    filePath: "src/app/bundle/ui/search-box.tsx",
    preview: <SearchBoxPreview />,
    code: searchBoxCode,
  },
  {
    id: "select",
    label: "Select",
    group: "Forms",
    description: "Native select field for status, department, role, and category options.",
    filePath: "src/app/bundle/ui/select.tsx",
    preview: <SelectPreview />,
    code: selectCode,
  },
  {
    id: "checkbox",
    label: "Checkbox",
    group: "Forms",
    description: "Checklist style control for multiple true/false selections.",
    filePath: "src/app/bundle/ui/checkbox.tsx",
    preview: <CheckboxPreview />,
    code: checkboxCode,
  },
  {
    id: "radio-group",
    label: "Radio Group",
    group: "Forms",
    description: "Single-select grouped options for priority, type, and mode choices.",
    filePath: "src/app/bundle/ui/radio-group.tsx",
    preview: <RadioGroupPreview />,
    code: radioGroupCode,
  },
  {
    id: "toggle-switch",
    label: "Toggle Switch",
    group: "Forms",
    description: "Switch-style enabled or disabled setting.",
    filePath: "src/app/bundle/ui/toggle-switch.tsx",
    preview: <ToggleSwitchPreview />,
    code: toggleSwitchCode,
  },
  {
    id: "date-picker",
    label: "Date Picker",
    group: "Forms",
    description: "Native date input with hospital-friendly label and helper text.",
    filePath: "src/app/bundle/ui/date-picker.tsx",
    preview: <DatePickerPreview />,
    code: datePickerCode,
  },
  {
    id: "file-upload",
    label: "File Upload",
    group: "Forms",
    description: "Dropzone style file upload field.",
    filePath: "src/app/bundle/ui/file-upload.tsx",
    preview: <FileUploadPreview />,
    code: fileUploadCode,
  },
  {
    id: "navbar",
    label: "Navbar",
    group: "Navigation",
    description: "Top navigation bar with brand, links, and action area.",
    filePath: "src/app/bundle/ui/navbar.tsx",
    preview: <NavbarPreview />,
    code: navbarCode,
  },
  {
    id: "sidebar",
    label: "Sidebar",
    group: "Navigation",
    description: "Vertical sidebar menu with active state and compact sections.",
    filePath: "src/app/bundle/ui/sidebar.tsx",
    preview: <SidebarPreview />,
    code: sidebarCode,
  },
  {
    id: "tabs",
    label: "Tabs",
    group: "Navigation",
    description: "Segmented tabs for switching sections in the same view.",
    filePath: "src/app/bundle/ui/tabs.tsx",
    preview: <TabsPreview />,
    code: tabsCode,
  },
  {
    id: "breadcrumb",
    label: "Breadcrumb",
    group: "Navigation",
    description: "Hierarchy trail for detail screens and nested modules.",
    filePath: "src/app/bundle/ui/breadcrumb.tsx",
    preview: <BreadcrumbPreview />,
    code: breadcrumbCode,
  },
  {
    id: "pagination",
    label: "Pagination",
    group: "Navigation",
    description: "Previous, next, and page number controls.",
    filePath: "src/app/bundle/ui/pagination.tsx",
    preview: <PaginationPreview />,
    code: paginationCode,
  },
  {
    id: "dropdown",
    label: "Dropdown",
    group: "Navigation",
    description: "Menu popover pattern for grouped actions.",
    filePath: "src/app/bundle/ui/dropdown.tsx",
    preview: <DropdownPreview />,
    code: dropdownCode,
  },
  {
    id: "box",
    label: "Box",
    group: "Display",
    description: "Basic content container with border, padding, and title area.",
    filePath: "src/app/bundle/ui/box.tsx",
    preview: <BoxPreview />,
    code: boxCode,
  },
  {
    id: "card",
    label: "Card",
    group: "Display",
    description: "Reusable information card with title, description, metric, and action.",
    filePath: "src/app/bundle/ui/card.tsx",
    preview: <CardPreview />,
    code: cardCode,
  },
  {
    id: "stat-card",
    label: "Stat Card",
    group: "Display",
    description: "Dashboard metric card with trend and secondary text.",
    filePath: "src/app/bundle/ui/stat-card.tsx",
    preview: <StatCardPreview />,
    code: statCardCode,
  },
  {
    id: "badge",
    label: "Badge",
    group: "Display",
    description: "Small status and priority chips for tables and cards.",
    filePath: "src/app/bundle/ui/badge.tsx",
    preview: <BadgePreview />,
    code: badgeCode,
  },
  {
    id: "avatar",
    label: "Avatar",
    group: "Display",
    description: "User identity avatar with initials and status dot.",
    filePath: "src/app/bundle/ui/avatar.tsx",
    preview: <AvatarPreview />,
    code: avatarCode,
  },
  {
    id: "timeline",
    label: "Timeline",
    group: "Display",
    description: "Vertical timeline for audit trail and workflow history.",
    filePath: "src/app/bundle/ui/timeline.tsx",
    preview: <TimelinePreview />,
    code: timelineCode,
  },
  {
    id: "stepper",
    label: "Stepper",
    group: "Display",
    description: "Horizontal step indicator for multi-stage workflow.",
    filePath: "src/app/bundle/ui/stepper.tsx",
    preview: <StepperPreview />,
    code: stepperCode,
  },
  {
    id: "accordion",
    label: "Accordion",
    group: "Display",
    description: "Expandable content section pattern.",
    filePath: "src/app/bundle/ui/accordion.tsx",
    preview: <AccordionPreview />,
    code: accordionCode,
  },
  {
    id: "progress-bar",
    label: "Progress Bar",
    group: "Display",
    description: "Linear progress indicator for completion and utilization.",
    filePath: "src/app/bundle/ui/progress-bar.tsx",
    preview: <ProgressBarPreview />,
    code: progressBarCode,
  },
  {
    id: "skeleton-loader",
    label: "Skeleton Loader",
    group: "Display",
    description: "Loading placeholder blocks for cards and lists.",
    filePath: "src/app/bundle/ui/skeleton-loader.tsx",
    preview: <SkeletonLoaderPreview />,
    code: skeletonLoaderCode,
  },
  {
    id: "empty-state",
    label: "Empty State",
    group: "Display",
    description: "No data state with title, message, and action.",
    filePath: "src/app/bundle/ui/empty-state.tsx",
    preview: <EmptyStatePreview />,
    code: emptyStateCode,
  },
  {
    id: "table",
    label: "Table",
    group: "Data",
    description: "Responsive data table for lists, queues, and reports.",
    filePath: "src/app/bundle/ui/table.tsx",
    preview: <TablePreview />,
    code: tableCode,
  },
  {
    id: "filter-bar",
    label: "Filter Bar",
    group: "Data",
    description: "Search, select, date, and action filters in one row.",
    filePath: "src/app/bundle/ui/filter-bar.tsx",
    preview: <FilterBarPreview />,
    code: filterBarCode,
  },
  {
    id: "alert-banner",
    label: "Alert Banner",
    group: "Feedback",
    description: "Inline success, warning, and critical messages.",
    filePath: "src/app/bundle/ui/alert-banner.tsx",
    preview: <AlertBannerPreview />,
    code: alertBannerCode,
  },
  {
    id: "toast",
    label: "Toast",
    group: "Feedback",
    description: "Compact floating confirmation message.",
    filePath: "src/app/bundle/ui/toast.tsx",
    preview: <ToastPreview />,
    code: toastCode,
  },
  {
    id: "tooltip",
    label: "Tooltip",
    group: "Feedback",
    description: "Small helper text displayed near a control.",
    filePath: "src/app/bundle/ui/tooltip.tsx",
    preview: <TooltipPreview />,
    code: tooltipCode,
  },
  {
    id: "modal-panel",
    label: "Modal Panel",
    group: "Overlay",
    description: "Dialog-style confirmation or detail panel.",
    filePath: "src/app/bundle/ui/modal-panel.tsx",
    preview: <ModalPanelPreview />,
    code: modalPanelCode,
  },
  {
    id: "drawer",
    label: "Drawer",
    group: "Overlay",
    description: "Side panel layout for contextual forms and details.",
    filePath: "src/app/bundle/ui/drawer.tsx",
    preview: <DrawerPreview />,
    code: drawerCode,
  },
];
