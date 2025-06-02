
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

  return (
    <section className="relative py-20 md:py-32 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text text-glow">Développeur</span> passionné & créatif
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-lg"
            >
              Bienvenue sur mon portfolio et blog personnel. Je partage ici mes projets, mes connaissances et mon parcours dans le monde du développement web.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <Link to="/projects">
                  Voir mes projets
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/blog">
                  Lire mon blog
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-xl gradient-border">
              <img  
                className="w-full h-auto"
                alt="Développeur travaillant sur un ordinateur portable avec du code à l'écran"
               src="https://images.unsplash.com/photo-1489506020498-e6c1cc350f10" />
            </div>
            
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 8,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
