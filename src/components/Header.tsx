import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      
      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-8 px-6 py-3 rounded-full bg-black backdrop-blur-md border border-white shadow-lg">

        {/* Logo */}
        <div className="text-sm text-white font-medium tracking-wide">
          Emilio's Portfolio 
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6 text-sm">
          {[ "about", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="relative text-white/70 hover:text-white transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}

              {/* underline interaction */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 hover:w-full" />
            </button>
          ))}
        </nav>
      </div>

      {/* MOBILE BUTTON */}
      <div className="md:hidden flex items-center justify-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col items-center gap-4 px-6 py-4 rounded-2xl bg-black/90 backdrop-blur-md border border-white/10 md:hidden">
          {["hero", "about", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-white/80 hover:text-white transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;