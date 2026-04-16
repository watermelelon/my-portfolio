"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Timeline } from "@/components/ui/timeline";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_TITLE = "GSAP Interaction Study";
const PROJECT_SUBTITLE =
  "Motion Systems, Scroll Choreography, and Interactive Frontend Exploration";
const PROJECT_YEAR = "2026";

const HEADER_ACCENT = "#df2935";
const INLINE_ACCENT = "#3772ff";

export default function GsapInteractionStudy() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useGSAP(
    () => {
      const page = pageRef.current;
      if (!page) return;

      gsap.set(".tl-page-header > *", { opacity: 0, y: 28 });
      gsap.set(".tl-overview-main > *", { opacity: 0, y: 24 });
      gsap.set(".tl-meta-block", { opacity: 0, y: 18 });
      gsap.set(".tl-reveal", { opacity: 0, y: 26 });
      gsap.set(".tl-stat", { opacity: 0, y: 18 });
      gsap.set(".tl-next-project", { opacity: 0, y: 28 });

      const headerTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      headerTl
        .to(".tl-page-header > *", {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.08,
        })
        .to(
          ".tl-overview-main > *",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
          },
          "-=0.4"
        )
        .to(
          ".tl-meta-block",
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
          },
          "-=0.45"
        );

      gsap.utils.toArray<HTMLElement>(".tl-reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".tl-stats").forEach((statsBlock) => {
        const stats = statsBlock.querySelectorAll(".tl-stat");
        gsap.to(stats, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsBlock,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.to(".tl-next-project", {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tl-next-project",
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: pageRef }
  );

  const data = [
    {
      title: "Context",
      content: (
        <div className="tl-content">
          <p className="tl-body tl-reveal">
            This project began as a structured motion study inspired by concepts
            from the{" "}
            <strong style={{ color: INLINE_ACCENT }}>JavaScript Mastery</strong>{" "}
            YouTube channel. Rather than treating it as a tutorial exercise, I
            used it as a starting point to explore how motion can shape rhythm,
            hierarchy, and interaction across a full-page experience.
          </p>

          <p className="tl-body tl-reveal">
            The goal was to move beyond isolated animations and build a cohesive,
            scroll-driven interface where timing, transitions, video, and layout
            worked together as one system.
          </p>

          <div className="tl-tags tl-reveal">
            <span className="tl-tag">Motion Study</span>
            <span className="tl-tag">Frontend Experiment</span>
            <span className="tl-tag">Interaction Design</span>
          </div>

          <div className="tl-grid">
            <figure className="tl-figure tl-reveal">
              <video
                className="tl-media"
                src="/images/mojito/context1.mp4"
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

            <figure className="tl-figure tl-reveal">
              <video
                className="tl-media"
                src="/images/mojito/context2.mp4"
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
          <p className="tl-body tl-reveal">
            My focus was on building a stronger understanding of motion systems in
            the browser — not just how to animate elements, but how to design
            interactions that feel coordinated, readable, and intentional.
          </p>

          <div className="tl-checklist tl-reveal">
            <span className="tl-check">
              Core GSAP methods such as <code>.to()</code>, <code>.from()</code>,
              and <code>.fromTo()</code>
            </span>
            <span className="tl-check">
              Scroll-driven choreography using ScrollTrigger
            </span>
            <span className="tl-check">
              Sequencing and orchestration through GSAP timelines
            </span>
            <span className="tl-check">
              Coordinating multiple simultaneous animations without visual clutter
            </span>
            <span className="tl-check">
              Text motion using letter-by-letter and staged reveal effects
            </span>
            <span className="tl-check">
              Balancing motion with usability, readability, and performance
            </span>
          </div>

          <div className="tl-grid">
            <figure className="tl-figure tl-reveal">
              <video
                className="tl-media"
                src="/images/mojito/context3.mp4"
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

            <figure className="tl-figure tl-reveal">
              <video
                className="tl-media"
                src="/images/mojito/context4.mp4"
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
          <p className="tl-body tl-reveal">
            These concepts were translated into a series of interactions designed
            to make the interface feel alive without becoming chaotic. The focus
            was on continuity: using motion to connect sections rather than
            treating each animation as a separate effect.
          </p>

          <div className="tl-checklist tl-reveal">
            <span className="tl-check">
              Scroll-controlled video used as an immersive visual layer
            </span>
            <span className="tl-check">
              Text transitions where individual letters and words animate in
              sequence
            </span>
            <span className="tl-check">
              Timeline-based coordination across multiple interface elements
            </span>
            <span className="tl-check">
              Section-to-section transitions where shapes and media help bridge
              layout changes
            </span>
            <span className="tl-check">
              Motion used to guide attention instead of acting as decoration only
            </span>
          </div>

          <div className="tl-grid">
            <figure className="tl-figure tl-reveal">
              <video
                className="tl-media"
                src="/images/mojito/interaction1.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
              <figcaption className="tl-caption">
                Example of coordinated timeline motion across multiple visual
                elements.
              </figcaption>
            </figure>

            <figure className="tl-figure tl-reveal">
              <video
                className="tl-media"
                src="/images/mojito/interaction2.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
              <figcaption className="tl-caption">
                Scroll-based transitions designed to create continuity between
                sections.
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
          <p className="tl-body tl-reveal">
            AI was used as a support tool during the project, mainly to accelerate
            iteration and debugging rather than replace design judgment. I used it
            mostly for troubleshooting animation logic, fix some sintax errors 
            in my code, and exploring alternative approaches to certain motion elements. 
          </p>

        

          <div className="tl-tags tl-reveal">
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
          <p className="tl-body tl-reveal">
            This project reinforced that motion its actually a tool that helps
            telling a story and creating a experience to users, rather than just making 
            things look 'cool'. Used well, motion can guide attention,
            clarify hierarchy, create rhythm, and make interfaces feel more
            responsive and memorable.
          </p>

          <p className="tl-body tl-reveal">
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

  return (
    <div ref={pageRef} className="tl-page">
      <div className="tl-page-header">
        <a href="/#featured-work" className="tl-back">
          ← Back to work
        </a>

        <p className="tl-page-eyebrow" style={{ color: HEADER_ACCENT }}>
          {PROJECT_YEAR} · Case Study
        </p>

        <h1 className="tl-page-title">
          <em className="tl-serif">{PROJECT_TITLE}</em>
        </h1>

        <p className="tl-page-subtitle">{PROJECT_SUBTITLE}</p>
      </div>

      <section className="tl-overview">
        <div className="tl-overview-grid">
          <div className="tl-overview-main">
            <p className="tl-overview-label" style={{ color: HEADER_ACCENT }}>
              Overview
            </p>

            <h2 className="tl-overview-title">
              Exploring how motion can turn static pages into more immersive,
              intentional interfaces.
            </h2>

            <p className="tl-overview-copy">
              This project was a focused study in motion design and interactive
              frontend development using GSAP. Starting from guided inspiration, I
              used the project to build a deeper understanding of scroll
              choreography, timelines, text motion, and multimedia transitions.
              The result was not a production product, but a practical
              exploration of how motion can support storytelling, hierarchy, and
              user engagement in modern web interfaces.
            </p>
          </div>

          <div className="tl-overview-meta">
            <div className="tl-meta-block">
              <p className="tl-meta-label" style={{ color: HEADER_ACCENT }}>
                Role
              </p>
              <p className="tl-meta-value">
                Interaction Design · Frontend Development
              </p>
            </div>

            <div className="tl-meta-block">
              <p className="tl-meta-label" style={{ color: HEADER_ACCENT }}>
                Tools
              </p>
              <p className="tl-meta-value">GSAP · ScrollTrigger · React</p>
            </div>

            <div className="tl-meta-block">
              <p className="tl-meta-label" style={{ color: HEADER_ACCENT }}>
                Focus
              </p>
              <p className="tl-meta-value">
                Motion Systems · Scroll Behavior · UI Rhythm
              </p>
            </div>
          </div>
        </div>
      </section>

      <Timeline data={data} />

      <footer className="tl-next-project">
        <div className="tl-next-inner">
          <p className="tl-next-label" style={{ color: HEADER_ACCENT }}>
            Next project
          </p>

          <h2 className="tl-next-title">
            <em className="tl-serif">Taxi</em> Automation System
          </h2>

          <p className="tl-next-copy">
            A taxi dispatch system designed to optimize how rides are assigned to customers,
             and handle large volume of ride requests while ensuring a smooth user experience.
          </p>

          <Link to="/projects/taxi" className="tl-next-link">
                      View next project →
          </Link>
        </div>
      </footer>
    </div>
  );
}