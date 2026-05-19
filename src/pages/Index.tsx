import StaggeredMenu from '@/components/StaggeredMenu';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import IntroAnimation from '@/components/IntroAnimation';
import FeaturedWork from '@/components/FeaturedWork';
import Playground from '@/components/Playground';
import Philosophy from '@/components/Philosophy';

const Index = () => {
  return (
    <div className="min-h-screen">

      <StaggeredMenu 
        position="right" 
        isFixed={true} 
        menuButtonColor="rgba(230, 232, 230, 0.7)" 
        openMenuButtonColor="#000"
        accentColor="#3772ff"
        colors={["#3772ff", "#111"]}
        items={[
          { label: "Work", ariaLabel: "Featured Work", link: "#featured-work" },
          { label: "Playground", ariaLabel: "Playground", link: "#playground" },
          { label: "Philosophy", ariaLabel: "Philosophy", link: "#philosophy" },
          { label: "About", ariaLabel: "About", link: "#about" },
          { label: "Contact", ariaLabel: "Contact", link: "#contact" }
        ]}
      />
      <IntroAnimation />
      <FeaturedWork />
      <Playground />
      <Philosophy />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
