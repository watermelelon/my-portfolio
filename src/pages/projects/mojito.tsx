"use client";

import { useEffect } from "react";
import { Timeline } from "@/components/ui/timeline";

const PROJECT_TITLE = "GSAP Interaction Study";
const PROJECT_SUBTITLE = "Motion Systems, Scroll Choreography, and Interactive Frontend Exploration";
const PROJECT_YEAR = "2026";

const data = [
  {
    title: "Context",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          This project began as a structured motion study inspired by concepts
          from the <strong className="text-[#3772ff]">JavaScript Mastery</strong>{" "}
          YouTube channel. Rather than treating it as a tutorial exercise, I
          used it as a starting point to explore how motion can shape rhythm,
          hierarchy, and interaction across a full-page experience.
        </p>

        <p className="tl-body">
          The goal was to move beyond isolated animations and build a cohesive,
          scroll-driven interface where timing, transitions, video, and layout
          worked together as one system.
        </p>

        <div className="tl-tags">
          <span className="tl-tag">Motion Study</span>
          <span className="tl-tag">Frontend Experiment</span>
          <span className="tl-tag">Interaction Design</span>
        </div>

        <div className="tl-grid">
          <figure className="tl-figure">
            <video
              className="tl-media"
              src="/videos/gsap/context-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <figcaption className="tl-caption">
              Early motion exploration focused on page rhythm and visual pacing.
            </figcaption>
          </figure>

          <figure className="tl-figure">
            <video
              className="tl-media"
              src="/videos/gsap/context-2.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <figcaption className="tl-caption">
              Testing how scroll, transitions, and media could work together in
              one continuous experience.
            </figcaption>
          </figure>
        </div>
      </div>
    ),
  },
  {
    title: "What I Explored",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          My focus was on building a stronger understanding of motion systems in
          the browser — not just how to animate elements, but how to design
          interactions that feel coordinated, readable, and intentional.
        </p>

        <div className="tl-checklist">
          <span className="tl-check">Core GSAP methods such as <code>.to()</code>, <code>.from()</code>, and <code>.fromTo()</code></span>
          <span className="tl-check">Scroll-driven choreography using ScrollTrigger</span>
          <span className="tl-check">Sequencing and orchestration through GSAP timelines</span>
          <span className="tl-check">Coordinating multiple simultaneous animations without visual clutter</span>
          <span className="tl-check">Text motion using letter-by-letter and staged reveal effects</span>
          <span className="tl-check">Balancing motion with usability, readability, and performance</span>
        </div>

        <div className="tl-grid">
          <figure className="tl-figure">
            <video
              className="tl-media"
              src="/videos/gsap/explore-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <figcaption className="tl-caption">
              Text animation study exploring sequencing, hierarchy, and pacing.
            </figcaption>
          </figure>

          <figure className="tl-figure">
            <video
              className="tl-media"
              src="/videos/gsap/explore-2.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <figcaption className="tl-caption">
              ScrollTrigger tests used to connect motion to user-driven page flow.
            </figcaption>
          </figure>
        </div>
      </div>
    ),
  },
  {
    title: "Key Interactions",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          These concepts were translated into a series of interactions designed
          to make the interface feel alive without becoming chaotic. The focus
          was on continuity: using motion to connect sections rather than
          treating each animation as a separate effect.
        </p>

        <div className="tl-checklist">
          <span className="tl-check">Scroll-controlled video used as an immersive visual layer</span>
          <span className="tl-check">Text transitions where individual letters and words animate in sequence</span>
          <span className="tl-check">Timeline-based coordination across multiple interface elements</span>
          <span className="tl-check">Section-to-section transitions where shapes and media help bridge layout changes</span>
          <span className="tl-check">Motion used to guide attention instead of acting as decoration only</span>
        </div>

        <div className="tl-grid">
          <figure className="tl-figure">
            <video
              className="tl-media"
              src="/videos/gsap/interactions-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <figcaption className="tl-caption">
              Example of coordinated timeline motion across multiple visual elements.
            </figcaption>
          </figure>

          <figure className="tl-figure">
            <video
              className="tl-media"
              src="/videos/gsap/interactions-2.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <figcaption className="tl-caption">
              Scroll-based transitions designed to create continuity between sections.
            </figcaption>
          </figure>

          <figure className="tl-figure">
            <video
              className="tl-media"
              src="/videos/gsap/interactions-3.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <figcaption className="tl-caption">
              Video integration study used to test immersive motion without overwhelming the layout.
            </figcaption>
          </figure>

          <figure className="tl-figure">
            <video
              className="tl-media"
              src="/videos/gsap/interactions-4.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <figcaption className="tl-caption">
              Motion experiment focused on pacing, visual hierarchy, and user attention.
            </figcaption>
          </figure>
        </div>
      </div>
    ),
  },
  {
    title: "AI in the Process",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          AI was used as a support tool during the project, mainly to accelerate
          iteration and debugging rather than replace design judgment. I used it
          to compare implementation approaches, troubleshoot animation logic,
          and quickly explore alternative ways of structuring motion-heavy
          components.
        </p>

        <p className="tl-body">
          This was most useful when refining timelines, solving interaction
          edge-cases, and pressure-testing how certain animation ideas could be
          translated into maintainable frontend code. Final decisions were still
          manually adjusted to fit the intended experience and design language.
        </p>

        <div className="tl-tags">
          <span className="tl-tag">AI-Assisted Debugging</span>
          <span className="tl-tag">Iteration Support</span>
          <span className="tl-tag">Code Exploration</span>
        </div>
      </div>
    ),
  },
  {
    title: "Takeaways",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          This project reinforced that motion is not just a visual extra — it is
          a structural design tool. Used well, motion can guide attention,
          clarify hierarchy, create rhythm, and make interfaces feel more
          responsive and memorable.
        </p>

        <p className="tl-body">
          It also helped me think more critically about where motion adds value
          and where it becomes noise. That distinction is especially important
          when designing polished interfaces that still need to feel usable,
          performant, and intentional.
        </p>

        <div className="tl-stats">
          <div className="tl-stat">
            <span className="tl-stat-num">GSAP</span>
            <span className="tl-stat-label">Core animation system</span>
          </div>
          <div className="tl-stat">
            <span className="tl-stat-num">ScrollTrigger</span>
            <span className="tl-stat-label">Scroll choreography</span>
          </div>
          <div className="tl-stat">
            <span className="tl-stat-num">Motion Thinking</span>
            <span className="tl-stat-label">Design + implementation growth</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function GsapInteractionStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="tl-page">
      <div className="tl-page-header">
        <a href="/#featured-work" className="tl-back">← Back to work</a>
        <p className="tl-page-eyebrow">{PROJECT_YEAR} · Case Study</p>
        <h1 className="tl-page-title">
          <em className="tl-serif">{PROJECT_TITLE}</em>
        </h1>
        <p className="tl-page-subtitle">{PROJECT_SUBTITLE}</p>
      </div>

      <section className="tl-overview">
        <div className="tl-overview-grid">
          <div className="tl-overview-main">
            <p className="tl-overview-label">Overview</p>
            <h2 className="tl-overview-title">
              Exploring how motion can turn static pages into more immersive,
              intentional interfaces.
            </h2>
            <p className="tl-overview-copy">
              This project was a focused study in motion design and interactive
              frontend development using GSAP. Starting from guided inspiration,
              I used the project to build a deeper understanding of scroll
              choreography, timelines, text motion, and multimedia transitions.
              The result was not a production product, but a practical
              exploration of how motion can support storytelling, hierarchy, and
              user engagement in modern web interfaces.
            </p>
          </div>

          <div className="tl-overview-meta">
            <div className="tl-meta-block">
              <p className="tl-meta-label">Role</p>
              <p className="tl-meta-value">Interaction Design · Frontend Development</p>
            </div>

            <div className="tl-meta-block">
              <p className="tl-meta-label">Tools</p>
              <p className="tl-meta-value">GSAP · ScrollTrigger · React</p>
            </div>

            <div className="tl-meta-block">
              <p className="tl-meta-label">Focus</p>
              <p className="tl-meta-value">Motion Systems · Scroll Behavior · UI Rhythm</p>
            </div>
          </div>
        </div>
      </section>

      <Timeline data={data} />
    </div>
  );
}