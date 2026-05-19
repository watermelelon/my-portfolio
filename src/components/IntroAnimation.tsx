import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function IntroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  
  const leftFooterRef = useRef<HTMLDivElement>(null);
  const rightFooterRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const ballTextContainerRef = useRef<HTMLDivElement>(null);
  const topInfoRef = useRef<HTMLDivElement>(null);

  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Guayaquil',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(formatter.format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    const ball = ballRef.current;
    if (!ball) return;

    // 1. Initial State
    gsap.set(".intro-text-letter", { opacity: 0, y: 50 });
    gsap.set(".intro-text-sub", { opacity: 0 });
    gsap.set(scrollCueRef.current, { opacity: 0 });
    gsap.set(topInfoRef.current, { opacity: 0 });
    gsap.set(ball, { scale: 0, opacity: 0, borderRadius: "50%" });
    gsap.set(ballTextContainerRef.current, { opacity: 0, scale: 0.8 });

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    circlesRef.current.forEach((circle) => {
      if (!circle) return;
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.max(vw, vh) * (0.8 + Math.random());
      
      gsap.set(circle, {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        scale: Math.random() > 0.8 ? Math.random() * 15 + 5 : Math.random() * 3 + 0.5,
        opacity: 0,
      });
    });

    const master = gsap.timeline();

    let ballX = 0;
    let ballY = 0;
    
    if (ballRef.current && ballRef.current.parentElement) {
      const ballRect = ballRef.current.parentElement.getBoundingClientRect();
      ballX = ballRect.left + ballRect.width / 2 - vw / 2 - 30; // Shift slightly left as requested
      ballY = ballRect.top + ballRect.height / 2 - vh / 2;
    }

    master.to(circlesRef.current, {
      opacity: Math.random() * 0.5 + 0.5,
      duration: 0.1,
      stagger: 0.01,
    })
    .to(circlesRef.current, {
      x: ballX,
      y: ballY,
      scale: 0.1,
      duration: 2.2,
      ease: "power4.in",
      stagger: 0.015,
    }, "<")
    .to(circlesRef.current, {
      opacity: 0,
      duration: 0.1,
    }, "-=0.1");

    master.to(ball, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    });

    master.to(".intro-text-letter", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.04,
      ease: "power3.out",
    }, "-=0.4")
    .to(".intro-text-sub", {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
    }, "-=0.2")
    .to(topInfoRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }, "<")
    .to(scrollCueRef.current, {
      opacity: 0.6,
      duration: 1,
      ease: "power2.out"
    }, "<")
    .to(cursorGlowRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    }, "<");

    // Random Letter Flips
    const flipInterval = setInterval(() => {
      const letters = document.querySelectorAll(".intro-text-letter");
      if (letters.length > 0) {
        const randomIdx = Math.floor(Math.random() * letters.length);
        gsap.to(letters[randomIdx], {
          rotateY: "+=360",
          duration: 0.8,
          ease: "back.out(1.5)",
        });
      }
    }, 2500);

    // 6. ScrollTrigger Logic (Extended Viewport)
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000", // Much longer scroll distance for the sequence
        scrub: 1,
        pin: true,
      }
    });

    // STEP 1: Move ball down and scale up massively (Keep it BLUE)
    scrollTL.fromTo(ball, 
      { scale: 1, borderRadius: "50%", backgroundColor: "#3772ff" }, 
      {
        x: 0, 
        y: vh * 0.4, 
        scale: 40, // Grow massive
        duration: 2, 
        ease: "power2.inOut",
      }, 0
    );

    scrollTL.to(leftFooterRef.current, {
      x: vw / 2 - 150,
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
    }, 0);
    
    scrollTL.to(rightFooterRef.current, {
      x: -(vw / 2 - 150),
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
    }, 0);

    scrollTL.to(scrollCueRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    }, 0);
    
    // STEP 2: Fade in text inside the blue ball
    scrollTL.to(ballTextContainerRef.current, {
      opacity: 1,
      scale: 1,
      y: vh * 0.4,
      duration: 1.2,
      ease: "power2.out",
    }, 0.8); 

    // Add reading time (pause in the timeline)
    scrollTL.to({}, { duration: 1.5 });

    // STEP 3: Fade out the journey text
    scrollTL.to(ballTextContainerRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut",
    });

    // STEP 4: Ball shrinks and morphs into a square on the left
    scrollTL.to(ball, {
      scale: 2.5, // Shrink to a moderate size
      borderRadius: "0%", // Morph into a square (no rounded edges)
      x: -(vw / 2) + (vw * 0.2), // Move to the left side of the screen
      y: vh * 0.4, // Keep vertical position
      duration: 2,
      ease: "power3.inOut"
    });

    // Interactive Marquee Cursor
    const moveGlow = (e: MouseEvent) => {
      if (cursorGlowRef.current) {
        gsap.to(cursorGlowRef.current, {
          x: e.clientX, 
          y: e.clientY,
          duration: 0.15,
          ease: "power2.out",
        });
      }
    };
    
    gsap.set(cursorGlowRef.current, {
      x: vw / 2,
      y: vh / 2,
      opacity: 0,
    });

    window.addEventListener("mousemove", moveGlow);
    return () => {
      window.removeEventListener("mousemove", moveGlow);
      clearInterval(flipInterval);
    };

  }, { scope: containerRef });

  const handleLetterHover = (e: React.MouseEvent<HTMLSpanElement>) => {
    gsap.to(e.currentTarget, {
      rotateY: "+=360",
      duration: 0.8,
      ease: "back.out(1.5)",
    });
  };

  const renderLetters = (word: string, className: string) => {
    return word.split("").map((char, i) => (
      <span
        key={i}
        onMouseEnter={handleLetterHover}
        className={`intro-text-letter ${className} inline-block transition-colors cursor-default relative z-30`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {char}
      </span>
    ));
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen bg-[#080708] flex flex-col items-center justify-center overflow-hidden font-sans text-[#e6e8e6]"
    >
      <style>{`
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.1% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>

      {/* Top Info Section */}
      <div ref={topInfoRef} className="absolute top-8 left-6 md:left-12 flex flex-col gap-1 z-20 text-[#e6e8e6]/70 text-[9px] md:text-xs font-semibold tracking-[0.2em] uppercase">
        <div className="flex gap-1 md:gap-2 items-center flex-wrap">
          <span>QUITO, EC |</span>
          <span>EST (GMT-5) |</span>
          <span>{currentTime || "12:00:00 AM"}</span>
        </div>
      </div>

      {/* Scattered condensing circles container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (circlesRef.current[i] = el)}
            className="absolute w-6 h-6 bg-[#3772ff] rounded-full opacity-0"
          />
        ))}
      </div>

      <div className="relative z-20 flex flex-col items-center text-[13vw] md:text-[14vw] lg:text-[12vw] font-extrabold tracking-normal leading-[0.85] uppercase perspective-[1000px]">
        
        {/* Top Line: Emili[O] */}
        <div className="flex items-center">
          {renderLetters("EMILI", "intro-text-emili relative z-30")}
          
          <div className="relative flex items-center justify-center w-[0.8em] h-[0.8em] ml-2 perspective-none">
            <div 
              ref={ballRef} 
              className="absolute w-full h-full bg-[#3772ff] rounded-full shadow-[0_10px_30px_rgba(55,114,255,0.2)] z-40"
            />
          </div>
        </div>

        {/* Bottom Line: SANTAMARIA */}
        <div className="flex items-center pl-4 md:pl-12 text-[#e6e8e6]">
          {renderLetters("SANTAMARIA", "intro-text-santamaria")}
        </div>

      </div>

      {/* Footer Text */}
      <div className="absolute bottom-6 md:bottom-10 w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-10 text-[10px] md:text-lg font-medium intro-text-sub text-gray-500 gap-2 md:gap-4 z-20 overflow-hidden text-center md:text-left">
        <div ref={leftFooterRef} className="uppercase tracking-widest text-[#3772ff] whitespace-nowrap">Designer & Developer</div>
        <div ref={rightFooterRef} className="whitespace-nowrap">Making playful ideas into real interfaces.</div>
      </div>

      {/* Scroll & Hover Indicator */}
      <div ref={scrollCueRef} className="absolute bottom-8 flex flex-col items-center gap-2 z-20 text-[#e6e8e6]">
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-center leading-relaxed">
          Hover letters to interact <br/> or scroll to explore
        </span>
        <div className="w-[1px] h-[40px] bg-[#e6e8e6]/30 overflow-hidden mt-2">
          <div className="w-full h-full bg-[#3772ff] animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>
      
      {/* Text inside the expanding ball (Ball is BLUE, text is WHITE/BLACK) */}
      <div 
        ref={ballTextContainerRef}
        className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none z-40"
      >
        <div className="text-white/70 text-sm md:text-lg tracking-[0.3em] uppercase mb-6 font-medium">
          Chapter One
        </div>
        
        <div className="text-white font-extrabold text-5xl md:text-8xl tracking-tight uppercase text-center leading-none drop-shadow-lg">
          Welcome to <br /> the Journey
        </div>

        <div className="text-[#080708] bg-white/90 px-6 py-3 rounded-full text-sm md:text-lg mt-8 font-semibold text-center max-w-2xl shadow-xl">
          A showcase of playful ideas transformed into powerful digital interfaces.
        </div>

        <div className="text-white/70 text-sm md:text-lg tracking-[0.3em] uppercase mt-12 font-medium">
          Keep scrolling
        </div>
      </div>

      {/* Interactive Cursor Marquee */}
      <div 
        ref={cursorGlowRef} 
        className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9999]"
      >
        <div className="absolute top-4 left-4 w-32 h-7 bg-white text-[#080708] rounded-none flex items-center overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
          <div className="animate-marquee whitespace-nowrap text-[9px] md:text-[10px] font-extrabold tracking-tight flex items-center gap-1 w-max px-2">
            <span>HELLO</span>
            <span>HOLA</span>
            <span>CIAO</span>
            <span>BONJOUR</span>
            <span>NAMASTE</span>
            <span>HELLO</span>
            <span>HOLA</span>
            <span>CIAO</span>
            <span>BONJOUR</span>
            <span>NAMASTE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
