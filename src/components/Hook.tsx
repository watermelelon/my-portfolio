"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// ─── Reference viewport ───────────────────────────────────────────────────────
const REF_W = 1280;
const REF_H = 665;

// Ball size in CSS (px)
const BALL_SIZE = 260;
const BALL_RADIUS = BALL_SIZE / 2; // 130

// ─── Scale at each waypoint ───────────────────────────────────────────────────
// Ball grows from small (far away) to full size as it hops toward camera.
const SCALES = [0.15, 0.40, 0.70, 1.00];

// ─── Waypoints — BASE of ball in viewport px at 1280×665 ─────────────────────
// "Base" = bottom-center of the ball.
// We convert to CENTER by subtracting (BALL_RADIUS × scale) from vy.
const WAYPOINTS_BASE = [
  { vx:   92, vy: 213 },  // start
  { vx:  503, vy: 269 },  // hop 1 landing
  { vx:  772, vy: 357 },  // hop 2 landing
  { vx: 1022, vy: 500 },  // hop 3 landing (final)
];

export default function Hook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef      = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ball = ballRef.current;
    if (!ball) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const sx = vw / REF_W; // horizontal scale factor
    const sy = vh / REF_H; // vertical scale factor

    // Viewport center = stage anchor
    const stageCX = vw / 2;
    const stageCY = vh / 2;

    // Convert base-of-ball viewport coords → GSAP x/y offsets from stage center.
    // At each waypoint the ball has a specific scale, so its visual center is
    // (baseY - BALL_RADIUS * scale) in viewport space.
    const pts = WAYPOINTS_BASE.map(({ vx, vy }, i) => {
      const scale = SCALES[i];
      const centerVX = vx * sx;
      const centerVY = vy * sy - BALL_RADIUS * scale;
      return {
        x: centerVX - stageCX,
        y: centerVY - stageCY,
        scale,
      };
    });

    // ── Initial state ───────────────────────────────────────────────────────
    gsap.set(ball, {
      x: pts[0].x,
      y: pts[0].y,
      scale: pts[0].scale,
      transformOrigin: "center center",
    });

    // ── Text entrance (one-shot, not scrubbed) ──────────────────────────────
    gsap.timeline({ delay: 0.15 })
      .from(".hero-kicker",   { y: 28, opacity: 0, duration: 0.7, ease: "power3.out" })
      .from(".hero-headline", { y: 55, opacity: 0, duration: 1.0, ease: "power3.out" }, "-=0.35")
      .from(".hero-desc",     { y: 18, opacity: 0, duration: 0.6 }, "-=0.5")
      .from(".cta-btn",       { y: 18, opacity: 0, duration: 0.5, stagger: 0.12 }, "-=0.4");

    // ── Master scroll timeline ──────────────────────────────────────────────
    //
    //  0.0 – 1.5   hop 0→1
    //  1.5 – 3.0   hop 1→2
    //  3.0 – 4.5   hop 2→3  (+ squash on landing at 4.5)
    //  4.5 – 7.0   idle at pts[3]
    //  5.5 – 7.0   text + grid fade out
    //  7.0 – 8.5   plummet straight down

    const HOP_DUR = 1.5;

    const master = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1.2,
        pin: true,
      },
      defaults: { ease: "none" },
    });

    // Pad timeline to 9 units total
    master.to({}, { duration: 9 });

    // Grid fades in with the first hop
    master.from(".persp-svg", { opacity: 0, duration: 1.0 }, 0);

    // ── Hops 0→1, 1→2 (no squash) ──────────────────────────────────────────
    addHop(master, ball, pts[0], pts[1], 0,        HOP_DUR);
    addHop(master, ball, pts[1], pts[2], HOP_DUR,  HOP_DUR);

    // ── Hop 2→3 (squash on landing) ────────────────────────────────────────
    addHop(master, ball, pts[2], pts[3], HOP_DUR * 2, HOP_DUR);

    // Squash on the final landing only.
    // Must be slow enough for scrub to seek through — 0.3 + 0.4 is safe.
    const landTime = HOP_DUR * 3; // = 4.5
    master.to(ball, {
      scaleX: 1.28,
      scaleY: 0.75,
      duration: 0.3,
      ease: "power2.out",
    }, landTime);
    master.to(ball, {
      scaleX: 1.0,
      scaleY: 1.0,
      duration: 0.4,
      ease: "power2.out",
    }, landTime + 0.3);

    // ── Text + grid fade out ────────────────────────────────────────────────
    master.to(".hero-text-block", { opacity: 0, duration: 1.5 }, 5.5);
    master.to(".persp-svg",       { opacity: 0, duration: 1.5 }, 5.5);

    // ── Plummet straight down ───────────────────────────────────────────────
    // Target Y: far enough below stageCY to guarantee off-screen on any device.
    // stageCY + vh is always the bottom edge + one full screen of buffer.
    const plummetY = stageCY + 110; // from stage center, this exits the bottom

    master.fromTo(ball,
      { x: pts[3].x, y: pts[3].y, scale: 1.0 },
      { x: pts[3].x, y: plummetY, scale: 0.8, duration: 1.5, ease: "power3.in" },
      7.0
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="hero-scene">

      {/* ── Perspective grid ──────────────────────────────────────────── */}
      <svg
        className="persp-svg"
        viewBox="0 0 1280 665"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="sketch" x="-4%" y="-4%" width="108%" height="108%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04 0.02" numOctaves="3" seed="14" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        {[0, 160, 320, 500, 680, 860, 1040, 1280].map((x, i) => (
          <line key={`fl${i}`} x1={x} y1={665} x2={640} y2={332}
            stroke="#3772ff" strokeWidth="0.9" strokeOpacity="0.15" filter="url(#sketch)" />
        ))}
        {[0, 160, 320, 500, 860, 1040, 1280].map((x, i) => (
          <line key={`cl${i}`} x1={x} y1={0} x2={640} y2={332}
            stroke="#3772ff" strokeWidth="0.9" strokeOpacity="0.10" filter="url(#sketch)" />
        ))}
        {[600, 530, 460, 410, 375, 355, 342].map((y, i) => (
          <line key={`hl${i}`} x1={0} y1={y} x2={1280} y2={y}
            stroke="#3772ff" strokeWidth="0.7" strokeOpacity="0.09" filter="url(#sketch)" />
        ))}
        <circle cx="640" cy="332" r="4" fill="#3772ff" fillOpacity="0.25" filter="url(#sketch)" />
      </svg>

      {/* ── Text ──────────────────────────────────────────────────────── */}
      <div className="hero-text-block">
        <p className="hero-kicker">Designer &amp; Developer</p>
        <h1 className="hero-headline">
          <em className="headline-serif">Playful</em>
          {" "}<span className="headline-sans">ideas.</span>
          <br />
          <em className="headline-serif headline-muted">Built into</em>
          {" "}<span className="headline-sans">real&nbsp;interfaces.</span>
        </h1>
        <p className="hero-desc">
         I&apos;m <span className="hero-name">Emilio Santamaria</span> — I design and build scalable UI systems<br className="hidden md:block" />
          with a strong focus on interaction, motion, and product thinking.
        </p>
        <div className="cta-row">
          <button className="cta-btn cta-primary">View Work</button>
          <button className="cta-btn cta-ghost">About Me →</button>
        </div>
      </div>

      {/* ── Character stage — anchored at exact viewport center ───────── */}
      <div className="character-stage">
        <div ref={ballRef} className="ball">
          <div className="eye eye-l"><div className="pupil" /></div>
          <div className="eye eye-r"><div className="pupil" /></div>
        </div>
      </div>

      {/* ── Scroll cue ────────────────────────────────────────────────── */}
      <div className="scroll-cue" aria-hidden="true">
        <span>scroll</span>
        <span className="cue-line" />
      </div>

    </section>
  );
}

