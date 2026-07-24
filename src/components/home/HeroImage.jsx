"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="relative mx-auto"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>

      <Image
        src="/images/profile.jpeg"
        alt="Mehedi Hasan Niloy"
        width={420}
        height={420}
        priority
        className="relative rounded-full border-4 border-blue-500 object-cover shadow-2xl"
      />
    </motion.div>
  );
}
