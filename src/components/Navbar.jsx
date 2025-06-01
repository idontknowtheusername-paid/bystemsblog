
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Projets', path: '/projects' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="container mx-auto px-4 md:px-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal className="h-8 w-8 text-primary" />
          </motion.div>
          <span className="text-xl font-bold gradient-text">DevFolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "relative px-4 py-2 rounded-md text-sm font-medium transition-colors",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      layoutId="navbar-indicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Button asChild variant="default" size="sm" className="ml-4">
            <Link to="/admin">
              <Code className="mr-2 h-4 w-4" />
              Admin
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden pt-4 pb-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-secondary text-primary" 
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                )}
              >
                {item.name}
              </NavLink>
            ))}
            <Button asChild variant="default" size="sm" className="mt-2">
              <Link to="/admin" onClick={() => setIsOpen(false)}>
                <Code className="mr-2 h-4 w-4" />
                Admin
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
