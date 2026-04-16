"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {Link} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: "01",
    title: "Coldchain Web Redesign",
    description:
      "Why is my website not making me money? A closer look at how I redesigned a cold chain logistics platform to improve clarity, usability, and overall performance.",
    href: "/projects/coldchain",
    image: "/coldchain-work2.png",
    bg:     "#3772ff",
    text:   "#000000",
    accent: "#fdca40",
    scramble: ["#df2935", "#fdca40", "#e6e8e6", "#080708", "#3772ff"],
  },
  {
    id: "02",
    title: "GSAP Interaction Study ",
    description:
      "This project was an exploration into motion design using GSAP, where I worked with timelines, sequencing, and scroll-triggered animations to better understand how movement can enhance user experience.",
    href: "/projects/mojito",
    image: "mojito-work.png",
    bg:     "#df2935",
    text:   "#e6e8e6",
    accent: "#fdca40",
    scramble: ["#3772ff", "#e6e8e6", "#080708", "#fdca40", "#df2935"],
  },
  {
    id: "03",
    title: "Taxi Automation System",
    description:
      "A taxi dispatch system designed to optimize how rides are assigned to customers, and handle large volume of ride requests while ensuring a smooth user experience.",
    href: "/projects/taxi",
    image: "taxi.png",
    bg:     "#fdca40",
    text:   "#080708",
    accent: "#df2935",
    scramble: ["#3772ff", "#df2935", "#e6e8e6", "#080708", "#fdca40"],
  },
];

export default function FeaturedWork() {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrap  = wrapRef.current;
    const strip = stripRef.current;
    if (!wrap || !strip) return;

    // Total horizontal distance to scroll = width of all project panels
    // The strip is: 1 intro panel + 3 project panels, each 100vw wide
    const totalMove = strip.scrollWidth - window.innerWidth;

    // One ScrollTrigger pins the wrapper and drives the horizontal strip
    gsap.to(strip, {
      x: -totalMove,
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        start: "top top",
        end: () => `+=${totalMove}`,
        pin: true,
        scrub: 1.0,
        invalidateOnRefresh: true,
      },

      

    });

    // Color scramble: fires when each project panel is roughly centered
    PROJECTS.forEach((p, i) => {
      // Panel index in strip: 0 = intro, 1-3 = projects
      // Panel i+1 is centered when strip has moved (i + 0.5) × 100vw
      const panelCenterX = (i + 0.85) * window.innerWidth;
      const progress = panelCenterX / totalMove;

      const numEl   = wrap.querySelector(`.fw-num[data-i="${i}"]`) as HTMLElement;
      const titleEl = wrap.querySelector(`.fw-card-title[data-i="${i}"]`) as HTMLElement;
      if (!numEl || !titleEl) return;

      let fired = false;
      let raf: number;

      ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        end: () => `+=${totalMove}`,
        scrub: false,
        onUpdate: (self) => {
          if (self.progress >= progress && !fired) {
            fired = true;
            let frame = 0;
            const total = 20;
            const colors = p.scramble;
            const run = () => {
              if (frame >= total) {
                numEl.style.color   = p.accent;
                titleEl.style.color = p.text;
                return;
              }
              const c = colors[frame % colors.length];
              numEl.style.color   = c;
              titleEl.style.color = c;
              frame++;
              raf = requestAnimationFrame(run);
            };
            run();
          }
          if (self.progress < progress - 0.05) {
            fired = false;
            cancelAnimationFrame(raf);
            numEl.style.color   = "transparent";
            titleEl.style.color = "transparent";
          }
        },
      });
    });

  }, { scope: wrapRef });

  return (
    <section id="featured-work">
    
    <div ref={wrapRef} className="fw-wrap">

      {/* strip is the wide horizontal row that gets translated */}
      <div ref={stripRef} className="fw-strip">

        {/* ── Intro panel ───────────────────────────────────────────── */}
        <div className="fw-intro-panel">
          <p className="fw-eyebrow">Selected projects</p>
          <h2 className="fw-heading">
            <em className="fw-heading-serif">Featured</em>
            <br />
            <span className="fw-heading-sans">Work.</span>
          </h2>
          <p className="fw-intro-sub">{PROJECTS.length} projects — scroll →</p>
        </div>

        {/* ── Project panels ────────────────────────────────────────── */}
        {PROJECTS.map((p, i) => (
          <div
            key={p.id}
            className="fw-card"
            style={{ background: p.bg }}
          >
            {/* Top row: number + hint */}
            <div className="fw-card-top">
              <span
                className="fw-num"
                data-i={i}
                style={{ color: "transparent" }}
              >
                {p.id} / {String(PROJECTS.length).padStart(2, "0")}
              </span>
            </div>

            {/* Main content: image left, text right */}
            <div className="fw-card-body">

              <div className="fw-image-wrap">
                <img
                  src={p.image}
                  alt={p.title}
                  className="fw-image"
                />
                {/* Placeholder visible when image is missing */}
                <div
                  className="fw-image-placeholder"
                  style={{
                    background:
                      p.text === "#e6e8e6"
                        ? "rgba(230,232,230,0.10)"
                        : "rgba(8,7,8,0.08)",
                  }}
                />
              </div>

              <div className="fw-info">
                <h3
                  className="fw-card-title"
                  data-i={i}
                  style={{ color: "transparent" }}
                >
                  {p.title}
                </h3>
                <p
                  className="fw-desc"
                  style={{
                    color:
                      p.text === "#e6e8e6"
                        ? "rgba(230,232,230,0.7)"
                        : "rgba(8,7,8,0.65)",
                  }}
                >
                  {p.description}
                </p>
                <Link
                  to={p.href}
                  className="fw-link"
                  style={{ color: p.accent, borderColor: p.accent }}
                >
                  View project
                  <span className="fw-arrow">→</span>
                </Link>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
    </section>
  );
}