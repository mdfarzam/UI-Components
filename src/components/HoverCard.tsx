"use client";
import { AnimatePresence, motion } from "motion/react";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import {
  MessageCircleCodeIcon,
  MousePointerClick,
  PlusIcon,
} from "lucide-react";
import { useState } from "react";

const Card = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* boolean states ke uper ye lagana padta ha fir exit animations */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={cn(
              "w-72 h-[28rem] rounded-xl",
              "shadow-[0_1px_1px_rgba(255,255,255,0.12),_0_4px_6px_rgba(255,255,255,0.08),_0_24px_68px_rgba(255,255,255,0.06),_0_2px_3px_rgba(255,255,255,0.1)]",
              "p-4 flex flex-col"
            )}
          >
            <h2 className="font-bold text-[10px]">Vengence UI Components</h2>
            <p className="text-neutral-400 mt-2 text-[8px]">
              A carefully crafted React component library for building modern,
              responsive web applications. Every component is designed with
              attention to detail.
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 mt-4 text-[10px] shadow-[0_1px_1px_rgba(255,255,255,0.12),_0_4 px_6px_rgba(255,255,255,0.08),_0_24px_68px_rgba(255,255,255,0.06),_0_2px_3px_rgba(255,255,255,0.1)] rounded-md px-2 py-1"
              >
                Vengence UI
                <MousePointerClick className="w-4 h-4 text-netural-400" />
              </button>
            </div>
            <div className="bg-neutral-700 flex-1 mt-4 rounded-lg border border-dashed border-neutral-400 relative">
              {/* motion div start here */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 border border-neutral-700 h-full w-full bg-neutral-100 rounded-lg divide-y divide-neutral-200"
              >
                <div className="flex gap-2 p-4">
                  <div
                    className="
          h-7 w-7 flex-shrink-0
          bg-gradient-to-br
          shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]
          bg-neutral-50 rounded-md
          flex items-center justify-center
        "
                  >
                    <MessageCircleCodeIcon className="h-4 w-4 text-neutral-600" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div
                    className="
          h-7 w-7 flex-shrink-0
          bg-gradient-to-br
          shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]
          bg-neutral-50 rounded-md
          flex items-center justify-center
        "
                  >
                    <MessageCircleCodeIcon className="h-4 w-4 text-neutral-600" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div
                    className="
          h-7 w-7 flex-shrink-0
          bg-gradient-to-br
          shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]
          bg-neutral-50 rounded-md
          flex items-center justify-center
        "
                  >
                    <MessageCircleCodeIcon className="h-4 w-4 text-neutral-600" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div
                    className="
          h-7 w-7 flex-shrink-0
          bg-gradient-to-br
          shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]
          bg-neutral-50 rounded-md
          flex items-center justify-center
        "
                  >
                    <MessageCircleCodeIcon className="h-4 w-4 text-neutral-600" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center p-4">
                  <div className="flex items-center gap-2 text-center">
                    <div
                      className="
        h-7 w-7 flex-shrink-0
        bg-gradient-to-br
        shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]
        bg-neutral-50 rounded-md
        flex items-center justify-center
      "
                    >
                      <PlusIcon className="h-4 w-4 text-neutral-600" />
                    </div>

                    <p className="text-[8px] font-bold text-neutral-600">
                      Create a project
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* motion div end here */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HoverCard = () => {
  return (
    <div
      className={cn(
        GeistSans.className,
        "h-screen flex items-center justify-center bg-neutral-900"
      )}
    >
      <Card />
    </div>
  );
};

export default HoverCard;
