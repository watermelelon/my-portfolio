"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cards, CardType } from "./cardsdata";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<CardType | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };

    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Expanded Modal */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-xl bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-72 object-cover"
                />
              </motion.div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-xl font-semibold text-neutral-800 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>

                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="text-neutral-500 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-green-500 text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 overflow-auto max-h-[200px]"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Project Index List */}
      <ul className="max-w-4xl mx-auto w-full flex flex-col gap-4 py-10">
        {cards.map((card) => (
          <motion.li
            key={`card-${card.title}-${id}`}
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group flex flex-col md:flex-row justify-between items-center 
            p-4 rounded-2xl cursor-pointer transition-all
            bg-[#111] hover:bg-[#18181b] border border-neutral-800
            hover:border-neutral-600"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-28 w-28 md:h-14 md:w-14 rounded-lg object-cover"
                />
              </motion.div>

              <div className="text-center md:text-left">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-white font-medium"
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  layoutId={`description-${card.title}-${id}`}
                  className="text-gray-400 text-sm"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>

            <motion.div
              layoutId={`button-${card.title}-${id}`}
              className="mt-4 md:mt-0 px-4 py-2 text-sm rounded-full 
              font-semibold bg-white text-black
              group-hover:bg-green-500 group-hover:text-white transition"
            >
              {card.ctaText}
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}