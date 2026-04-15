"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, Draggable);

const PROJECTS = [
  {
    id: "pg1",
    shape: "rect-wide",
    title: "Gingerbread man Animation",
    desc: "An animation made in my Computer Graphics class, using Blender, and basic 3D modeling.",
    href: "https://youtu.be/zqK-Sm0fmQ8?si=oe48p1LFaqgHWNql",
    image: "/gingerbanner.png",
    tint: "rgba(55,114,255,0.45)",
  },
  {
    id: "pg2",
    shape: "circle",
    title: "Startec",
    desc: "Startec has one mission: how do we clean space debris? This project was a concept for a startup that would ensure space sustainability.",
    href: "../../Startec_Presentation.pdf",
    image: "/startecbanner.png",
    tint: "rgba(223,41,53,0.45)",
  },
  {
    id: "pg3",
    shape: "rect-tall",
    title: "Arkadia Analytics",
    desc: "One of the first projects I worked on as a UX designer, where I developed the Blog page and helped with overall UI improvements.",
    href: "https://www.arkadiaanalytics.com/",
    image: "/arkadia-banner.png",
    tint: "rgba(253,202,64,0.45)",
  },
  {
    id: "pg4",
    shape: "square",
    title: "Eye-Q",
    desc: "An experimental project using computer vision to track the user's gaze and create an interactive experience that responds to where they are looking.",
    href: "https://github.com/watermelelon/face-detection-opencv",
    image: "/eyeqbanner.png",
    tint: "rgba(55,114,255,0.45)",
  },
  {
    id: "pg5",
    shape: "diamond",
    title: "Logo Designs",
    desc: "A selection of my favourite logo design projects, exploring concepts, typography, and visual styles to create unique brand identities.",
    href: "https://www.canva.com/design/DAHCHhUPZQ4/NANqbLS2YxGIMfPOc2FbtQ/view?utm_content=DAHCHhUPZQ4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd5c7990a17",
    image: "/logos-banner.png",
    tint: "rgba(223,41,53,0.45)",
  },
  {
    id: "pg6",
    shape: "rect",
    title: "Zenda Solution",
    desc: "A startup I co-founded with friends to help businesses automate processes and make operations more efficient.",
    href: "https://www.zendasolution.com/",
    image: "/zenda-banner.png",
    tint: "rgba(253,202,64,0.4)",
  },
];

type ScatterTarget = { x: number; y: number; rotation: number };

