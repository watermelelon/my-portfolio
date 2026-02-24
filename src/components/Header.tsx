
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">

      {/* Logo */}
      <div className="text-xl font-medium tracking-wide text-white">
        Emilio's Portfolio
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-10 text-sm">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-white/70 hover:text-white transition duration-200"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white/70 hover:text-white transition duration-200"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="text-white/70 hover:text-white transition duration-200"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-white/70 hover:text-white transition duration-200"
        >
          Contact
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-white"
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="md:hidden py-4 border-t border-white/10">
        <nav className="flex flex-col space-y-4 text-sm">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-left text-white/70 hover:text-white transition duration-200"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-left text-white/70 hover:text-white transition duration-200"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-left text-white/70 hover:text-white transition duration-200"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-left text-white/70 hover:text-white transition duration-200"
          >
            Contact
          </button>
        </nav>
      </div>
    )}
  </div>
</header>
  );
};

export default Header;
