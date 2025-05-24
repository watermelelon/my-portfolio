
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                    alt="John Doe - Portfolio Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20"></div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Hi, I'm John Doe
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Full Stack Developer & Creative Problem Solver
              </p>
              <p className="text-lg text-gray-500 mb-12">
                I craft digital experiences that blend beautiful design with powerful functionality. 
                Passionate about creating solutions that make a difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                <Button 
                  onClick={scrollToProjects}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  Download Resume
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <a 
                  href="https://github.com" 
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} className="text-gray-700" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} className="text-gray-700" />
                </a>
                <a 
                  href="mailto:john@example.com" 
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={24} className="text-gray-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
