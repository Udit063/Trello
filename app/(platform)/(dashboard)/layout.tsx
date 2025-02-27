import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen h-full">
      <DashboardNavbar />
      {children}
    </div>
  );
}
