import BlurText from "./ui/blurtext";
import ColorBends from "./ui/hookbackground";   
import LiquidEther from "./ui/hookbackground2";

const Hook = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0B0F]">

      {/* Background Layer */}
      <div className="absolute inset-0">
        <ColorBends
        colors={[
        "#22d3ee", // cyan
        "#8b5cf6", // vibrant purple
        "#34d399"  // fresh green
        ]}
        rotation={0}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={2}
        parallax={0.5}
        noise={0.1}
        transparent
        autoRotate={0}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 px-12 md:px-24 max-w-6xl">
        <BlurText
          text="WELCOME TO"
          delay={100}
          animateBy="letters"
          direction="top"
          className="
            font-satoshi
            text-6xl
            md:text-8xl
            lg:text-[8rem]
            leading-[0.9]
            tracking-tight
            text-white
          "
        />

        <BlurText
          text="MY PORTFOLIO"
          delay={80}
          animateBy="letters"
          direction="top"
          className="
            font-black
            text-6xl
            md:text-8xl
            lg:text-[8rem]
            leading-[0.9]
            tracking-tight
            text-white
          "
        />
      </div>

    </section>
  );
};

export default Hook;
