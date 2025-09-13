import { useState } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  FileImage, 
  BarChart3, 
  Settings,
  Scale
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "New Case", url: "/new-case", icon: FileText },
  { title: "People Involved", url: "/people", icon: Users },
  { title: "Documents", url: "/documents", icon: FileImage },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Sidebar className="border-r bg-primary">
      <SidebarHeader className="p-6 border-b border-primary-foreground/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
            <Scale className="w-5 h-5 text-primary" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-lg font-bold text-primary-foreground">LegalFlow</h2>
              <p className="text-xs text-primary-foreground/70">Case Management</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-primary">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2.5 rounded-lg text-primary-foreground/80 ${
                          isActive 
                            ? "bg-primary-foreground/10 text-primary-foreground font-medium" 
                            : "hover:bg-primary-foreground/5 hover:text-primary-foreground transition-colors"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}