import React from "react";
import { TextAlignStart } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const HomePage = () => {
  return (
    <div className="bg-[#1A1D2E] p-2">
      {/* <span className="">
        <TextAlignStart />
      </span> */}
      {/* <div className="bg-[#1A1D2E] text-white">
        <SidebarProvider className="w-full">
          <div className="flex   text-white">
            <Sidebar className="bg-[#1A1D2E] text-white">
              <SidebarContent className="bg-[#1A1D2E] text-white">
                <SidebarGroup>
                  <SidebarGroupLabel>Application</SidebarGroupLabel>

                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>Dashboard</SidebarMenuButton>
                      </SidebarMenuItem>

                      <SidebarMenuItem>
                        <SidebarMenuButton className="">
                          Chats
                        </SidebarMenuButton>
                        <h2>kunal</h2>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>

            <div className="flex-1 p-6 lg:hidden">
              <h1 className="text-xl">Home Page Content</h1>
            </div>
          </div>
        </SidebarProvider>
      </div> */}
      <AppSidebar/>
    </div>
  );
};

export default HomePage;