// ─── addHop ───────────────────────────────────────────────────────────────────
// Adds X, Y, and scale tweens to the master timeline for one hop.
// X: power1.inOut across full duration
// Y: power2.out rise first half, power2.in fall second half
// Scale: linear growth from fromPt.scale to toPt.scale
//
// Arc height is computed from total distance so larger hops feel bigger.
// All durations are long enough to be scrub-safe.
function addHop(
  tl: gsap.core.Timeline,
  target: HTMLElement,
  fromPt: { x: number; y: number; scale: number },
  toPt:   { x: number; y: number; scale: number },
  startTime: number,
  duration: number,
) {
  const half = duration / 2;
  const mid  = startTime + half;

  // Arc peak: midpoint between the two landing Y values, lifted by arcHeight
  const hDist    = Math.abs(toPt.x - fromPt.x);
  const vDist    = Math.abs(toPt.y - fromPt.y);
  const arcHeight = Math.max(60, (hDist + vDist) * 0.28);
  const peakY     = (fromPt.y + toPt.y) / 2 - arcHeight;

  // X
  tl.fromTo(target,
    { x: fromPt.x },
    { x: toPt.x, duration, ease: "power1.inOut" },
    startTime
  );

  // Y — split into rise + fall
  tl.fromTo(target, { y: fromPt.y }, { y: peakY,    duration: half, ease: "power2.out" }, startTime);
  tl.fromTo(target, { y: peakY    }, { y: toPt.y,   duration: half, ease: "power2.in"  }, mid);

  // Scale — grows linearly across the hop (scrub-safe, no snapping)
  tl.fromTo(target,
    { scale: fromPt.scale },
    { scale: toPt.scale, duration, ease: "none" },
    startTime
  );
}