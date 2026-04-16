
import Header from '@/components/Header';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hook from '@/components/Hook';
import FeaturedWork from '@/components/FeaturedWork';
import Playground from '@/components/Playground';
import Philosophy from '@/components/Philosophy';

const Index = () => {
  return (
    <div className="min-h-screen">


      <Header />
      <Hook />
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
