import {motion} from  'framer-motion'
import { useEffect, useState } from 'react';
import { BadgePlus ,MailCheck  } from 'lucide-react';
interface AppSidebarProps {
  sidebar: boolean;// simpler typing
}

export function AppSidebar({ sidebar}: AppSidebarProps) {

  const [isMobile, setisMobile] = useState(false)

  useEffect(() => {
  const checkScrren = () => {
    setisMobile(window.innerWidth<768)
  }
  checkScrren()
  window.addEventListener("resize",checkScrren)
  
   return () => window.removeEventListener("resize", checkScrren);
  }, [])
  

  return (
    <motion.div
    initial={false}
    animate={{x:isMobile?(sidebar?0:"-100%"):0}}
    transition={{
      type:"tween",
      duration:0.3
    }}
    className='
    w-64 h-screen bg-[#1A1D2E] p-4
    fixed  top-0 left-0
        shadow-2xl'
    >
      <div className='mt-10 flex flex-col h-full b rounded-xl'>
        <header className='flex gap-3 items-center'>
          <span className='p-1 bg-blue-400 rounded-md '><MailCheck size={25}/></span>
          <h1 className='font-medium text-2xl md:text-2xl'>Tech Workspace</h1>
        </header>
        <span className='w-full flex justify-between p-3 '>
          <h2>Channel</h2>
          <BadgePlus className='cursor-pointer'/>
        </span>
        <hr />
        <div className='p-3 flex flex-col gap-3 '>
          <h3 className='hover:bg-blue-400 p-2 rounded-xl'>hello</h3>
          <h3 className='hover:bg-blue-400 p-2 rounded-xl'>hello</h3>
          <h3 className='hover:bg-blue-400 p-2 rounded-xl'>hello</h3>
        </div>
      </div>
    </motion.div>
  );
}
