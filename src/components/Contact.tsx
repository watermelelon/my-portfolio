"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyeLRef = useRef<HTMLDivElement>(null);
  const eyeRRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const beat1 = section.querySelector(".ct-beat1");
    const beat2 = section.querySelector(".ct-beat2");
    const beat3 = section.querySelector(".ct-beat3");
    const ball = section.querySelector(".ct-ball-wrap");

    if (beat1) {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: beat1,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      tl1
        .from(".ct-beat1-title", {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          ".ct-underline",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .from(
          ".ct-beat1-sub",
          {
            y: 28,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.45"
        );
    }

    if (beat2) {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: beat2,
          start: "top 76%",
          toggleActions: "play none none reverse",
        },
      });

      tl2
        .from(".ct-beat2-deco", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".ct-avail-label",
          {
            x: 50,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".ct-avail-item",
          {
            x: 70,
            opacity: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".ct-avail-copy",
          {
            x: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }

    if (beat3) {
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: beat3,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl3
        .from(".ct-beat3-eyebrow", {
          y: 24,
          opacity: 0,
          duration: 0.65,
          ease: "power2.out",
        })
        .from(
          ".ct-contact-col",
          {
            y: 50,
            opacity: 0,
            duration: 0.85,
            stagger: 0.14,
            ease: "power3.out",
          },
          "-=0.2"
        );
    }

    if (ball) {
      gsap.from(ball, {
        y: 240,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, { scope: sectionRef });

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const wander = () => {
      if (cancelled) return;

      const MAX_X = 8;
      const MAX_Y = 4;

      const tx = gsap.utils.random(-MAX_X, MAX_X);
      const ty = gsap.utils.random(-MAX_Y, MAX_Y);

      gsap.to([eyeLRef.current, eyeRRef.current], {
        x: tx,
        y: ty,
        duration: gsap.utils.random(0.6, 1),
        ease: "power2.inOut",
      });

      timeoutId = setTimeout(wander, gsap.utils.random(1700, 3200));
    };

    wander();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Replace this block with your real backend / Formspree / Resend request
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setStatus("sent");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section  id="contact" ref={sectionRef} className="ct-section">
      <div className="ct-beat1">
        <div className="ct-beat1-inner">
          <p className="ct-eyebrow">That&apos;s a wrap</p>

          <h2 className="ct-beat1-title">
            <em className="ct-serif">Thanks for</em>
            <br />
            <span className="ct-sans">visiting.</span>
            <span className="ct-underline" aria-hidden="true" />
          </h2>

          <p className="ct-beat1-sub">
            You made it to the end — that already tells me something good!
          </p>
        </div>
      </div>

      <div className="ct-beat2">
        <div className="ct-beat2-left" aria-hidden="true">
          <span className="ct-beat2-deco">Let's Talk</span>
        </div>

        <div className="ct-beat2-right">
          <p className="ct-avail-label">Currently open to</p>

          <div className="ct-avail-list">
            {[
              { label: "Full-time roles", accent: "#3772ff" },
              { label: "Freelance projects", accent: "#fdca40" },
              { label: "Research collaborations", accent: "#df2935" },
              { label: "Side-project partnerships", accent: "#3772ff" },
            ].map((item) => (
              <div key={item.label} className="ct-avail-item">
                <span
                  className="ct-avail-dot"
                  style={{ background: item.accent }}
                />
                <span className="ct-avail-text">{item.label}</span>
              </div>
            ))}
          </div>

          <p className="ct-avail-copy">
            I care about building things that are creative, accessible, and feel
            alive. If that sounds like what you need, let&apos;s talk.
          </p>
        </div>
      </div>

      <div className="ct-beat3">
        <p className="ct-beat3-eyebrow">Get in touch</p>

        <div className="ct-contact-grid">
          <div className="ct-contact-col ct-contact-left">
            <div className="ct-contact-info">
              <p className="ct-info-label">Email</p>
              <a
                href="mailto:emiliodaniel02@hotmail.com"
                className="ct-info-val ct-link"
              >
                emiliodaniel02@hotmail.com
              </a>
            </div>

            <div className="ct-contact-info">
              <p className="ct-info-label">WhatsApp</p>
              <a
                href="https://wa.me/18073571844"
                target="_blank"
                rel="noreferrer"
                className="ct-info-val ct-link"
              >
                +1 (807) 357-1844
              </a>
            </div>

            <div className="ct-contact-info">
              <p className="ct-info-label">Location</p>
              <p className="ct-info-val">Thunder Bay, ON / Quito, Ecuador</p>
            </div>

            <div className="ct-socials">
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/esantama" },
                { label: "GitHub", href: "https://github.com/watermelelon" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="ct-social-link"
                >
                  {s.label}
                  <span className="ct-social-arrow">↗</span>
                </a>
              ))}
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="ct-resume-btn"
            >
              Download Résumé
            </a>
          </div>

          <div className="ct-contact-col ct-contact-right">
            <h3 className="ct-form-heading">
              <em className="ct-serif">Let&apos;s build</em> something great.
            </h3>

            <form onSubmit={handleSubmit} className="ct-form">
              <div className="ct-field">
                <label className="ct-label" htmlFor="ct-name">
                  Name
                </label>
                <input
                  id="ct-name"
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
                <label className="ct-label" htmlFor="ct-email">
                  Email
                </label>
                <input
                  id="ct-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="ct-input"
                  placeholder="emiliodaniel02@hotmail.com"
                />
              </div>

              <div className="ct-field">
                <label className="ct-label" htmlFor="ct-message">
                  Message
                </label>
                <textarea
                  id="ct-message"
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
                {status === "idle" && "Send message →"}
                {status === "sending" && "Sending…"}
                {status === "sent" && "Message sent ✓"}
                {status === "error" && "Error — try again"}
              </button>

              {status === "error" && (
                <p className="ct-form-error">
                  Something went wrong. Email me directly instead.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

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

      <div className="ct-footer">
        <p className="ct-footer-copy">
          Emilio © {new Date().getFullYear()} · Designed &amp; built with
          obsessive attention to detail.
        </p>
      </div>
    </section>
  );
}