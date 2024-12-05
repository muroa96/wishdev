"use client";

import { useState } from "react";

import {
  House,
  BookOpenText,
  ChartPie,
  UserRound,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { AppSidebarFooter } from "./app-sidebar-footer";

const items = [
  {
    title: "Home",
    url: "#",
    icon: House,
    index: 0,
  },
  {
    title: "Learn",
    url: "#",
    icon: BookOpenText,
    index: 1,
  },
  {
    title: "Stats",
    url: "#",
    icon: ChartPie,
    index: 2,
  },
  {
    title: "User",
    url: "#",
    icon: UserRound,
    index: 3,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    index: 4,
  },
];

export function AppSidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>WishDev</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeIndex === item.index}
                    onClick={() => setActiveIndex(item.index)}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <AppSidebarFooter />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
