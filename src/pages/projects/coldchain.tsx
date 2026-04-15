"use client";
import { Timeline } from "@/components/ui/timeline";

// ─── Replace these with your actual project data ──────────────────────────────
// This file shows the pattern — duplicate for each project page.
const PROJECT_TITLE    = "Coldchain";
const PROJECT_SUBTITLE = "Web Optimization and Catalog Redesign";
const PROJECT_YEAR     = "2026";

const data = [
  {
    title: "Discovery",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          The first step was to understand the current state of their website and identify areas of improvement. 
          Some of the key findings was that their website had lots of <strong className="text-[#3772ff]"> painful content</strong>, like large image assets that were not loading properly, 
          and their page was <strong className="text-[#3772ff]"> not accessible</strong> as their catalog consisted of PDF files, which made it difficult for users to navigate back to the 
          main website after checking a product.  
        </p>
        <div className="tl-tags">
          <span className="tl-tag">User Research</span>
          <span className="tl-tag">Speed Analaysis</span>
        </div>
        <div className="tl-grid">
          <img src="/images/coldchain/discovery3.png" alt="Current Website" className="tl-img" />
          <img src="/images/coldchain/discovery2.png" alt="Current Catalog" className="tl-img" />
          <img src="/images/coldchain/discovery4.png" alt="Current Catalog" className="tl-img" />
          <img src="/images/coldchain/discovery1.png" alt="Google Speed Test" className="tl-img" />
        </div>
      </div>
    ),
  },
  {
    title: "Strategy",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          In order to solve this issues, the approach was to <strong className="text-[#3772ff]"> remake both the landing page and the product catalog</strong>, 
          as these where the main points of friction for users. Our client mentioned he wanted to keep the style of the landing page, so we tried
          to not modify that as much but still optimize for performance and SEO. Similarly one of the main decisions made at this point was to <strong className="text-[#3772ff]">switch the hosting of the
          website </strong>  from Wordpress to a Next.js project  as this will allow us to have more control over the performance. 
        </p>
        <div className="tl-tags">
          <span className="tl-tag">Low Fidelity Wireframe</span>
          <span className="tl-tag">High Fidelity Prototype</span>
        </div>
        <div className="tl-grid">
          <img src="/images/coldchain/strategy2.jpeg" alt="Sketch made on paper" className="tl-img" />
          <img src="/images/coldchain/strategy1.png" alt="High Fidelity Prototype" className="tl-img" />
        </div>
      </div>
    ),
  },
  {
    title: "Execution",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          As mentioned, in order to build the new website, we decided to use Next.js, as well as making some changes 
          in the landing page and redesigning the product catalog. Similarly we deciced to use a CMS called 'Sanity' 
          to make it easier for the client to update the catalog in the future. Some of the key features implemented were:
        </p>
        <div className="tl-checklist">
          <span className="tl-check">More access points  to contact one of Coldchain's agents</span>
          <span className="tl-check">Call to Action Section and Client Conversion Form</span>
          <span className="tl-check">Product Catalog with improved search and filtering</span>
          <span className="tl-check">Accessibility Improvements</span>
        </div>
        <div className="tl-grid">
           <img src="/images/coldchain/execution1.png" alt="Homepage Design" className="tl-img" />
          <img src="/images/coldchain/execution2.png" alt="Homepage Design 2" className="tl-img" />
            <img src="/images/coldchain/execution3.png" alt="Homepage Design 3" className="tl-img" />
          <img src="/images/coldchain/execution4.png" alt="Catalog Design" className="tl-img" />
        </div>
      </div>
    ),
  },
  {
    title: "Impact",
    content: (
      <div className="tl-content">
        <p className="tl-body">
          After the new website was launched, we saw a significant increase in traffic and sales. 
          The new design and improved performance made it easier for users to navigate the website and find the products they were looking for.
        </p>
        <div className="tl-stats">
          <div className="tl-stat">
            <span className="tl-stat-num">87%</span>
            <span className="tl-stat-label">Component re-use rate</span>
          </div>
          <div className="tl-stat">
            <span className="tl-stat-num">−78%</span>
            <span className="tl-stat-label">Onboarding time</span>
          </div>
          <div className="tl-stat">
            <span className="tl-stat-num">400k+</span>
            <span className="tl-stat-label">End users</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Coldchain() {
  return (
    <div className="tl-page">

      {/* HEADER */}
      <div className="tl-page-header">
        <a href="/" className="tl-back">← Work</a>
        <p className="tl-page-eyebrow">{PROJECT_YEAR} · Case Study</p>
        <h1 className="tl-page-title">
          <em className="tl-serif">{PROJECT_TITLE}</em>
        </h1>
        <p className="tl-page-subtitle">{PROJECT_SUBTITLE}</p>
      </div>

      {/* DESCRIPTION SECTION (SEPARATED VISUALLY) */}
      <section className="w-full px-2 md:px-12 lg:px-20 pt-16 pb-10 bg-gray-300">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-xl md:text-4xl font-medium text-black dark:text-white mb-6">
            Project Overview
          </h2>

          <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed max-w-none">
            Coldchain is a company specialized on selling <strong>agricultural inputs and products online</strong>. They realized their website was not attracting enough costumers, 
            and their main goal was to optimize the website to increase traffic and sales. To achieve so they wanted to use Google Ads, but their website was not optimized for it. 
            I was hired to optimize the website and make it ready for Google Ads, as well as redesigning the product catalog to make it more user-friendly and visually appealing.
          </p>

        </div>
      </section>

      {/* TIMELINE */}
      <Timeline data={data} />

    </div>
  );
}