import { generateId } from '@/lib/utils';
import { initialBlogPostsContent } from '@/lib/data/blogPostsContent';

let blogPosts = [...initialBlogPostsContent];

export const getBlogPosts = () => {
  return [...blogPosts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};

export const getBlogPostByIdOrSlug = (idOrSlug) => {
  return blogPosts.find(p => p.id === idOrSlug || p.slug === idOrSlug);
};

export const getRelatedBlogPosts = (currentPost) => {
  if (!currentPost) return [];
  return blogPosts
    .filter(p =>
      p.id !== currentPost.id &&
      (p.category === currentPost.category ||
       (p.tags && currentPost.tags && p.tags.some(tag => currentPost.tags.includes(tag))))
    )
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);
};

export const addBlogPost = (post) => {
  const newPost = {
    ...post,
    id: generateId(),
    author: { name: "John Doe", avatar: "john-doe-avatar" },
    publishedAt: new Date().toISOString(),
    readingTime: `${Math.ceil(post.content.length / 1000)} min`
  };
  blogPosts.unshift(newPost);
  return newPost;
};

export const updateBlogPost = (updatedPost) => {
  const index = blogPosts.findIndex(p => p.id === updatedPost.id);
  if (index !== -1) {
    blogPosts[index] = {
      ...blogPosts[index],
      ...updatedPost,
      readingTime: `${Math.ceil(updatedPost.content.length / 1000)} min`
    };
    return blogPosts[index];
  }
  return null;
};

export const deleteBlogPost = (postId) => {
  const index = blogPosts.findIndex(p => p.id === postId);
  if (index !== -1) {
    blogPosts.splice(index, 1);
    return true;
  }
  return false;
};

export const getUniqueBlogCategories = () => {
  return [...new Set(blogPosts.map(post => post.category).filter(Boolean))];
};

export const getUniqueBlogTags = () => {
  return [...new Set(blogPosts.flatMap(post => post.tags).filter(Boolean))];
};

export { blogPosts };
