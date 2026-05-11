"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const Loader3DScene = dynamic(() => import("./Loader3DScene"), { ssr: false });

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* 3D Scene — full screen */}
          <div className="absolute inset-0">
            <Loader3DScene />
          </div>

          {/* Bottom gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

          {/* Text — positioned in lower half */}
          <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3 px-4 text-center mt-[45vh]">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.4em]"
            >
              Welcome to
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.7, ease: "backOut" }}
              className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight"
            >
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ff8533] to-[#a855f7]">
                Portfolio
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="text-white/40 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.35em] uppercase"
            >
              Soufiane Boutatss
            </motion.p>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-8 sm:bottom-12 w-full flex flex-col items-center gap-2 px-4">
            <motion.div
              className="w-36 sm:w-52 h-[2px] bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#ff6b00] to-[#a855f7]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.2, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/20 text-[10px] sm:text-xs tracking-widest uppercase"
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
