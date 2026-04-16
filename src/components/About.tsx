"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import StickerPeel from './StickerPeel'


gsap.registerPlugin(ScrollTrigger);

const FACTS = [
  { label: "Based in",    value: "Thunder Bay / Quito" },
  { label: "Studied",    value: " HBSc. in Computer Science" },
  { label: "Focus",       value: "UI/UX · Motion · Systems" },
  { label: "Available",   value: "Open to opportunities" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Left column slides in from left
    gsap.from(".ab-left", {
      x: -60,
      opacity: 0,
      duration: 1.0,
      ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 72%", once: true },
    });

    // Photo slides in from right with slight delay
    gsap.from(".ab-photo-wrap", {
      x: 60,
      opacity: 0,
      duration: 1.0,
      delay: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 72%", once: true },
    });

    // Facts stagger up
    gsap.from(".ab-fact", {
      y: 24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: ".ab-facts", start: "top 85%", once: true },
    });

    // Decorative ring rotates slowly on scroll
    gsap.to(".ab-ring", {
      rotation: 90,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

  }, { scope: sectionRef });

  return (
    <section  id="about"ref={sectionRef} className="ab-section">
  

      {/* ── Eyebrow ──────────────────────────────────────────────────── */}
      <p className="ab-eyebrow">The person behind the work</p>

      {/* ── Main grid ────────────────────────────────────────────────── */}
      <div className="ab-grid">

        {/* LEFT — text ─────────────────────────────────────────────── */}
        <div className="ab-left">

          <h2 className="ab-heading">
            <em className="ab-serif">Hi, I'm</em>
            <br />
            <span className="ab-sans">Emilio.</span>
          </h2>

          <div className="ab-body">
            <p>
              I’m a 22-year-old designer and developer originally from Quito, Ecuador, now based in Thunder Bay, Canada,
               where <strong>I studied and graduated in Computer Science</strong> at Lakehead University in 2025. 
              This has allowed me to work across cultures, meet new people, and work in different contexts.
            </p>
            <p>
              As a recent graduate, I’ve explored different areas within the field, but I’ve found myself drawn to building digital experiences—particularly those focused on <strong> design, user experience, and creating spaces </strong>  that are genuinely pleasant to interact with.
            </p>
            <p>
              Outside of work, I enjoy reading, board games, music festivals, and keeping up with new film releases.
               I believe good design starts by engaging with the experiences of others.
            </p>
          </div>

          {/* Fact grid */}
          <div className="ab-facts">
            {FACTS.map((f) => (
              <div key={f.label} className="ab-fact">
                <span className="ab-fact-label">{f.label}</span>
                <span className="ab-fact-value">{f.value}</span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT — photo ───────────────────────────────────────────── */}

        <div className="ab-photo-wrap">
          <StickerPeel
            imageSrc= "/ecuador-flag.png"
            width={150}
            rotate={10}
            peelBackHoverPct={30}
            peelBackActivePct={40}
            shadowIntensity={0.5}
            lightingIntensity={0.1}
            initialPosition={{ x: 150, y: -180 }}
            peelDirection={0}
          />

          <StickerPeel
            imageSrc= "/canada-flag.png"
            width={150}
            rotate={-10}
            peelBackHoverPct={30}
            peelBackActivePct={40}
            shadowIntensity={0.5}
            lightingIntensity={0.1}
            initialPosition={{ x: -140, y: 140 }}
            peelDirection={0}
          />

           <StickerPeel
            imageSrc= "/logo-ball.png"
            width={150}
            rotate={-10}
            peelBackHoverPct={30}
            peelBackActivePct={40}
            shadowIntensity={0.5}
            lightingIntensity={0.1}
            initialPosition={{ x: 150, y: 200 }}
            peelDirection={0}
          />

          {/* Decorative rotating ring behind the photo */}
          <div className="ab-ring" aria-hidden="true" />

          {/* Accent block — sits behind + offset */}
          <div className="ab-photo-accent" aria-hidden="true" />

          

          {/* Photo frame */}
          <div className="ab-photo-frame">
            <img
              src="/emilio.jpeg"
              alt="Emilio"
              className="ab-photo"
              onError={(e) => {
                // Fallback: show initials
                const el = e.target as HTMLImageElement;
                el.style.display = "none";
                const parent = el.parentElement;
                if (parent) {
                  const init = document.createElement("div");
                  init.className = "ab-photo-fallback";
                  init.textContent = "E";
                  parent.appendChild(init);
                }
              }}
            />
          </div>

          {/* Floating label tag */}
          <div className="ab-tag" aria-hidden="true">
            <span className="ab-tag-dot" />
            <span>Available for work</span>
          </div>

        </div>

      </div>

    </section>
  );
}