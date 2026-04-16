"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Timeline } from "@/components/ui/timeline";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_TITLE = "ServiTaxi Automation";
const PROJECT_SUBTITLE =
  "Real-Time WhatsApp Dispatch Workflow with n8n";
const PROJECT_YEAR = "2026";

const HEADER_ACCENT = "#fdca40";
const INLINE_ACCENT = "#3772ff";

type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

type FigureProps = {
  src: string;
  alt: string;
  caption: string;
  onOpen: (image: LightboxImage) => void;
};

function ImageFigure({ src, alt, caption, onOpen }: FigureProps) {
  return (
    <figure className="tl-figure tl-reveal">
      <button
        type="button"
        className="tl-figure-btn"
        onClick={() => onOpen({ src, alt, caption })}
        aria-label={`Open image: ${alt}`}
      >
        <img src={src} alt={alt} className="tl-img" />
      </button>
      <figcaption className="tl-caption">{caption}</figcaption>
    </figure>
  );
}

export default function ServiTaxiAutomation() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);

  const openLightbox = (image: LightboxImage) => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

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
            ServiTaxi, a client of our startup{" "}
            <strong style={{ color: INLINE_ACCENT }}>Zenda Solution</strong>,
            handled ride requests through a single WhatsApp number. As demand
            increased, incoming messages became too frequent, and WhatsApp began
            flagging the account as spam — creating a serious risk of blocked
            communication and lost customer requests.
          </p>

          <p className="tl-body tl-reveal">
            The business needed a system that could keep using the same familiar
            channel while removing the operational bottleneck behind it. The goal
            was not to push the team into a completely new platform, but to
            build an automation layer that made their existing workflow faster,
            more reliable, and easier to manage in real time.
          </p>

          <div className="tl-tags tl-reveal">
            <span className="tl-tag">Operations Automation</span>
            <span className="tl-tag">WhatsApp API</span>
            <span className="tl-tag">Real-Time Workflow</span>
          </div>

          <div className="tl-grid">
            <ImageFigure
              src="/images/taxi/problem1.jpeg"
              alt="ServiTaxi request flow before automation"
              caption="Recurrent problem the company had with WhatsApp Business."
              onOpen={openLightbox}
            />
          </div>
        </div>
      ),
    },
    {
      title: "System Design",
      content: (
        <div className="tl-content">
          <p className="tl-body tl-reveal">
            We recommended moving the client to the{" "}
            <strong style={{ color: INLINE_ACCENT }}>
              WhatsApp Business API
            </strong>{" "}
            while keeping the same phone number they already used with customers.
            On top of that, we designed an n8n-based automation system that
            could capture incoming requests, guide the user through the first
            steps, and hand off structured dispatch information to the business.
            Here we developed the first sketches of how the system could work.
          </p>

          <div className="tl-checklist tl-reveal">
            <span className="tl-check">
              Incoming messages trigger an automation flow instantly
            </span>
            <span className="tl-check">
              Customers are prompted to share their location by button or text
            </span>
            <span className="tl-check">
              Requests are written automatically into Google Sheets
            </span>
            <span className="tl-check">
              Dispatch updates inside the sheet trigger confirmation messages
              back to the customer
            </span>
          </div>

          <div className="tl-grid">
            <ImageFigure
              src="/images/taxi/system1.jpeg"
              alt="WhatsApp API connection setup"
              caption="Our first sketches of the system design in n8n (needed to be simplified)."
              onOpen={openLightbox}
            />
            <ImageFigure
              src="/images/taxi/system2.png"
              alt="Automation logic overview"
              caption="How the client would receive the structured dispatch info on a table."
              onOpen={openLightbox}
            />
            <ImageFigure
              src="/images/taxi/system3.jpeg"
              alt="WhatsApp customer view"
              caption="What potentially the client would see through WhatsApp when texting Servitaxi."
              onOpen={openLightbox}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Final Solution",
      content: (
        <div className="tl-content">
          <p className="tl-body tl-reveal">
            One of the most important constraints was{" "}
            <strong style={{ color: INLINE_ACCENT }}>latency</strong>. The client
            needed the system to respond in seconds, not minutes. We initially
            considered Airtable, but its polling-based setup introduced delays
            that were too slow for dispatch operations.
          </p>

          <p className="tl-body tl-reveal">
            We ultimately used{" "}
            <strong style={{ color: INLINE_ACCENT }}>Google Sheets</strong> plus
            an App Script-based approach because it allowed for faster, more
            practical updates in the context of a live taxi request system.
          </p>

          <div className="tl-checklist tl-reveal">
            <span className="tl-check">Webhook receives incoming message</span>
            <span className="tl-check">
              n8n validates the request and asks for location
            </span>
            <span className="tl-check">
              Request is marked as pending and logged to Google Sheets
            </span>
            <span className="tl-check">
              Dispatcher updates the sheet to assign a taxi
            </span>
            <span className="tl-check">
              Customer receives status message automatically from that update
            </span>
          </div>

          <div className="tl-grid">
            <ImageFigure
              src="/images/taxi/solution2.png"
              alt="n8n workflow structure"
              caption="n8n workflow structure used to route incoming requests and handle automation states."
              onOpen={openLightbox}
            />
            <ImageFigure
              src="/images/taxi/solution1.png"
              alt="Google Sheets dispatch table"
              caption="Live dispatch table used by the client to track and assign rides."
              onOpen={openLightbox}
            />
            <ImageFigure
              src="/images/taxi/solution3.jpeg"
              alt="Final n8n system"
              caption="Final and simplified version of the system on n8n."
              onOpen={openLightbox}
            />
          </div>
        </div>
      ),
    },
    {
      title: "My Role",
      content: (
        <div className="tl-content">
          <p className="tl-body tl-reveal">
            I took the lead on the parts of the system that connected business
            operations with production-ready automation. That included
            integrating the phone number inside the{" "}
            <strong style={{ color: INLINE_ACCENT }}>
              Meta Developer Platform
            </strong>{" "}
            and building the foundation of the n8n workflow that processed
            customer requests.
          </p>

          <div className="tl-checklist tl-reveal">
            <span className="tl-check">
              Connected the client number to the Meta/WhatsApp ecosystem
            </span>
            <span className="tl-check">
              Built the base n8n automation logic
            </span>
            <span className="tl-check">
              Worked through production deployment constraints
            </span>
            <span className="tl-check">
              Collaborated with teammates on debugging and reliability
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "AI in the Process",
      content: (
        <div className="tl-content">
          <p className="tl-body tl-reveal">
            AI support tools such as{" "}
            <strong style={{ color: INLINE_ACCENT }}>ChatGPT</strong> were used
            mostly for the implementation of the WhatsApp API, considering the
            documentation was not very clear and the process had many steps that
            were not well explained or hard to navigate in the Meta Developers Platform.
          </p>

          <div className="tl-tags tl-reveal">
            <span className="tl-tag">AI-Assisted Debugging</span>
            <span className="tl-tag">Workflow Iteration</span>
            <span className="tl-tag">Implementation Support</span>
          </div>
        </div>
      ),
    },
    {
      title: "Outcome",
      content: (
        <div className="tl-content">
          <p className="tl-body tl-reveal">
            The system reduced manual handling, improved dispatch speed, and
            helped ensure that incoming requests were no longer lost or buried
            under message volume. Most importantly, it solved the client's real
            operational problem: maintaining a familiar communication channel
            while making it scalable enough to support demand.
          </p>

          <div className="tl-stats">
            <div className="tl-stat">
              <span className="tl-stat-num">Real-Time</span>
              <span className="tl-stat-label">Faster dispatch response</span>
            </div>
            <div className="tl-stat">
              <span className="tl-stat-num">Less Manual</span>
              <span className="tl-stat-label">Reduced operator workload</span>
            </div>
            <div className="tl-stat">
              <span className="tl-stat-num">More Reliable</span>
              <span className="tl-stat-label">Fewer missed ride requests</span>
            </div>
          </div>

          <div className="tl-grid">
            <ImageFigure
              src="/images/taxi/results1.png"
              alt="ServiTaxi automation metrics"
              caption="Metrics of all the messages received and handled by our system."
              onOpen={openLightbox}
            />
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
              Designing a real-time WhatsApp automation system for taxi request
              handling and dispatch coordination.
            </h2>

            <p className="tl-overview-copy">
              This project was built for{" "}
              <strong style={{ color: INLINE_ACCENT }}>ServiTaxi</strong>, a
              client of our startup{" "}
              <strong style={{ color: INLINE_ACCENT }}>Zenda Solution</strong>.
              The challenge was to prevent message overload from disrupting taxi
              operations while preserving the communication channel customers
              already used. The result was a production-oriented automation
              workflow that combined WhatsApp API, n8n, and Google Sheets into a
              fast and practical dispatch system.
            </p>
          </div>

          <div className="tl-overview-meta">
            <div className="tl-meta-block">
              <p className="tl-meta-label" style={{ color: HEADER_ACCENT }}>
                Client
              </p>
              <p className="tl-meta-value">ServiTaxi via Zenda Solution</p>
            </div>

            <div className="tl-meta-block">
              <p className="tl-meta-label" style={{ color: HEADER_ACCENT }}>
                Role
              </p>
              <p className="tl-meta-value">
                Automation Design · API Integration · n8n Workflow Lead
              </p>
            </div>

            <div className="tl-meta-block">
              <p className="tl-meta-label" style={{ color: HEADER_ACCENT }}>
                Tools
              </p>
              <p className="tl-meta-value">
                n8n · WhatsApp API · Meta Developer Platform · Google Sheets
              </p>
            </div>

            <div className="tl-meta-block">
              <p className="tl-meta-label" style={{ color: HEADER_ACCENT }}>
                Focus
              </p>
              <p className="tl-meta-value">
                Automation Systems · Latency Reduction · Dispatch Workflow
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
            <em className="tl-serif">Coldchain</em> Case Study
          </h2>

          <p className="tl-next-copy">
            A redesign and optimization project focused on product discovery,
            catalog UX, and website performance.
          </p>

          <a href="./coldchain" className="tl-next-link">
            View next project →
          </a>
        </div>
      </footer>

      {lightboxImage && (
        <div
          className="tl-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.alt}
          onClick={closeLightbox}
        >
          <div
            className="tl-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="tl-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close image preview"
            >
              ×
            </button>

            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="tl-lightbox-img"
            />

            {lightboxImage.caption && (
              <p className="tl-lightbox-caption">{lightboxImage.caption}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}