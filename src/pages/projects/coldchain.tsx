"use client";

import { useEffect } from "react";
import { Timeline } from "@/components/ui/timeline";

const PROJECT_TITLE = "Coldchain";
const PROJECT_SUBTITLE = "Web Optimization and Catalog Redesign";
const PROJECT_YEAR = "2026";

const data = [
  {
    title: "Discovery",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          The first step was understanding why the existing website was not
          supporting the company’s growth goals. The main issues were
          performance bottlenecks, inaccessible catalog browsing, and a product
          discovery flow that pushed users into PDFs instead of keeping them
          inside the website. 
        </p>

        <p className="tl-body">
          This meant users could land on the site, find a product category, and
          then immediately lose their navigation context once they entered the
          catalog. That friction made the experience harder to explore and less
          effective as a conversion tool. Similarly, we were able to identify performance issues using tools like 
          <strong className="text-[#3772ff]"> PageSpeed Insights</strong> which revealed valuable information about accesibility and performance. 
        </p>

        <div className="tl-tags">
          <span className="tl-tag">Audit</span>
          <span className="tl-tag">UX Research</span>
          <span className="tl-tag">Performance Review</span>
        </div>

        <div className="tl-grid">
          <figure className="tl-figure">
            <img src="/images/coldchain/discovery3.png" alt="Current website homepage" className="tl-img" />
            <figcaption className="tl-caption">
              Snapshot of the original homepage and its visual hierarchy.
            </figcaption>
          </figure>

          <figure className="tl-figure">
            <img src="/images/coldchain/discovery2.png" alt="Current catalog experience" className="tl-img" />
            <figcaption className="tl-caption">
              Existing catalog experience that relied heavily on PDF navigation.
            </figcaption>
          </figure>

          <figure className="tl-figure">
            <img src="/images/coldchain/discovery4.png" alt="Navigation friction in the old catalog" className="tl-img" />
            <figcaption className="tl-caption">
              Example of how users could lose context while browsing products.
            </figcaption>
          </figure>

          <figure className="tl-figure">
            <img src="/images/coldchain/discovery1.png" alt="Performance audit result" className="tl-img" />
            <figcaption className="tl-caption">
              Performance audit used to identify loading and optimization issues.
            </figcaption>
          </figure>
        </div>
      </div>
    ),
  },
  {
    title: "Strategy",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          The solution was not just a visual redesign. It required rethinking
          how the landing page and catalog worked together as one product
          journey. The goal was to preserve the company’s visual identity while
          rebuilding the experience around speed, accessibility, and product
          discoverability.
        </p>

        <p className="tl-body">
          One of the most important decisions was moving away from WordPress and
          rebuilding the experience in <strong className="text-[#3772ff]">Next.js</strong>. That gave us more control over
          performance, SEO, and how products were structured. We also introduced
          a CMS workflow with <strong className="text-[#3772ff]">Sanity</strong> so the catalog could be updated more
          efficiently in the future.
        </p>

        <p className="tl-body">
          AI was used selectively during this phase to speed up exploration and
          iteration. I used tools like <strong className="text-[#3772ff]">Lovable</strong> to create mockups of how the catalog could look like 
          while also used tools like <strong className="text-[#3772ff]">FigJam</strong> to gather how information on how competitors structured 
          their content and product pages. AI was also used to help compare information architecture options,
         and accelerate implementation troubleshooting during development, using both <strong className="text-[#3772ff]">ChatGPT</strong> and <strong className="text-[#3772ff]">Claude</strong>. The final design and technical
          decisions, however, were always curated and validated manually.
        </p>

        <div className="tl-tags">
          <span className="tl-tag">Wireframing</span>
          <span className="tl-tag">Prototype</span>
          <span className="tl-tag">Content Structure</span>
          <span className="tl-tag">AI-Assisted Iteration</span>
        </div>

        <div className="tl-grid">
          <figure className="tl-figure">
            <img src="/images/coldchain/strategy2.jpeg" alt="Early sketches" className="tl-img" />
            <figcaption className="tl-caption">
              Early sketches used to rethink hierarchy and navigation flow.
            </figcaption>
          </figure>

          <figure className="tl-figure">
            <img src="/images/coldchain/strategy1.png" alt="High fidelity prototype" className="tl-img" />
            <figcaption className="tl-caption">
              High-fidelity direction for the redesigned landing and catalog experience.
            </figcaption>
          </figure>

        <figure className="tl-figure">
            <img src="/images/coldchain/strategy3.png" alt="High fidelity prototype" className="tl-img" />
            <figcaption className="tl-caption">
              Comparison of competitors design approaches.
            </figcaption>
          </figure>


        </div>
      </div>
    ),
  },
  {
    title: "Execution",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          The final implementation focused on rebuilding the website as a faster
          and more navigable product experience. This included optimizing the
          landing page, redesigning the product catalog, and making contact and
          conversion points more visible throughout the journey.
        </p>

        <div className="tl-checklist">
          <span className="tl-check">Redesigned landing page with clearer conversion paths</span>
          <span className="tl-check">Integrated catalog browsing instead of isolated PDF-based discovery</span>
          <span className="tl-check">Improved product search and filtering</span>
          <span className="tl-check">Accessibility and performance improvements across the experience</span>
          <span className="tl-check">CMS setup for easier future product updates</span>
        </div>

        <div className="tl-grid">
          <figure className="tl-figure">
            <img src="/images/coldchain/execution1.png" alt="Homepage redesign" className="tl-img" />
            <figcaption className="tl-caption">
              Updated homepage with cleaner hierarchy and stronger calls to action.
            </figcaption>
          </figure>

          <figure className="tl-figure">
            <img src="/images/coldchain/execution2.png" alt="Homepage redesign section" className="tl-img" />
            <figcaption className="tl-caption">
              Interior section showing improved spacing, typography, and conversion flow.
            </figcaption>
          </figure>

          <figure className="tl-figure">
            <img src="/images/coldchain/execution3.png" alt="Product page or catalog view" className="tl-img" />
            <figcaption className="tl-caption">
              Product browsing experience designed to keep users inside the site.
            </figcaption>
          </figure>

          <figure className="tl-figure">
            <img src="/images/coldchain/execution4.png" alt="Catalog redesign" className="tl-img" />
            <figcaption className="tl-caption">
              Redesigned catalog system with more usable search and filtering.
            </figcaption>
          </figure>
        </div>
      </div>
    ),
  },
  {
    title: "Outcome",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          The project resulted in a more cohesive digital experience: one that
          better supported product discovery, reduced friction between landing
          pages and catalog browsing, and created a stronger foundation for
          future growth through SEO and paid acquisition.
        </p>

        <p className="tl-body">
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

export default function Coldchain() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="tl-page">
      <div className="tl-page-header">
        <a href="/#featured-work" className="tl-back">← Back to work</a>
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
              <p className="tl-meta-value">Performance · Accessibility · Catalog UX</p>
            </div>
          </div>
        </div>
      </section>

      <Timeline data={data} />
    </div>
  );
}