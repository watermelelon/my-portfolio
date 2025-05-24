
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              John Doe
            </h3>
            <p className="text-gray-400 mt-2">Full Stack Developer & Creative Problem Solver</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com" 
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:john@example.com" 
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> by John Doe © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
