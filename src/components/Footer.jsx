import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, AtSign } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, label: "GitHub", href: "https://github.com/bienvenu-cyber" },
    { icon: <Twitter className="h-6 w-6" />, label: "Twitter", href: "https://twitter.com/bienvenutongui" },
    { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", href: "https://linkedin.com/in/bienvenutongui" },
    { icon: <Instagram className="h-6 w-6" />, label: "Instagram", href: "https://www.instagram.com/bv_4real" },
    { icon: <AtSign className="h-6 w-6" />, label: "Threads", href: "https://threads.net/votre-username" },
    { icon: <Mail className="h-6 w-6" />, label: "Email", href: "mailto:bienvenu082003@gmail.com" },
  ];

  const footerLinks = [
    { name: "Accueil", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Projets", path: "/projects" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold gradient-text">DevFolio</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Un espace personnel pour partager mes projets, compétences et réflexions sur le développement web et la technologie.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <p className="font-medium mb-4 text-foreground">Navigation</p>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <p className="font-medium mb-4 text-foreground">Newsletter</p>
            <p className="text-muted-foreground text-sm mb-4">
              Abonnez-vous pour recevoir mes derniers articles et mises à jour.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="votre@email.com"
                className="px-4 py-2 bg-secondary rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm flex items-center">
            © {currentYear} BystemsFolio. by Beyond Logic
          </p>
          <p className="text-muted-foreground text-sm mt-2 sm:mt-0">
            Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
