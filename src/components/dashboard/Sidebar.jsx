"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { sidebarMenu, sidebarMenuDown } from "@/constants/menu.constant";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-56 transition-transform transform border-r border-gray-200 bg-gray-50 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
          <Avatar className="relative w-6 h-6">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <p className="text-sm text-nowrap text-ellipsis">Satyam Kumar</p>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        {/* ------ toggle button---------- */}
      </div>
      <nav className="flex flex-col justify-between h-full px-4 pt-2 pb-20">
        <ul>
          {sidebarMenu.map((section) => (
            <Link href={"#"}>
              <li
                key={section.id}
                className={`p-2 my-2 text-sm font-medium rounded-md cursor-pointer flex items-center ${
                  activeSection === section.name
                    ? "bg-gray-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveSection(section.name)}
              >
                <div>{section.icon}</div>
                <span className="ml-2">{section.name}</span>
              </li>
            </Link>
          ))}
        </ul>

        <div>
          <ul>
            {sidebarMenuDown.map((section) => (
              <Link href={"#"}>
                <li
                  key={section.id}
                  className={`p-2 my-2 text-sm font-medium rounded-md cursor-pointer flex items-center ${
                    activeSection === section.name
                      ? "bg-gray-100"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveSection(section.name)}
                >
                  <div>{section.icon}</div>
                  <span className="ml-2">{section.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
