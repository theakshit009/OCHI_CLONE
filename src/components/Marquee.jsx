import React from 'react';
import "../index.css"
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div className="rounded-tr--3xl rounded-tl-3xl w-full py-10 bg-[#004D43] ">
      <div className="border-t-[1px] border-b-[1px] border-zinc-400 gap-10 -mb-25 overflow-hidden flex whitespace-nowrap ">
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 9}} className='text-[25vw] uppercase font-["Myb"] leading-none -mt-[8vh] -mb-[4vh]'>
          We are Ochi
        </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 9}} className="text-[25vw] uppercase font-['Myb'] leading-none -mt-[8vh] -mb-[4vh] ">we are ochi</motion.h1>
      </div>
    </div>
  );
}

export default Marquee