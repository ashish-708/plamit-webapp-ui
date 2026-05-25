import type { ReactNode } from "react";

export type BundleItem = {
  id: string;
  label: string;
  group: string;
  description: string;
  filePath: string;
  code: string;
  preview: ReactNode;
};
