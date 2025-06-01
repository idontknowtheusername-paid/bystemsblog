
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import LatestPosts from '@/components/LatestPosts';
import ContactForm from '@/components/ContactForm';
import { Separator } from '@/components/ui/separator';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      
      <FeaturedProjects />
      
      <Separator className="container mx-auto my-8" />
      
      <LatestPosts />
      
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Contactez <span className="gradient-text">moi</span>
              </h2>
              <p className="text-muted-foreground">
                Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter !
              </p>
            </motion.div>
            
            <ContactForm />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </section>
    </motion.div>
  );
};

export default HomePage;
