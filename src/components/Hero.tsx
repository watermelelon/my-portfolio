import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import gsap from "gsap";
import ProfileCard from "./ui/profilecard";
import Antigravity from "./ui/Antigravity";

const Hero = () => {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      // Left side stagger animation
      tl.from(leftRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });

      // Card entrance
      tl.from(
        cardRef.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.95,
          duration: 1
        },
        "-=0.6"
      );

      // Glow fade
      tl.from(
        glowRef.current,
        {
          opacity: 0,
          duration: 1
        },
        "-=1"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen bg-[#0B0B0F] flex items-center px-8 md:px-24 overflow-hidden"
    >
      {/* Animated Background */}
     

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-16">

        {/* LEFT SIDE */}
        <div ref={leftRef} className="space-y-8">
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.9] tracking-tight text-white">
            I'm Emilio
            <br />
            Santamaria
          </h1>

          <div className="space-y-3">
            <p className="text-xl md:text-2xl text-gray-300">
              Creative Technologist
            </p>
            <p className="text-lg text-gray-500 max-w-xl">
              I build immersive digital systems that explore perception,
              interaction, and storytelling through technology.
            </p>
          </div>

          <div className="flex space-x-6 pt-6">
            <a
              href="https://github.com/watermelelon"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform duration-300 hover:scale-110"
            >
              <Github size={28} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://linkedin.com/in/esantama"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform duration-300 hover:scale-110"
            >
              <Linkedin size={28} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>

            <a
              href="mailto:esantama@lakeheadu.ca"
              className="group transition-transform duration-300 hover:scale-110"
            >
              <Mail size={28} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end">
          <div ref={cardRef} className="relative">

            {/* Glow */}
            <div
              ref={glowRef}
              className="absolute -inset-3 rounded-[30px] blur-2xl opacity-40"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,120,200,0.55) 0%, transparent 70%)"
              }}
            />

            <div className="relative z-10 drop-shadow-[0_0_40px_rgba(220,120,255,0.45)]">
              <ProfileCard
                name="Emilio Santamaria"
                title="Creative Technologist"
                handle="watermelelon"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/photocardtest4.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
                iconUrl="/favicon.ico"
                grainUrl="/gtexture2.jpg"
                behindGlowEnabled={true}
                behindGlowColor="rgba(210,120,255,0.6)"
                innerGradient="linear-gradient(145deg, rgba(25,20,35,0.85), rgba(60,40,80,0.25))"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
