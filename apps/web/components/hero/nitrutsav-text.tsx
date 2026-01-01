"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const imgNitrutsavFilled = "/f1.svg";
const imgNitrutsavOutline = "/o1.svg";

export default function NitrutsavText() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-[1146px] aspect-[1146/303] rotate-[-1.5deg]">
        {/* 2. Filled Image (Animated Reveal from Bottom) */}
        <motion.div
          className="absolute inset-0 z-20"
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        >
          <Image
            src={imgNitrutsavFilled}
            alt="Nitrutsav Filled"
            fill
            className="object-contain"
            priority
            unoptimized
          />
        </motion.div>

        {/* 3. Foreground Outline (Ensures crisp edges on top of animation) */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={imgNitrutsavOutline}
            alt="Nitrutsav Outline"
            fill
            className="object-contain"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
