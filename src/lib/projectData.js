import { generateId } from '@/lib/utils';
import { initialProjectData } from '@/lib/data/projectContent';

let projects = [...initialProjectData];

export const getProjects = () => {
  return [...projects].sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
};

export const getProjectByIdOrSlug = (idOrSlug) => {
  return projects.find(p => p.id === idOrSlug || p.slug === idOrSlug);
};

export const getRelatedProjects = (currentProject) => {
  if (!currentProject) return [];
  return projects
    .filter(p =>
      p.id !== currentProject.id &&
      (p.category === currentProject.category ||
       (p.technologies && currentProject.technologies && p.technologies.some(tech => currentProject.technologies.includes(tech))))
    )
    .sort((a,b) => new Date(b.completedAt) - new Date(a.completedAt))
    .slice(0, 3);
};

export const addProject = (project) => {
  const newProject = {
    ...project,
    id: generateId(),
    completedAt: project.completedAt || new Date().toISOString() 
  };
  projects.unshift(newProject);
  return newProject;
};

export const updateProject = (updatedProject) => {
  const index = projects.findIndex(p => p.id === updatedProject.id);
  if (index !== -1) {
    projects[index] = { ...projects[index], ...updatedProject };
    return projects[index];
  }
  return null;
};

export const deleteProject = (projectId) => {
  const index = projects.findIndex(p => p.id === projectId);
  if (index !== -1) {
    projects.splice(index, 1);
    return true;
  }
  return false;
};

export const getUniqueProjectCategories = () => {
  return [...new Set(projects.map(project => project.category).filter(Boolean))];
};

export const getUniqueProjectTechnologies = () => {
  return [...new Set(projects.flatMap(project => project.technologies).filter(Boolean))];
};

export { projects }; // Exporting the mutable array for direct use if needed, though getters are preferred
