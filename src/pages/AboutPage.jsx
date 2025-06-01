import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import SkillBar from '@/components/SkillBar';
import { skills, experiences, education, testimonials } from '@/lib/personalData';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">
          À <span className="gradient-text">propos</span> de moi
        </h1>
        <p className="text-muted-foreground">
          Découvrez mon parcours, mes compétences et mes expériences professionnelles.
        </p>
      </motion.div>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden gradient-border">
                <img   
                  className="w-full h-auto"
                  alt="Photo de profil du développeur"
                 src="https://images.unsplash.com/photo-1666892666066-abe5c4865e9c" />
              </div>
              
              <motion.div
                className="absolute -top-5 -right-5 w-24 h-24 bg-primary/20 rounded-full blur-3xl"
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
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">John Doe</h2>
            <h3 className="text-xl text-primary">Développeur Frontend Senior</h3>
            
            <p className="text-muted-foreground">
              Passionné par le développement web depuis plus de 7 ans, je me spécialise dans la création d'interfaces utilisateur modernes et performantes. J'aime résoudre des problèmes complexes et créer des expériences utilisateur exceptionnelles.
            </p>
            
            <p className="text-muted-foreground">
              En dehors du code, je m'intéresse à la photographie, aux voyages et à la musique. J'aime également partager mes connaissances à travers des articles de blog et des conférences.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Node.js</Badge>
              <Badge>TailwindCSS</Badge>
              <Badge>Next.js</Badge>
            </div>
          </motion.div>
        </div>
        
        <Tabs defaultValue="skills" className="mb-16">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="skills">Compétences</TabsTrigger>
            <TabsTrigger value="experience">Expérience</TabsTrigger>
            <TabsTrigger value="education">Formation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills" className="space-y-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold">{skillCategory.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      name={skill.name}
                      level={skill.level}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </TabsContent>
          
          <TabsContent value="experience" className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-8 border-l border-border"
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <span className="text-sm text-muted-foreground">{experience.period}</span>
                  </div>
                  <div className="flex items-center text-primary">
                    <span>{experience.company}</span>
                    <span className="mx-2">•</span>
                    <span>{experience.location}</span>
                  </div>
                  <p className="text-muted-foreground">{experience.description}</p>
                  {experience.achievements && experience.achievements.length > 0 && (
                     <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-8 border-l border-border"
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <div className="flex items-center text-primary">
                    <span>{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
        
        <Separator className="my-16" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Ce que disent <span className="gradient-text">mes clients</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg glass-effect"
              >
                <div className="flex items-start mb-4">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.avatar || testimonial.name}`} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <Avatar>
                          <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.avatar || testimonial.name}`} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;