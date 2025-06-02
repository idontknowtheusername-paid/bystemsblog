import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Instagram, AtSign } from 'lucide-react';

const HeroSection = () => {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/bienvenu-cyber", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/bienvenutongui", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:contact@example.com", label: "Email" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/bv_4real", label: "Instagram" },
    { icon: <AtSign className="h-5 w-5" />, href: "https://threads.net/votre-username", label: "Threads" },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                  Développeur
                </span>{' '}
                passionné & créatif
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 max-w-lg">
              Bienvenue sur mon portfolio et blog personnel. Je partage ici mes projets, mes connaissances et mon parcours dans le monde du développement web.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
                Voir mes projets
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="px-6 py-3 border border-gray-600 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors duration-200">
                Lire mon blog
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="relative z-10 rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
              <img  
                className="w-full h-auto"
                alt="Développeur travaillant sur un ordinateur portable avec du code à l'écran"
                src="https://images.unsplash.com/photo-1489506020498-e6c1cc350f10?w=600&h=400&fit=crop&crop=center"
              />
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      
      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.3s both;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
