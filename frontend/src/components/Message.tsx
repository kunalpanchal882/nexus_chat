import React from 'react'

type MessageProps = {
  message: MessageType[];
};

const Message = ({ message }: MessageProps) => {
  return (
    <div className='flex-1 mt-2 flex-col gap-2 overflow-y-auto h-screen'>
        {message.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                <div className='p-2 bg-[#2e5090] rounded-xl'>
                    {msg.text}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Message