"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef  = useRef<HTMLElement>(null);
  const eyeLRef     = useRef<HTMLDivElement>(null);
  const eyeRRef     = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [form, setForm]     = useState({ name: "", email: "", message: "" });

  // ── Scroll-driven text animations ─────────────────────────────────────────
  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Beat 1 — "Thanks for visiting." draws its underline in
    gsap.from(".ct-underline", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".ct-beat1",
        start: "top 75%",
        once: true,
      },
    });

    gsap.from(".ct-beat1-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".ct-beat1", start: "top 80%", once: true },
    });

    gsap.from(".ct-beat1-sub", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: { trigger: ".ct-beat1", start: "top 80%", once: true },
    });

    // Beat 2 — availability block slides in from right
    gsap.from(".ct-avail-label", {
      x: 60,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: ".ct-beat2", start: "top 75%", once: true },
    });

    gsap.from(".ct-avail-item", {
      x: 80,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".ct-beat2", start: "top 72%", once: true },
    });

    gsap.from(".ct-avail-copy", {
      x: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: { trigger: ".ct-beat2", start: "top 70%", once: true },
    });

    // Beat 3 — contact panel fades up
    gsap.from(".ct-contact-col", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: ".ct-beat3", start: "top 78%", once: true },
    });

    // Ball peeks up from the bottom
    gsap.from(".ct-ball-wrap", {
      y: 280,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: ".ct-ball-wrap", start: "top bottom", once: true },
    });

  }, { scope: sectionRef });

  // ── Wandering eyes ─────────────────────────────────────────────────────────
  useEffect(() => {
    const wander = () => {
      const MAX_X = 8;
      const MAX_Y = 4;
      const tx = gsap.utils.random(-MAX_X, MAX_X);
      const ty = gsap.utils.random(-MAX_Y, MAX_Y);
      gsap.to([eyeLRef.current, eyeRRef.current], {
        x: tx, y: ty,
        duration: gsap.utils.random(0.6, 1.0),
        ease: "power2.inOut",
      });
    };

    const id = setInterval(wander, gsap.utils.random(1800, 3000));
    wander(); // fire immediately
    return () => clearInterval(id);
  }, []);

  // ── Form ───────────────────────────────────────────────────────────────────
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your actual form endpoint (Resend, Formspree, etc.)
    try {
      await new Promise((r) => setTimeout(r, 1200)); // simulate send
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section ref={sectionRef} className="ct-section">

      {/* ══════════════════════════════════════════════════════════════════
          BEAT 1 — Thanks for visiting
      ══════════════════════════════════════════════════════════════════ */}
      <div className="ct-beat1">
        <div className="ct-beat1-inner">
          <p className="ct-eyebrow">That's a wrap</p>

          <h2 className="ct-beat1-title">
            <em className="ct-serif">Thanks for</em>
            <br />
            <span className="ct-sans">visiting.</span>
            {/* Animated underline under "visiting." */}
            <span className="ct-underline" aria-hidden="true" />
          </h2>

          <p className="ct-beat1-sub">
            You made it to the end — that already tells me something good.
          </p>
        </div>

        {/* Scroll nudge */}
        <div className="ct-scroll-nudge" aria-hidden="true">
          <span>keep scrolling</span>
          <span className="ct-nudge-line" />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          BEAT 2 — Availability / what I'm open to
      ══════════════════════════════════════════════════════════════════ */}
      <div className="ct-beat2">
        {/* Left: decorative big number */}
        <div className="ct-beat2-left" aria-hidden="true">
          <span className="ct-beat2-deco">02</span>
        </div>

        {/* Right: content */}
        <div className="ct-beat2-right">
          <p className="ct-avail-label">Currently open to</p>

          <div className="ct-avail-list">
            {[
              { label: "Full-time roles",          accent: "#3772ff" },
              { label: "Freelance projects",        accent: "#fdca40" },
              { label: "Research collaborations",   accent: "#df2935" },
              { label: "Side-project partnerships", accent: "#3772ff" },
            ].map((item) => (
              <div key={item.label} className="ct-avail-item">
                <span className="ct-avail-dot" style={{ background: item.accent }} />
                <span className="ct-avail-text">{item.label}</span>
              </div>
            ))}
          </div>

          <p className="ct-avail-copy">
            I care about building things that are fast, accessible, and feel
            alive. If that sounds like what you need — let's talk.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          BEAT 3 — Contact panel
      ══════════════════════════════════════════════════════════════════ */}
      <div className="ct-beat3">
        <p className="ct-beat3-eyebrow">Get in touch</p>

        <div className="ct-contact-grid">

          {/* ── Left col: socials + resume ──────────────────────────── */}
          <div className="ct-contact-col ct-contact-left">

            <div className="ct-contact-info">
              <p className="ct-info-label">Email</p>
              <a href="mailto:emiliodaniel02@hotmail.com" className="ct-info-val ct-link">
                emiliodaniel02@hotmail.com
              </a>
            </div>

            <div className="ct-contact-info">
              <p className="ct-info-label">WhatsApp</p>
              <a href="https://wa.me/18073571844" className="ct-info-val ct-link">
                +1 (807) 357-1844
              </a>
            </div>

            <div className="ct-contact-info">
              <p className="ct-info-label">Location</p>
              <p className="ct-info-val">Thunder Bay, ON · Quito, Ecuador</p>
            </div>

            {/* Socials */}
            <div className="ct-socials">
              {[
                { label: "LinkedIn",  href: "https://linkedin.com/in/emilio" },
                { label: "GitHub",    href: "https://github.com/emilio" },
                { label: "Dribbble",  href: "https://dribbble.com/emilio" },
                { label: "Twitter/X", href: "https://x.com/emilio" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="ct-social-link">
                  {s.label}
                  <span className="ct-social-arrow">↗</span>
                </a>
              ))}
            </div>

            {/* Resume */}
            <a href="/resume.pdf" target="_blank" className="ct-resume-btn">
              Download Résumé
            </a>

          </div>

          {/* ── Right col: form ──────────────────────────────────────── */}
          <div className="ct-contact-col ct-contact-right">
            <h3 className="ct-form-heading">
              <em className="ct-serif">Let's build</em> something great.
            </h3>

            <form onSubmit={handleSubmit} className="ct-form">
              <div className="ct-field">
                <label className="ct-label">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="ct-input"
                  placeholder="Your name"
                />
              </div>

              <div className="ct-field">
                <label className="ct-label">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="ct-input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="ct-field">
                <label className="ct-label">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="ct-input ct-textarea"
                  placeholder="Tell me about your project…"
                />
              </div>

              <button
                type="submit"
                className="ct-submit"
                disabled={status === "sending" || status === "sent"}
              >
                {status === "idle"    && "Send message →"}
                {status === "sending" && "Sending…"}
                {status === "sent"    && "Message sent ✓"}
                {status === "error"   && "Error — try again"}
              </button>

              {status === "error" && (
                <p className="ct-form-error">Something went wrong. Email me directly.</p>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          PEEKING BALL CHARACTER
          Anchored at the bottom of the section, only top ~25% visible.
          Eyes wander independently.
      ══════════════════════════════════════════════════════════════════ */}
      <div className="ct-ball-wrap" aria-hidden="true">
        <div className="ct-ball">
          <div className="ct-ball-eye ct-ball-eye--l">
            <div ref={eyeLRef} className="ct-ball-pupil" />
          </div>
          <div className="ct-ball-eye ct-ball-eye--r">
            <div ref={eyeRRef} className="ct-ball-pupil" />
          </div>
        </div>
      </div>

      {/* Footer line */}
      <div className="ct-footer">
        <p className="ct-footer-copy">
          Emilio © {new Date().getFullYear()} · Designed &amp; built with obsessive attention to detail.
        </p>
      </div>

    </section>
  );
}