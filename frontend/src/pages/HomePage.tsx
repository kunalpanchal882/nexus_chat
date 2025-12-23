import React, { useState } from "react";
import { PanelRight } from 'lucide-react';
import {motion} from 'framer-motion'
import { Headset } from 'lucide-react';
import Input from "@/components/Input";
import Message from '@/components/Message'

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarGroupContent,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
//   SidebarProvider,
//   SidebarTrigger
// } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const HomePage = () => {
const [sidebar, setsidebar] = useState(false)

 const messages = [
  { id: 1, text: "Hi", isMe: false },
  { id: 2, text: "Hello", isMe: true },
  { id: 3, text: "How are you?", isMe: false },
  { id: 4, text: "I am fine", isMe: true },
];

function handelSidebar() {
  setsidebar((prev) => !prev)
}
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <AppSidebar sidebar={sidebar}/>
      <motion.div onClick={handelSidebar}
      initial={{x:0}}
      animate={{x:sidebar?200:0}}
      transition={{
        type:"tween",
        duration:0.3
      }}
      className="md:hidden absolute p-2"
      >
        <PanelRight size={30}/>
      </motion.div>
      
      {sidebar? "" :<div className="w-full flex flex-col md:ml-64 p-2 h-screen">
        <header className="bg-[#1A1D2E] shrink-0">
          <span className="flex  gap-2 items-center justify-center">
            <Headset size={30}/>
          <h1>kunal</h1>
          </span>
          <hr className="w-full mt-4 bg-gray-800 opacity-10 "/>
        </header>
        <Message message={messages}/>
        <Input/>
      </div>}
    </div>
  );
};

export default HomePage;
