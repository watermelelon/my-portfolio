"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {Link} from "react-router-dom";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable);

gsap.registerPlugin(ScrollTrigger);

// ─── Projects ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "pg1",
    shape: "rect-wide",   // 2-col span rectangle
    title: "Gingerbread man Animation",
    desc: "An animation made in my Computer Graphics class, using Blender, and basic 3D modeling ",
    href: "/playground/motion-kit",
    image: "/gingerbanner.png",
    tint: "rgba(55,114,255,0.45)",
  },
  {
    id: "pg2",
    shape: "circle",
    title: "Startec",
    desc: "Startec has one mission: how do we clean space debris? This project was a concept for a startup that would use a combination of ground-based lasers and satellite technology to track, capture, and de-orbit space debris, making space safer and more sustainable for future generations.",
    href: "/playground/type",
    image: "/startecbanner.png",
    tint: "rgba(223,41,53,0.45)",
  },
  {
    id: "pg3",
    shape: "rect-tall",   // tall rectangle
    title: "Arkadia Analytics",
    desc: "This was one of the first projects I worked on as a UX designer, where I was responsible for developing the Blog page and help with overall UI improvements. ",
    href: "/playground/grid",
    image: "/arkadiabannerUPD.png",
    tint: "rgba(253,202,64,0.45)",
  },
  {
    id: "pg4",
    shape: "square",
    title: "Eye-Q",
    desc: "This is an experimental project in which I used computer vision to track the user's gaze and create an interactive experience that responds to where they are looking on the screen.",
    href: "/playground/cursor",
    image: "/eyeqbanner.png",
    tint: "rgba(55,114,255,0.45)",
  },
  {
    id: "pg5",
    shape: "diamond",     // square rotated 45°
    title: "Logo Designs",
    desc: "I also do logos! Here are some of my favourite logo design projects, where I explored different concepts, typography, and visual styles to create unique brand identities.",
    href: "/playground/3d",
    image: "/logosbannerUPD.png",
    tint: "rgba(223,41,53,0.45)",
  },
  {
    id: "pg6",
    shape: "rect",
    title: "Zenda Solution",
    desc: "This is a startup I co-founded with 4 friends, where our main goal is to help businesses automate processes and make their operations more efficient.  ",
    href: "/playground/scroll",
    image: "/zendabannerUPD.png",
    tint: "rgba(253,202,64,0.4)",
  },
];

// Random scatter targets — computed once so reset re-uses them
type ScatterTarget = { x: number; y: number; rotation: number };
const scatterTargets: Record<string, ScatterTarget> = {};

function getScatter(id: string, w: number, h: number): ScatterTarget {
  if (scatterTargets[id]) return scatterTargets[id];
  // Keep within the section bounds with some padding
  const t = {
    x:        gsap.utils.random(-w * 0.28, w * 0.28),
    y:        gsap.utils.random(-h * 0.18, h * 0.18),
    rotation: gsap.utils.random(-22, 22),
  };
  scatterTargets[id] = t;
  return t;
}

export default function Playground() {
  const sectionRef  = useRef<HTMLElement>(null);
  const [scattered, setScattered] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const W = section.offsetWidth;
    const H = section.offsetHeight;

    // Pre-compute scatter targets now that we have dimensions
    PROJECTS.forEach((p) => getScatter(p.id, W, H));

    // ── Scroll trigger: explode on enter ────────────────────────────────────
    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      once: true,
      onEnter: () => {
  setScattered(true);

  PROJECTS.forEach((p, i) => {
    const el = section.querySelector(`[data-id="${p.id}"]`);
    if (!el) return;
    const t = scatterTargets[p.id];

    gsap.to(el, {
      x: t.x,
      y: t.y,
      rotation: t.rotation,
      duration: 0.9,
      delay: i * 0.07,
      ease: "power3.out",
      onComplete: () => {
        if (i === PROJECTS.length - 1) {
          enableDragging(); // ← 🔥 KEY
        }
      }
    });
  });
}
    });

  }, { scope: sectionRef });

  // ── Reset: animate back to grid (x:0, y:0, rotation:0) ──────────────────
  const handleReset = () => {
    const section = sectionRef.current;
    if (!section) return;

    setScattered(false);
    setHoveredId(null);

    PROJECTS.forEach((p, i) => {
      const el = section.querySelector<HTMLElement>(`[data-id="${p.id}"]`);
      if (!el) return;
      gsap.to(el, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.7,
        delay: i * 0.06,
        ease: "power3.inOut",
        onComplete: () => {
          // Re-scatter after a beat
          setTimeout(() => {
            setScattered(true);
            const t = scatterTargets[p.id];
            gsap.to(el, {
              x: t.x,
              y: t.y,
              rotation: t.rotation,
              duration: 0.8,
              delay: i * 0.07,
              ease: "power3.out",
            });
          }, 600);
        },
      });
    });
  };

  // ── Enable dragging AFTER scatter ─────────────────────────────
