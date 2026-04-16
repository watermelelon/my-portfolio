import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Work", id: "featured-work" },
  { label: "Playground", id: "playground" },
  { label: "Philosophy", id: "philosophy" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = async (sectionId: string) => {
    setIsMenuOpen(false);

    // If we're not on the homepage, go there first with the hash
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 110;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // Handle hash scrolling when arriving from another route
  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.replace("#", "");

    const scrollAfterRender = () => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const headerOffset = 110;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    };

    const timeout = setTimeout(scrollAfterRender, 100);
    return () => clearTimeout(timeout);
  }, [location]);

  const goHome = () => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="hidden md:flex items-center gap-8 px-6 py-3 rounded-full bg-black/90 backdrop-blur-md border border-white shadow-lg">
        <button
          onClick={goHome}
          className="text-sm text-white font-medium tracking-wide"
        >
          Emilio&apos;s Portfolio
        </button>

        <nav className="flex items-center gap-6 text-sm">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-white/70 hover:text-white transition"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 hover:w-full" />
            </button>
          ))}
        </nav>
      </div>

      <div className="md:hidden flex items-center justify-center">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="p-3 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-4 flex flex-col items-center gap-4 px-6 py-4 rounded-2xl bg-black/90 backdrop-blur-md border border-white/10 md:hidden">
          <button
            onClick={goHome}
            className="text-white font-medium transition"
          >
            Home
          </button>

          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white/80 hover:text-white transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;