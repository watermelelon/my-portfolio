"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Timeline } from "@/components/ui/timeline";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_TITLE = "Coldchain";
const PROJECT_SUBTITLE = "Web Optimization and Catalog Redesign";
const PROJECT_YEAR = "2026";

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

export default function Coldchain() {
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
      gsap.set(".tl-overview-main > *", { opacity: 0, y: 22 });
      gsap.set(".tl-meta-block", { opacity: 0, y: 18 });
      gsap.set(".tl-reveal", { opacity: 0, y: 28 });
      gsap.set(".tl-stat", { opacity: 0, y: 18 });
      gsap.set(".tl-next-project", { opacity: 0, y: 26 });

      const headerTl = gsap.timeline({ defaults: { ease: "power3.out" } });

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
          "-=0.38"
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

      const revealEls = gsap.utils.toArray<HTMLElement>(".tl-reveal");
      revealEls.forEach((el) => {
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
      title: "Discovery",
      content: (
        <div className="tl-content">
          <p className="tl-body tl-reveal">
            The first step was understanding why the existing website was not
            supporting the company’s growth goals. The main issues were
            performance bottlenecks, inaccessible catalog browsing, and a product
            discovery flow that pushed users into PDFs instead of keeping them
            inside the website.
          </p>

          <p className="tl-body tl-reveal">
            This meant users could land on the site, find a product category, and
            then immediately lose their navigation context once they entered the
            catalog. That friction made the experience harder to explore and less
            effective as a conversion tool. Similarly, we were able to identify
            performance issues using tools like{" "}
            <strong className="text-[#3772ff]">PageSpeed Insights</strong> which
            revealed valuable information about accessibility and performance.
          </p>

          <div className="tl-tags tl-reveal">
            <span className="tl-tag">Audit</span>
            <span className="tl-tag">UX Research</span>
            <span className="tl-tag">Performance Review</span>
          </div>

          <div className="tl-grid">
            <ImageFigure
              src="/images/coldchain/discovery3.png"
              alt="Current website homepage"
              caption="Snapshot of the original homepage and its visual hierarchy."
              onOpen={openLightbox}
            />
            <ImageFigure
              src="/images/coldchain/discovery2.png"
              alt="Current catalog experience"
              caption="Existing catalog experience that relied heavily on PDF navigation."
              onOpen={openLightbox}
            />
            <ImageFigure
              src="/images/coldchain/discovery4.png"
              alt="Navigation friction in the old catalog"
              caption="Example of how users could lose context while browsing products."
              onOpen={openLightbox}
            />
            <ImageFigure
              src="/images/coldchain/discovery1.png"
              alt="Performance audit result"
              caption="Performance audit used to identify loading and optimization issues."
              onOpen={openLightbox}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Strategy",
      content: (
        <div className="tl-content">
          <p className="tl-body tl-reveal">
            The solution was not just a visual redesign. It required rethinking
            how the landing page and catalog worked together as one product
            journey. The goal was to preserve the company’s visual identity while
            rebuilding the experience around speed, accessibility, and product
            discoverability.
          </p>

          <p className="tl-body tl-reveal">
            One of the most important decisions was moving away from WordPress and
            rebuilding the experience in{" "}
            <strong className="text-[#3772ff]">Next.js</strong>. That gave us
            more control over performance, SEO, and how products were structured.
            We also introduced a CMS workflow with{" "}
            <strong className="text-[#3772ff]">Sanity</strong> so the catalog
            could be updated more efficiently in the future.
          </p>

          <p className="tl-body tl-reveal">
            AI was used selectively during this phase to speed up exploration and
            iteration. I used tools like{" "}
            <strong className="text-[#3772ff]">Lovable</strong> to create mockups
            of how the catalog could look, while also using tools like{" "}
            <strong className="text-[#3772ff]">FigJam</strong> to compare how
            competitors structured their content and product pages. AI was also
            useful for testing information architecture options and accelerating
            implementation troubleshooting during development using both{" "}
            <strong className="text-[#3772ff]">ChatGPT</strong> and{" "}
            <strong className="text-[#3772ff]">Claude</strong>. Final design and
            technical decisions, however, were always curated and validated
            manually.
          </p>

          <div className="tl-tags tl-reveal">
            <span className="tl-tag">Wireframing</span>
            <span className="tl-tag">Prototype</span>
            <span className="tl-tag">Content Structure</span>
            <span className="tl-tag">AI-Assisted Iteration</span>
          </div>

          <div className="tl-grid">
            <ImageFigure
              src="/images/coldchain/strategy2.jpeg"
              alt="Early sketches"
              caption="Early sketches used to rethink hierarchy and navigation flow."
              onOpen={openLightbox}
            />
            <ImageFigure
              src="/images/coldchain/strategy1.png"
              alt="High fidelity prototype"
              caption="High-fidelity direction for the redesigned landing and catalog experience."
              onOpen={openLightbox}
            />
            <ImageFigure
              src="/images/coldchain/strategy3.png"
              alt="Competitor comparison"
              caption="Comparison of competitor design approaches."
              onOpen={openLightbox}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Execution",
      content: (
        <div className="tl-content">
          <p className="tl-body tl-reveal">
            The final implementation focused on rebuilding the website as a faster
            and more navigable product experience. This included optimizing the
            landing page, redesigning the product catalog, and making contact and
            conversion points more visible throughout the journey.
          </p>

          <div className="tl-checklist tl-reveal">
            <span className="tl-check">
              Redesigned landing page with clearer conversion paths
            </span>
            <span className="tl-check">
              Integrated catalog browsing instead of isolated PDF-based discovery
            </span>
            <span className="tl-check">
              Improved product search and filtering
            </span>
            <span className="tl-check">
              Accessibility and performance improvements across the experience
            </span>
            <span className="tl-check">
              CMS setup for easier future product updates
            </span>
          </div>

          <div className="tl-grid">
            <ImageFigure
              src="/images/coldchain/execution1.png"
              alt="Homepage redesign"
              caption="Updated homepage with cleaner hierarchy and stronger calls to action."
              onOpen={openLightbox}
            />
            <ImageFigure
              src="/images/coldchain/execution2.png"
              alt="Homepage redesign section"
              caption="Interior section showing improved spacing, typography, and conversion flow."
              onOpen={openLightbox}
            />
            <ImageFigure
              src="/images/coldchain/execution3.png"
              alt="Product page or catalog view"
              caption="Product browsing experience designed to keep users inside the site."
              onOpen={openLightbox}
            />
            <ImageFigure
              src="/images/coldchain/execution4.png"
              alt="Catalog redesign"
              caption="Redesigned catalog system with more usable search and filtering."
              onOpen={openLightbox}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Outcome",
      content: (
        <div className="tl-content">
          <p className="tl-body tl-reveal">
            The project resulted in a more cohesive digital experience: one that
            better supported product discovery, reduced friction between landing
            pages and catalog browsing, and created a stronger foundation for
            future growth through SEO and paid acquisition.
          </p>

          <p className="tl-body tl-reveal">
            Beyond the redesign itself, the project also created a more scalable
            workflow for content management, which made the site easier to evolve
            over time instead of treating it as a static marketing asset.
          </p>

          <div className="tl-stats">
            <div className="tl-stat">
              <span className="tl-stat-num">Next.js</span>
              <span className="tl-stat-label">Rebuilt for performance</span>
            </div>
            <div className="tl-stat">
              <span className="tl-stat-num">Sanity</span>
              <span className="tl-stat-label">CMS for catalog updates</span>
            </div>
            <div className="tl-stat">
              <span className="tl-stat-num">UX + Dev</span>
              <span className="tl-stat-label">End-to-end contribution</span>
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
              Rebuilding a slow, fragmented website into a faster product
              discovery experience.
            </h2>
            <p className="tl-overview-copy">
              Coldchain is a company focused on agricultural inputs and related
              products. Their existing website was not effectively supporting
              traffic growth or product exploration, especially for users coming
              from paid acquisition. My role was to improve the experience from
              both a UX and implementation perspective by optimizing the site,
              restructuring the catalog, and making the platform more ready for
              SEO and Google Ads.
            </p>
          </div>

          <div className="tl-overview-meta">
            <div className="tl-meta-block">
              <p className="tl-meta-label">Role</p>
              <p className="tl-meta-value">UX Design · Frontend Development</p>
            </div>

            <div className="tl-meta-block">
              <p className="tl-meta-label">Stack</p>
              <p className="tl-meta-value">Next.js · Sanity · GSAP</p>
            </div>

            <div className="tl-meta-block">
              <p className="tl-meta-label">Focus</p>
              <p className="tl-meta-value">
                Performance · Accessibility · Catalog UX
              </p>
            </div>
          </div>
        </div>
      </section>

      <Timeline data={data} />

      <footer className="tl-next-project">
        <div className="tl-next-inner">
          <p className="tl-next-label">Next project</p>
          <h2 className="tl-next-title">
            <em className="tl-serif">GSAP</em> Interaction Study
          </h2>
          <p className="tl-next-copy">
            A motion-focused case study exploring scroll choreography,
            interaction rhythm, and interface storytelling.
          </p>
          <a href="/projects/mojito" className="tl-next-link">
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