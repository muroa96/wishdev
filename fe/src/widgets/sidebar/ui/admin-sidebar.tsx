"use client";

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
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "@/src/widgets/sidebar/ui/nav-main";
import { NavUser } from "@/src/widgets/sidebar/ui/nav-user";

const data = {
  navMain: [
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
  ],
  user: {
    name: "손한종",
    email: "dummy@test.com",
  },
};

export function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>{/* <TeamSwitcher teams={data.teams} /> */}</SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
