"use client";
import LayoutSections from "@/components/layout/LayoutSections";
import { FC, ReactNode } from "react";
interface iLayout {
  children: ReactNode;
}
const layout: FC<iLayout> = ({ children }) => {
  return (
    <LayoutSections>
      <main>{children}</main>
    </LayoutSections>
  );
};

export default layout;
