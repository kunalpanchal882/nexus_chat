import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { MessageSquare, Mail } from "lucide-react";

const Authbackground = () => {
  const boxes = [
    {
      size: "w-20 h-20",
      top: "top-130",
      left: "left-20",
      initial: { x: 0, y: 0 },
      animate: { x: [0, 150, 50, 0], y: [0, -50, 50, 0] },
      duration: 12,
    },
    {
      size: "w-24 h-24",
      top: "top-40",
      right: "right-20",
      initial: { x: 0, y: 0 },
      animate: { x: [0, -200, -100, 0], y: [0, 60, -60, 0] },
      duration: 18,
    },
    {
      size: "w-16 h-16",
      top: "top-60",
      left: "left-1/4",
      initial: { x: 0, y: 0 },
      animate: { x: [0, 80, -40, 0], y: [0, -30, 30, 0] },
      duration: 14,
    },
    {
      size: "w-28 h-28",
      top: "top-1/3",
      right: "right-1/4",
      initial: { x: 0, y: 0 },
      animate: { x: [0, -150, 70, 0], y: [0, 80, -50, 0] },
      duration: 16,
    },
    {
      size: "w-20 h-20",
      top: "top-3/4",
      right: "right-30",
      initial: { x: 0, y: 0 },
      animate: { x: [0, 100, -60, 0], y: [0, -40, 40, 0] },
      duration: 15,
    },
    {
      size: "w-23 h-23",
      top: "top-130",
      right: "right-80",
      initial: { x: 0, y: 0 },
      animate: { x: [0, 100, -60, 0], y: [0, -40, 40, 0] },
      duration: 15,
    },
    {
      size: "w-15 h-15",
      top: "top-80",
      right: "right-50",
      initial: { x: 0, y: 0 },
      animate: { x: [0, 100, -60, 0], y: [0, -40, 40, 0] },
      duration: 15,
    },
  ];

  return (
    <div className="w-full bg-[#1A1D2E] relative ">
      
      {boxes.map((box, i) => (
        <motion.div
          key={i}
          className={`${box.top} ${box.left} ${box.right} ${box.size} z-0 absolute rounded-2xl bg-[#1f233e]/70`}
          initial={box.initial}
          animate={box.animate}
          transition={{
            duration: box.duration,
            repeat: box.repeat,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="w-20 h-20 bg-[#1f233e] rounded-2xl"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 50, -40, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Authbackground;
