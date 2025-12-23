import React from 'react'
import {  SendHorizontal } from 'lucide-react';


const Input = () => {
  return (
    <div className= 'w-full p-3 border-t border-gray-700'>
        <form action="">
            <div className='relative w-full '>
                <input type="text" className='p-3 pr-12 rounded-md w-full bg-[#252836] outline-none'
                placeholder="Type a message..."
                />
                <SendHorizontal className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'/>
            </div>
        </form>
    </div>
  )
}

export default Input