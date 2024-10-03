import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 p-6 ml-56 overflow-auto transition-all duration-300 ">
        {children}
      </div>
    </div>
  );
}
