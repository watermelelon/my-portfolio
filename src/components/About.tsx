"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// ─── Process steps ────────────────────────────────────────────────────────────
const STEPS = [
  {
    word:   "Learn.",
    serif:  true,
    color:  "#e6e8e6",
    accent: "#3772ff",
    index:  "01",
    body:   "Every project starts with deep research — users, constraints, and the competitive landscape. No assumptions.",
    tags:   ["User Research", "Competitive Analysis", "Accessibility Audit", "Technical Scoping"],
  },
  {
    word:   "Build.",
    serif:  false,
    color:  "#e6e8e6",
    accent: "#fdca40",
    index:  "02",
    body:   "Design and engineering move together. Components are built for reuse, performance, and mobile-first from day one.",
    tags:   ["Component Systems", "Mobile-First", "Performance Budget", "SEO Architecture"],
  },
  {
    word:   "Polish.",
    serif:  true,
    color:  "#e6e8e6",
    accent: "#df2935",
    index:  "03",
    body:   "Details win. Motion, micro-interactions, spacing, and accessibility turn good into unforgettable.",
    tags:   ["Motion Design", "WCAG 2.1 AA", "Core Web Vitals", "UI Refinement"],
  },
  {
    word:   "Repeat.",
    serif:  false,
    color:  "#e6e8e6",
    accent: "#3772ff",
    index:  "04",
    body:   "Shipping is iteration zero. Data, feedback, and honest critique feed the next cycle. Always improving.",
    tags:   ["A/B Testing", "Analytics", "User Feedback", "Continuous Delivery"],
  },
];

// ─── Marquee rows ─────────────────────────────────────────────────────────────
const ROW1 = "React · TypeScript · GSAP · Figma · Next.js · Tailwind · Node.js · Three.js · Framer Motion · CSS Architecture ·";
const ROW2 = "SEO · Accessibility · Core Web Vitals · UI Systems · Interaction Design · Mobile-First · Design Tokens · Motion ·";

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const steps = gsap.utils.toArray<HTMLElement>(".ph-step");
    const SCROLL_PER_STEP = window.innerHeight * 0.9;

    // Pin the whole section while we scroll through the steps
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${SCROLL_PER_STEP * STEPS.length}`,
      pin: true,
      pinSpacing: true,
    });

    // For each step: word slides in from right, tags stagger up from below
    steps.forEach((step, i) => {
      const word = step.querySelector<HTMLElement>(".ph-word");
      const meta = step.querySelector<HTMLElement>(".ph-meta");
      const tags = step.querySelectorAll<HTMLElement>(".ph-tag");
      const line = step.querySelector<HTMLElement>(".ph-step-line");

      const stepStart = `+=${SCROLL_PER_STEP * i}`;
      const stepEnd   = `+=${SCROLL_PER_STEP * (i + 1)}`;

      // Set initial state
      gsap.set(step,  { autoAlpha: 0 });
      gsap.set(word,  { x: 120, autoAlpha: 0 });
      gsap.set(meta,  { y: 30,  autoAlpha: 0 });
      gsap.set(tags,  { y: 20,  autoAlpha: 0 });
      gsap.set(line,  { scaleX: 0, transformOrigin: "left center" });

      // Slide in
      ScrollTrigger.create({
        trigger: section,
        start: i === 0 ? "top top" : stepStart,
        end: stepEnd,
        onEnter: () => {
          // Hide all other steps first
          steps.forEach((s, j) => {
            if (j !== i) gsap.to(s, { autoAlpha: 0, duration: 0.2 });
          });
          // Animate this step in
          const tl = gsap.timeline();
          tl.to(step,  { autoAlpha: 1, duration: 0.01 })
            .to(line,  { scaleX: 1, duration: 0.6, ease: "power3.out" })
            .to(word,  { x: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out" }, "-=0.4")
            .to(meta,  { y: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" }, "-=0.3")
            .to(tags,  { y: 0, autoAlpha: 1, duration: 0.4, ease: "power2.out", stagger: 0.07 }, "-=0.2");
        },
        onLeaveBack: () => {
          gsap.to(step, { autoAlpha: 0, duration: 0.2 });
          // Show previous step
          if (i > 0) {
            const prev = steps[i - 1];
            gsap.to(prev, { autoAlpha: 1, duration: 0.2 });
          }
        },
      });
    });

    // First step visible immediately on enter
    ScrollTrigger.create({
      trigger: section,
      start: "top 90%",
      once: true,
      onEnter: () => {
        const first = steps[0];
        if (!first) return;
        const word = first.querySelector<HTMLElement>(".ph-word");
        const meta = first.querySelector<HTMLElement>(".ph-meta");
        const tags = first.querySelectorAll<HTMLElement>(".ph-tag");
        const line = first.querySelector<HTMLElement>(".ph-step-line");
        gsap.timeline()
          .to(first, { autoAlpha: 1, duration: 0.01 })
          .to(line,  { scaleX: 1, duration: 0.6, ease: "power3.out" })
          .to(word,  { x: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out" }, "-=0.4")
          .to(meta,  { y: 0, autoAlpha: 1, duration: 0.5 }, "-=0.3")
          .to(tags,  { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.07 }, "-=0.2");
      },
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="ph-section">

      {/* ── Fixed header — always visible during pin ─────────────────── */}
      <div className="ph-header">
        <p className="ph-eyebrow">How I work</p>
        <p className="ph-header-label">Design&nbsp;Philosophy</p>
      </div>

      {/* ── Step counter — top right ─────────────────────────────────── */}
      <div className="ph-counter" aria-hidden="true">
        {STEPS.map((s, i) => (
          <span key={i} className="ph-counter-dot" data-index={i} />
        ))}
      </div>

      {/* ── Steps — stacked absolutely, shown one at a time ──────────── */}
      <div className="ph-stage">
        {STEPS.map((s, i) => (
          <div key={i} className="ph-step" data-step={i}>

            {/* Horizontal rule that draws in */}
            <div className="ph-step-line" style={{ background: s.accent }} />

            {/* Index */}
            <span className="ph-index" style={{ color: s.accent }}>{s.index}</span>

            {/* Big word */}
            <h2
              className={`ph-word ${s.serif ? "ph-word--serif" : "ph-word--sans"}`}
              style={{ color: s.color }}
            >
              {s.word}
            </h2>

            {/* Body + tags */}
            <div className="ph-meta">
              <p className="ph-body">{s.body}</p>
              <div className="ph-tags">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="ph-tag"
                    style={{ borderColor: s.accent, color: s.accent }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* ── Marquee — sits below the pinned area ─────────────────────── */}
      <div className="ph-marquee-wrap" aria-hidden="true">
        <div className="ph-marquee ph-marquee--fwd">
          <span>{ROW1}&nbsp;&nbsp;&nbsp;{ROW1}&nbsp;&nbsp;&nbsp;{ROW1}</span>
        </div>
        <div className="ph-marquee ph-marquee--rev">
          <span>{ROW2}&nbsp;&nbsp;&nbsp;{ROW2}&nbsp;&nbsp;&nbsp;{ROW2}</span>
        </div>
      </div>

    </section>
  );
}