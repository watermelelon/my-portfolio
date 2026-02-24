import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import ExpandableCardDemo from "./expandable-card-demo-standard";
import CircularGallery from "./ui/CircularGallery";
import { cards, CardType } from "./cardsdata";
import { useOutsideClick } from "../hooks/use-outside-click";
import LightRays from "./ui/LightRays";

const ProjectsSection = () => {
  const [active, setActive] = useState<CardType | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  // close modal when clicking outside
  useOutsideClick(modalRef, () => setActive(null));

  return (
    <section
      id="projects"
      className="relative min-h-[150vh] pt-24 pb-32 bg-[#0B0B0F] text-white overflow-hidden"
    >

      {/* Background Light Rays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={1}
        followMouse={false}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
        />
      </div>

          {/* Section Header */}
    <div className="max-w-5xl mx-auto px-6 mb-8 text-center">
       <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black leading-[0.9] tracking-tight text-white">
            My Projects
          </h1>

      <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        These are some of the projects I've been working on, each showcasing different skills and technologies. Below you can find details about the process, tools used, and outcomes of each project.
      </p>
    </div>


      {/* 3D Circular Gallery */}
      <div className="relative w-full h-[600px] mb-28">
        <CircularGallery
          items={cards}
          bend={1}
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
          font={'700 26px "Inter", Arial, bold sans-serif'}
          onSelect={(card) => setActive(card)}
        />
      </div>

            {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      {/* Secondary Projects Layout */}
      <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          Project Breakdown
        </h3>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          A closer look at the strategy, execution, and impact behind each build.
        </p>
      </div>

      <ExpandableCardDemo />

    </section>
  );
};

export default ProjectsSection;