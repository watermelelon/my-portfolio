import ScrollReveal from "./ui/scrollreveal";
import Antigravity from "./ui/Antigravity";
import CurvedLoop from "./ui/CurvedLoop";
import Aurora from "./ui/Aurora";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-[140vh] pt-16 pb-24 bg-[#0B0B0F] text-white"
    >

      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
      <Aurora
        colorStops={["#67edff","#B19EEF","#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />
      </div>

      {/* Text Content */}
      <div className="max-w-4xl mx-auto px-8 text-center">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={4}
        >
          
            I’m driven by curiosity and the desire to build meaningful digital experiences. 
            I am currently working on topics regarding UI/UX, computer vision and data visualization. 
            But open to learn any cool tech out there!
          
        </ScrollReveal>

        <div className="mt-60">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={4}
        >
            
             Some of the tools I use include:
          
        </ScrollReveal>
        </div>
      </div>

      {/* Curved Loop - Full Width */}
      <div className="relative z-100 w-full -mt-20"> {/* -mt-8 reduces space between text and loop */}
        <CurvedLoop 
          marqueeText="React ✦ Python ✦ Blender ✦ Tailwind ✦ OpenCV ✦ Unity ✦ Figma ✦ Node.js ✦ Three.js ✦ Git ✦"
          speed={1.5}
          curveAmount={200}
          direction="left"
          interactive
          className="w-full text-xl md:text-4xl min-h-0 !flex !items-start !justify-start"
        />
      </div>

    </section>
  );
};

export default About;
