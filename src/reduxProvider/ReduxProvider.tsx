"use client"
import { api } from "@/redux/api";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { FC, ReactNode } from "react";
interface iLayout {
  children: ReactNode;
}
const ReduxProvider: FC<iLayout> = ({ children }) => {
  return (
    <ApiProvider api={api}>
      <main>{children}</main>
    </ApiProvider>
  );
};

export default ReduxProvider;
    