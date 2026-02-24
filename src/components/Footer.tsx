import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <p className="text-sm text-white/70">
              Emilio Santamaria
            </p>
            <p className="text-xs text-white/40 mt-1">
              Computer Scientist · Creative Technologist
            </p>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/watermelelon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/10 rounded-md hover:border-white hover:bg-white hover:text-black transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/esantama"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/10 rounded-md hover:border-white hover:bg-white hover:text-black transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:emiliodaniel02@hotmail.com"
              className="p-2 border border-white/10 rounded-md hover:border-white hover:bg-white hover:text-black transition"
            >
              <Mail size={18} />
            </a>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Emilio Santamaria · Built & Designed by Me using ReactBits and Aceternity UI
        </div>

      </div>
    </footer>
  );
};

export default Footer;