let draggables: Draggable[] = [];

const enableDragging = () => {
  const section = sectionRef.current;
  if (!section) return;

  // kill old ones if re-init
  draggables.forEach(d => d.kill());
  draggables = [];

  PROJECTS.forEach((p) => {
    const el = section.querySelector<HTMLElement>(`[data-id="${p.id}"]`);
    if (!el) return;

    const d = Draggable.create(el, {
      type: "x,y",
      edgeResistance: 0.75,
      inertia: true,
      onPress() {
        gsap.to(el, { scale: 1.08, zIndex: 30, duration: 0.2 });
      },
      onRelease() {
        gsap.to(el, { scale: 1, duration: 0.3 });
      },
    })[0];

    draggables.push(d);
  });
};
  // ── Hover: snap upright + scale ──────────────────────────────────────────
  const handleEnter = (id: string) => {
  if (!scattered) return;

  const section = sectionRef.current;
  if (!section) return;

  const el = section.querySelector(`[data-id="${id}"]`);
  if (!el) return;

  // ❌ prevent conflict if dragging
  if (Draggable.get(el)?.isDragging) return;

  setHoveredId(id);

  gsap.to(el, {
    rotation: 0,
    scale: 1.06,
    zIndex: 20,
    duration: 0.35,
    ease: "power2.out",
  });
};

  const handleLeave = (id: string) => {
    const section = sectionRef.current;
    if (!section) return;
    setHoveredId(null);

    const el = section.querySelector<HTMLElement>(`[data-id="${id}"]`);
    if (!el) return;
    const t = scatterTargets[id];

    gsap.to(el, {
      rotation: scattered ? t.rotation : 0,
      scale: 1,
      zIndex: 1,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  return (
    <section ref={sectionRef} className="pg-section">

      {/* ── Header ──────────────────────────────────────────────────── */}
      <div className="pg-header">
        <div>
          <p className="pg-eyebrow">Experiments &amp; side projects</p>
          <h2 className="pg-title">
            <em className="pg-serif">The</em>{" "}
            <span className="pg-sans">Playground.</span>
          </h2>
        </div>

        <button
          className="pg-reset-btn"
          onClick={handleReset}
          aria-label="Shuffle layout"
        >
          ↺ Reset
        </button>
      </div>

      {/* ── Bento grid ──────────────────────────────────────────────── */}
      <div className="pg-grid">
        {PROJECTS.map((p) => (
          <div
            key={p.id}
            data-id={p.id}
            className={`pg-card pg-card--${p.shape}`}
            onMouseEnter={() => handleEnter(p.id)}
            onMouseLeave={() => handleLeave(p.id)}
          >
            {/* Image */}
            <img
              src={p.image}
              alt={p.title}
              className="pg-card-img"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />

            {/* Color tint overlay */}
            <div className="pg-card-tint" style={{ background: p.tint }} />

            {/* Info overlay — slides up on hover */}
            <div className={`pg-card-info${hoveredId === p.id ? " is-visible" : ""}`}>
              <p className="pg-card-title">{p.title}</p>
              <p className="pg-card-desc">{p.desc}</p>
              <Link to={p.href} className="pg-card-link">
                View project →
              </Link>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}