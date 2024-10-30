"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, DollarSign, Briefcase, Settings } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "Users", icon: Users, path: "/users" },
  { name: "Revenue", icon: DollarSign, path: "/revenue" },
  { name: "Projects", icon: Briefcase, path: "/projects" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="bg-gray-800 text-white w-64 p-4 h-full">
      <div className="text-2xl font-bold mb-8">Wishdev</div>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`flex items-center space-x-2 hover:bg-gray-700 w-full p-2 rounded ${
              pathname === item.path ? "bg-gray-700" : ""
            }`}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