export default function Playground() {
  const sectionRef = useRef<HTMLElement>(null);
  const draggablesRef = useRef<Draggable[]>([]);
  const scatterTargetsRef = useRef<Record<string, ScatterTarget>>({});
  const [chaotic, setChaotic] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const buildScatterTargets = () => {
    const section = sectionRef.current;
    if (!section) return;

    const w = section.offsetWidth;
    const h = section.offsetHeight;

    const nextTargets: Record<string, ScatterTarget> = {};

    PROJECTS.forEach((p) => {
      nextTargets[p.id] = {
        x: gsap.utils.random(-w * 0.28, w * 0.28),
        y: gsap.utils.random(-h * 0.18, h * 0.18),
        rotation: gsap.utils.random(-24, 24),
      };
    });

    nextTargets["pg-ball"] = {
      x: gsap.utils.random(-w * 0.24, w * 0.24),
      y: gsap.utils.random(-h * 0.14, h * 0.14),
      rotation: gsap.utils.random(-18, 18),
    };

    scatterTargetsRef.current = nextTargets;
  };

  const killDraggables = () => {
    draggablesRef.current.forEach((d) => d.kill());
    draggablesRef.current = [];
  };

  const enableDragging = () => {
    const section = sectionRef.current;
    if (!section) return;

    killDraggables();

    const nodes = [
      ...PROJECTS.map((p) =>
        section.querySelector<HTMLElement>(`[data-id="${p.id}"]`)
      ),
      section.querySelector<HTMLElement>(`[data-id="pg-ball"]`),
    ].filter(Boolean) as HTMLElement[];

    nodes.forEach((el) => {
      const isBall = el.dataset.id === "pg-ball";

      const draggable = Draggable.create(el, {
        type: "x,y",
        edgeResistance: 0.75,
        inertia: true,
        onPress() {
          gsap.to(el, {
            scaleX: isBall ? 1.14 : 1.06,
            scaleY: isBall ? 0.9 : 1.06,
            zIndex: 40,
            duration: 0.18,
            ease: "power2.out",
            overwrite: true,
          });
        },
        onDrag() {
          if (isBall) {
            gsap.to(el, {
              rotation: this.deltaX * 0.08,
              duration: 0.12,
              ease: "power1.out",
              overwrite: true,
            });
          }
        },
        onRelease() {
          gsap.to(el, {
            scaleX: 1,
            scaleY: 1,
            rotation:
              chaotic && !isBall
                ? scatterTargetsRef.current[el.dataset.id || ""]?.rotation || 0
                : 0,
            duration: isBall ? 0.5 : 0.3,
            ease: isBall ? "elastic.out(1, 0.45)" : "power2.out",
            overwrite: true,
          });
        },
      })[0];

      draggablesRef.current.push(draggable);
    });
  };

  const scatterEverything = (fresh = true) => {
    const section = sectionRef.current;
    if (!section) return;

    if (fresh) buildScatterTargets();

    setChaotic(true);

    PROJECTS.forEach((p, i) => {
      const el = section.querySelector<HTMLElement>(`[data-id="${p.id}"]`);
      if (!el) return;

      const t = scatterTargetsRef.current[p.id];

      gsap.to(el, {
        x: t.x,
        y: t.y,
        rotation: t.rotation,
        duration: 0.9,
        delay: i * 0.06,
        ease: "power3.out",
        overwrite: true,
      });
    });

    const ball = section.querySelector<HTMLElement>(`[data-id="pg-ball"]`);
    if (ball) {
      const t = scatterTargetsRef.current["pg-ball"];

      gsap.to(ball, {
        x: t.x,
        y: t.y,
        rotation: t.rotation,
        duration: 1,
        delay: 0.18,
        ease: "elastic.out(1, 0.55)",
        overwrite: true,
        onComplete: enableDragging,
      });
    } else {
      enableDragging();
    }
  };

  const orderEverything = () => {
    const section = sectionRef.current;
    if (!section) return;

    killDraggables();
    setChaotic(false);
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
        delay: i * 0.04,
        ease: "power3.inOut",
        overwrite: true,
      });
    });

    const ball = section.querySelector<HTMLElement>(`[data-id="pg-ball"]`);
    if (ball) {
      gsap.to(ball, {
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        duration: 0.85,
        ease: "elastic.out(1, 0.5)",
        overwrite: true,
      });
    }
  };

  const toggleChaos = () => {
    if (chaotic) {
      orderEverything();
    } else {
      scatterEverything(true);
    }
  };

  const handleShuffle = () => {
    scatterEverything(true);
  };

  const handleEnter = (id: string) => {
    const section = sectionRef.current;
    if (!section) return;

    const el = section.querySelector<HTMLElement>(`[data-id="${id}"]`);
    if (!el) return;
    if (Draggable.get(el)?.isDragging) return;

    setHoveredId(id);

    gsap.to(el, {
      rotation: 0,
      scale: 1.06,
      zIndex: 20,
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handleLeave = (id: string) => {
    const section = sectionRef.current;
    if (!section) return;

    setHoveredId(null);

    const el = section.querySelector<HTMLElement>(`[data-id="${id}"]`);
    if (!el) return;

    const t = scatterTargetsRef.current[id];

    gsap.to(el, {
      rotation: chaotic ? t?.rotation || 0 : 0,
      scale: 1,
      zIndex: 1,
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
    });
  };

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    buildScatterTargets();

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      once: true,
      onEnter: () => scatterEverything(false),
    });

    return () => {
      killDraggables();
      trigger.kill();
    };
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="pg-section">
      <div className="pg-header">
        <div>
          <p className="pg-eyebrow">Experiments &amp; side projects</p>
          <h2 className="pg-title">
            <em className="pg-serif">The</em>{" "}
            <span className="pg-sans">Playground.</span>
          </h2>
        </div>

        <div className="pg-actions">
          <button
            className="pg-reset-btn"
            onClick={toggleChaos}
            aria-label={chaotic ? "Pause chaos and show grid" : "Resume chaos"}
          >
            {chaotic ? "❚❚ Pause chaos" : "▶ Resume chaos"}
          </button>

          <button
            className="pg-reset-btn"
            onClick={handleShuffle}
            aria-label="Shuffle layout"
          >
            ↺ Shuffle
          </button>
        </div>
      </div>

      <div className="pg-grid">
        {PROJECTS.map((p) => (
          <div
            key={p.id}
            data-id={p.id}
            className={`pg-card pg-card--${p.shape}`}
            onMouseEnter={() => handleEnter(p.id)}
            onMouseLeave={() => handleLeave(p.id)}
          >
            <img
              src={p.image}
              alt={p.title}
              className="pg-card-img"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />

            <div className="pg-card-tint" style={{ background: p.tint }} />

            <div
              className={`pg-card-info${
                hoveredId === p.id ? " is-visible" : ""
              }`}
            >
              <p className="pg-card-title">{p.title}</p>
              <p className="pg-card-desc">{p.desc}</p>
              <Link to={p.href} className="pg-card-link">
                View project →
              </Link>
            </div>
          </div>
        ))}

        <div
          className="pg-card pg-card--ball"
          data-id="pg-ball"
          aria-hidden="true"
        >
          <div className="pg-ball">
            <div className="pg-ball-face">
              <span className="pg-ball-eye" />
              <span className="pg-ball-eye" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}