"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PRINCIPLES = [
  {
    title: "Design is all about communicating",
    desc: "A design is only as good as how well it communicates its purpose and function to users.",
    shape: "square",
  },
  {
    title: "Experience shapes perception",
    desc: "The way users interact with a design influences their understanding and appreciation of it.",
    shape: "circle",
  },
  {
    title: "Learn, Build, Polish, and Repeat",
    desc: "I believe part of learning is doing, making mistakes on the process, and refining based on the insights you gain. ",
    shape: "square",
  },
];

const SKILLS = [
  "UI/UX Design",
  "Figma",
  "React",
  "Vite",
  "GSAP",
  "Frontend Architecture",
  "System Design",
  "n8n Automation",
  "API Integration",
  "Next.js",
  "Blender",
  "3D Modeling",
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll(".ph-card")
    );

    const marqueeWrap = section.querySelector(".ph-marquee-wrap");
    const leftTrack = section.querySelector(".ph-marquee-track--left");
    const rightTrack = section.querySelector(".ph-marquee-track--right");

    gsap.set(cards, { opacity: 0, x: 220 });
    gsap.set(marqueeWrap, { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=2200",
        scrub: 1,
        pin: true,
      },
    });

    cards.forEach((card, i) => {
      tl.to(
        card,
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
        },
        i * 0.2
      );
    });

    tl.to(
      marqueeWrap,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      1.1
    );

    if (leftTrack instanceof HTMLElement) {
      gsap.fromTo(
        leftTrack,
        { xPercent: 0 },
        {
          xPercent: -50,
          duration: 24,
          ease: "none",
          repeat: -1,
        }
      );
    }

    if (rightTrack instanceof HTMLElement) {
      gsap.fromTo(
        rightTrack,
        { xPercent: -50 },
        {
          xPercent: 0,
          duration: 24,
          ease: "none",
          repeat: -1,
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="ph-section">
      <div className="ph-header">
        <p className="ph-eyebrow">How I think</p>
        <h2 className="ph-title">
          Design <span>Philosophy</span>
        </h2>
      </div>

      <div className="ph-grid">
        {PRINCIPLES.map((p, i) => (
          <div key={i} className={`ph-card ph-${p.shape}`}>
            <div className="ph-shape" />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="ph-marquee-wrap">
        <div className="ph-subtitle">Tools & Capabilities</div>

        <div className="ph-marquee">
          <div className="ph-marquee-track ph-marquee-track--left">
            <div className="ph-marquee-group">
              {SKILLS.map((s, i) => (
                <div key={`left-a-${i}`} className="ph-skill-tile">
                  {s}
                </div>
              ))}
            </div>

            <div className="ph-marquee-group" aria-hidden="true">
              {SKILLS.map((s, i) => (
                <div key={`left-b-${i}`} className="ph-skill-tile">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ph-marquee">
          <div className="ph-marquee-track ph-marquee-track--right">
            <div className="ph-marquee-group">
              {SKILLS.map((s, i) => (
                <div key={`right-a-${i}`} className="ph-skill-tile alt">
                  {s}
                </div>
              ))}
            </div>

            <div className="ph-marquee-group" aria-hidden="true">
              {SKILLS.map((s, i) => (
                <div key={`right-b-${i}`} className="ph-skill-tile alt">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}