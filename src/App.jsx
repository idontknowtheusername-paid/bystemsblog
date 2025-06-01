
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from '@/layouts/MainLayout';

// Pages
import HomePage from '@/pages/HomePage';
import BlogPage from '@/pages/BlogPage';
import ProjectsPage from '@/pages/ProjectsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import BlogPostPage from '@/pages/BlogPostPage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import AdminPage from '@/pages/AdminPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:id" element={<BlogPostPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:id" element={<ProjectDetailPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Toaster />
    </Router>
  );
}

export default App;
