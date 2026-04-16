"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Timeline } from "@/components/ui/timeline";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_TITLE = "ServiTaxi Automation";
const PROJECT_SUBTITLE = "Real-time WhatsApp Dispatch System";
const PROJECT_YEAR = "2026";

export default function ServiTaxi() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [modalSrc, setModalSrc] = useState<string | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".tl-body, .tl-check, .tl-tag, .tl-img, .tl-caption")
        .forEach((el) => {
          gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          });
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const data = [
    {
      title: "Problem",
      content: (
        <div className="tl-content">
          <p className="tl-body">
            ServiTaxi handled all ride requests through WhatsApp. As demand grew,
            they began receiving <strong className="text-[#3772ff]">too many incoming messages</strong>,
            causing WhatsApp to flag and temporarily block their number.
          </p>

          <p className="tl-body">
            This created a critical issue: <strong className="text-[#3772ff]">lost customer requests</strong>,
            delayed dispatching, and an overwhelmed manual workflow.
          </p>
        </div>
      ),
    },

    {
      title: "Solution",
      content: (
        <div className="tl-content">
          <p className="tl-body">
            We migrated their system to the <strong className="text-[#3772ff]">WhatsApp Business API</strong>
            and built a real-time automation pipeline using <strong className="text-[#3772ff]">n8n</strong>.
          </p>

          <div className="tl-checklist">
            <span className="tl-check">Automated message handling (no manual replies)</span>
            <span className="tl-check">Location capture via button or text</span>
            <span className="tl-check">Live request tracking in Google Sheets</span>
            <span className="tl-check">Instant dispatch updates back to customer</span>
          </div>
        </div>
      ),
    },

    {
      title: "System Design",
      content: (
        <div className="tl-content">
          <p className="tl-body">
            The system was designed as a <strong className="text-[#3772ff]">real-time event pipeline</strong>:
          </p>

          <div className="tl-checklist">
            <span className="tl-check">User sends WhatsApp message → webhook triggered</span>
            <span className="tl-check">n8n processes request + asks for location</span>
            <span className="tl-check">Request stored in Google Sheets</span>
            <span className="tl-check">Dispatcher assigns taxi in sheet</span>
            <span className="tl-check">Automation sends confirmation back instantly</span>
          </div>

          <p className="tl-body">
            Google Sheets was chosen over Airtable to <strong className="text-[#3772ff]">reduce latency</strong>,
            since Airtable polling introduced delays of several minutes.
          </p>
        </div>
      ),
    },

    {
      title: "My Role",
      content: (
        <div className="tl-content">
          <p className="tl-body">
            I led the integration between <strong className="text-[#3772ff]">Meta Developer Platform</strong>,
            the WhatsApp API, and the automation layer.
          </p>

          <div className="tl-checklist">
            <span className="tl-check">Connected business phone to WhatsApp API</span>
            <span className="tl-check">Designed and built the n8n workflows</span>
            <span className="tl-check">Handled production deployment challenges</span>
            <span className="tl-check">Collaborated on debugging + optimization</span>
          </div>
        </div>
      ),
    },

    {
      title: "Impact",
      content: (
        <div className="tl-content">
          <div className="tl-stats">
            <div className="tl-stat">
              <span className="tl-stat-num">0</span>
              <span className="tl-stat-label">Lost requests</span>
            </div>
            <div className="tl-stat">
              <span className="tl-stat-num">⚡</span>
              <span className="tl-stat-label">Real-time dispatching</span>
            </div>
            <div className="tl-stat">
              <span className="tl-stat-num">↓</span>
              <span className="tl-stat-label">Manual work reduced</span>
            </div>
          </div>

          <p className="tl-body">
            The system eliminated missed messages and significantly improved dispatch speed,
            turning a fragile manual workflow into a <strong className="text-[#3772ff]">reliable real-time system</strong>.
          </p>
        </div>
      ),
    },

    {
      title: "AI Usage",
      content: (
        <div className="tl-content">
          <p className="tl-body">
            AI tools like ChatGPT were used to accelerate development, debug workflows,
            and explore automation strategies — helping validate solutions quickly
            while maintaining focus on <strong className="text-[#3772ff]">real-world constraints</strong>.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div ref={sectionRef} className="tl-page">

      {/* HEADER */}
      <div className="tl-page-header">
        <a href="/" className="tl-back">← Work</a>
        <p className="tl-page-eyebrow">{PROJECT_YEAR} · Case Study</p>
        <h1 className="tl-page-title">
          <em className="tl-serif">{PROJECT_TITLE}</em>
        </h1>
        <p className="tl-page-subtitle">{PROJECT_SUBTITLE}</p>
      </div>

      {/* TIMELINE */}
      <Timeline data={data} />

      {/* MODAL */}
      {modalSrc && (
        <div className="tl-modal" onClick={() => setModalSrc(null)}>
          <button className="tl-modal-close">×</button>
          <img src={modalSrc} className="tl-modal-img" />
        </div>
      )}

      {/* FOOTER → NEXT PROJECT */}
      <div className="tl-next">
        <a href="/coldchain" className="tl-next-link">
          <span className="tl-next-label">Next project</span>
          <span className="tl-next-title">Coldchain →</span>
        </a>
      </div>
    </div>
  );
}