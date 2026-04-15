"use client";
import { Timeline } from "@/components/ui/timeline";

// ─── Replace these with your actual project data ──────────────────────────────
// This file shows the pattern — duplicate for each project page.
const PROJECT_TITLE    = "GSAP Interaction Study";
const PROJECT_SUBTITLE = "Exploring Motion Design with GSAP";
const PROJECT_YEAR     = "2026";

const data = [
  {
    title: "Overview",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          This project was possible thanks to a youtube channel called <strong className="text-[#3772ff]">Design Course</strong>. Starting from core concepts, this project evolves into a scroll-driven interface where animations, video,
           and transitions work together to create a more dynamic and engaging experience. 
        </p>
        
        <div className="tl-grid">
          <img src="/images/coldchain/discovery3.png" alt="Current Website" className="tl-img" />
          <img src="/images/coldchain/discovery2.png" alt="Current Catalog" className="tl-img" />
          <img src="/images/coldchain/discovery4.png" alt="Current Catalog" className="tl-img" />
          <img src="/images/coldchain/discovery1.png" alt="Google Speed Test" className="tl-img" />
        </div>
      </div>
    ),
  },
  {
    title: "What I Explored",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          As part of learning GSAP, I focused on building a strong foundation in animation and interaction by working with its core features.
        </p>
        <div className="tl-checklist">
          <span className="tl-check">Core animation methods: .to(), .from(), and .fromTo()</span>
          <span className="tl-check">Scroll-based animations using ScrollTrigger</span>
          <span className="tl-check">Sequencing and timing with GSAP timelines</span>
          <span className="tl-check">Running multiple animations simultaneously</span>
          <span className="tl-check">Text animations by splitting words into individual letters</span>
        </div>
        
        <div className="tl-grid">
          <img src="/images/coldchain/strategy2.jpeg" alt="Sketch made on paper" className="tl-img" />
          <img src="/images/coldchain/strategy1.png" alt="High Fidelity Prototype" className="tl-img" />
        </div>
      </div>
    ),
  },
  {
    title: "Key Interactions",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          These concepts were applied through a series of interactive elements designed to respond to scroll and create a sense of flow throughout the page.
        </p>
        <div className="tl-checklist">
          <span className="tl-check">A scroll-controlled video background, creating a smooth and immersive visual layer</span>
          <span className="tl-check">Text animations where letters appear and move in sequence</span>
          <span className="tl-check">Coordinated animations across multiple elements using timelines</span>
          <span className="tl-check">A transition where shapes and images transform between sections, connecting different parts of the layout</span>
        </div>
        <div className="tl-grid">
           <img src="/images/coldchain/execution1.png" alt="Homepage Design" className="tl-img" />
          <img src="/images/coldchain/execution2.png" alt="Homepage Design 2" className="tl-img" />
            <img src="/images/coldchain/execution3.png" alt="Homepage Design 3" className="tl-img" />
          <img src="/images/coldchain/execution4.png" alt="Catalog Design" className="tl-img" />
        </div>
      </div>
    ),
  },
  {
    title: "Takeaways",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          This project reinforced how motion can play a key role in shaping user experience.
Beyond visual appeal, animations can guide attention, create rhythm, and make interfaces feel more responsive. When used intentionally,
 motion also supports storytelling and contributes to a more engaging and memorable experience.
        </p>
        
        
      </div>
    ),
  },
];

export default function Coldchain() {
  return (
    <div className="tl-page">

      {/* HEADER */}
      <div className="tl-page-header">
        <a href="/" className="tl-back">← Work</a>
        <p className="tl-page-eyebrow">{PROJECT_YEAR} · Case Study</p>
        <h1 className="tl-page-title">
          <em className="tl-serif">{PROJECT_TITLE}</em>
        </h1>
        <p className="tl-page-subtitle">{PROJECT_SUBTITLE}</p>
      </div>

      {/* DESCRIPTION SECTION (SEPARATED VISUALLY) */}
      <section className="w-full px-2 md:px-12 lg:px-20 pt-16 pb-10 bg-gray-300">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-xl md:text-4xl font-medium text-black dark:text-white mb-6">
            Project Overview
          </h2>

          <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed max-w-none">
            The goal of this project was to learn the basics of GSAP, a powerful JavaScript library for creating high-performance animations. I wanted 
            to explore how GSAP can be used to create engaging and interactive web experiences, and to understand the core concepts of animation, such as scroll triggers, timelines, and easing functions.
          </p>

        </div>
      </section>

      {/* TIMELINE */}
      <Timeline data={data} />

    </div>
  );
}