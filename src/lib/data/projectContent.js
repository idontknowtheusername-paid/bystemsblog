export const initialProjectData = [
  {
    id: "1",
    title: "E-commerce React",
    slug: "e-commerce-react",
    description: "Une plateforme e-commerce complète construite avec React, Redux et Firebase.",
    longDescription: `
# E-commerce React

Une plateforme e-commerce complète construite avec React, Redux et Firebase. Ce projet inclut l'authentification des utilisateurs, la gestion des produits, un panier d'achat, le paiement avec Stripe et bien plus encore.

## Fonctionnalités

- Authentification des utilisateurs (inscription, connexion, récupération de mot de passe)
- Catalogue de produits avec filtrage et recherche
- Système de panier d'achat
- Passerelle de paiement avec Stripe
- Gestion des commandes
- Tableau de bord administrateur
- Responsive design

## Technologies utilisées

- React.js pour l'interface utilisateur
- Redux pour la gestion de l'état
- Firebase pour l'authentification et la base de données
- Stripe pour les paiements
- Styled Components pour le styling
- Jest et React Testing Library pour les tests

## Défis et solutions

L'un des plus grands défis de ce projet était la gestion de l'état du panier d'achat entre les sessions. J'ai résolu ce problème en utilisant Redux Persist pour sauvegarder l'état du panier dans le localStorage.

Un autre défi était l'optimisation des performances avec un grand nombre de produits. J'ai implémenté la pagination côté serveur et la virtualisation pour améliorer les performances.

## Résultats

Ce projet a été un grand succès, avec plus de 1000 utilisateurs actifs par mois et un taux de conversion de 5%. Il a également été bien reçu par la communauté, avec plus de 100 étoiles sur GitHub.
    `,
    coverImage: "ecommerce-project",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/ecommerce-react",
    technologies: ["React", "Redux", "Firebase", "Stripe", "Styled Components"],
    category: "Web",
    featured: true,
    completedAt: "2023-08-15T00:00:00Z"
  },
  {
    id: "2",
    title: "Application de gestion de tâches",
    slug: "application-gestion-taches",
    description: "Une application de gestion de tâches avec des fonctionnalités de collaboration en temps réel.",
    longDescription: `
# Application de gestion de tâches

Une application de gestion de tâches moderne avec des fonctionnalités de collaboration en temps réel. Ce projet permet aux utilisateurs de créer des tâches, de les organiser en projets, de définir des échéances et de collaborer avec d'autres utilisateurs.

## Fonctionnalités

- Création et gestion de tâches
- Organisation en projets et listes
- Collaboration en temps réel
- Notifications et rappels
- Thèmes personnalisables
- Mode hors ligne avec synchronisation

## Technologies utilisées

- React.js pour l'interface utilisateur
- Socket.io pour la collaboration en temps réel
- Node.js et Express pour le backend
- MongoDB pour la base de données
- JWT pour l'authentification
- Service Workers pour le mode hors ligne

## Défis et solutions

Le plus grand défi de ce projet était la mise en œuvre de la collaboration en temps réel. J'ai utilisé Socket.io pour permettre aux utilisateurs de voir les modifications en temps réel sans avoir à actualiser la page.

Un autre défi était la gestion des conflits lorsque plusieurs utilisateurs modifiaient la même tâche simultanément. J'ai implémenté un système de verrouillage optimiste pour résoudre ce problème.

## Résultats

Cette application est maintenant utilisée par plusieurs équipes dans différentes entreprises. Elle a permis d'améliorer la productivité et la collaboration au sein de ces équipes.
    `,
    coverImage: "task-management-app",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/task-app",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    category: "Web",
    featured: true,
    completedAt: "2023-06-10T00:00:00Z"
  },
  {
    id: "3",
    title: "Portfolio personnel",
    slug: "portfolio-personnel",
    description: "Mon portfolio personnel construit avec React et TailwindCSS.",
    longDescription: `
# Portfolio personnel

Mon portfolio personnel construit avec React et TailwindCSS. Ce site présente mes projets, compétences et expériences professionnelles.

## Fonctionnalités

- Design moderne et responsive
- Animations fluides
- Mode sombre/clair
- Formulaire de contact
- Blog intégré
- Optimisé pour le SEO

## Technologies utilisées

- React.js pour l'interface utilisateur
- TailwindCSS pour le styling
- Framer Motion pour les animations
- Next.js pour le SSR et l'optimisation SEO
- Formspree pour le formulaire de contact

## Défis et solutions

Le principal défi était de créer un design unique qui me représente tout en restant professionnel. J'ai passé beaucoup de temps sur la conception et j'ai itéré plusieurs fois avant d'arriver au résultat final.

Un autre défi était l'optimisation des performances, en particulier pour les animations. J'ai utilisé Framer Motion pour créer des animations fluides sans compromettre les performances.

## Résultats

Ce portfolio a été bien reçu par la communauté et m'a aidé à décrocher plusieurs contrats freelance. Il a également été présenté dans une collection de portfolios inspirants.
    `,
    coverImage: "portfolio-project",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/portfolio",
    technologies: ["React", "TailwindCSS", "Framer Motion", "Next.js"],
    category: "Web",
    featured: false,
    completedAt: "2023-04-22T00:00:00Z"
  },
  {
    id: "4",
    title: "Application météo",
    slug: "application-meteo",
    description: "Une application météo élégante avec des prévisions détaillées et des visualisations.",
    longDescription: `
# Application météo

Une application météo élégante qui fournit des prévisions détaillées et des visualisations pour n'importe quelle ville dans le monde.

## Fonctionnalités

- Prévisions météo actuelles et à 7 jours
- Recherche de villes
- Visualisations des données météorologiques
- Géolocalisation
- Notifications d'alertes météo
- Widget pour l'écran d'accueil

## Technologies utilisées

- React Native pour l'application mobile
- OpenWeatherMap API pour les données météo
- D3.js pour les visualisations
- Redux pour la gestion de l'état
- Geolocation API pour la géolocalisation

## Défis et solutions

Le principal défi était de créer des visualisations de données météorologiques qui soient à la fois informatives et esthétiques. J'ai utilisé D3.js pour créer des graphiques interactifs qui permettent aux utilisateurs de comprendre facilement les tendances météorologiques.

Un autre défi était l'optimisation des performances, en particulier pour les animations et les visualisations. J'ai utilisé des techniques comme le memoization et le lazy loading pour améliorer les performances.

## Résultats

Cette application a été téléchargée plus de 10 000 fois sur l'App Store et Google Play, avec une note moyenne de 4,7/5. Elle a également été présentée dans plusieurs blogs de développement mobile.
    `,
    coverImage: "weather-app",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/weather-app",
    technologies: ["React Native", "OpenWeatherMap API", "D3.js", "Redux"],
    category: "Mobile",
    featured: false,
    completedAt: "2023-02-15T00:00:00Z"
  },
  {
    id: "5",
    title: "Jeu de plateforme en JavaScript",
    slug: "jeu-plateforme-javascript",
    description: "Un jeu de plateforme 2D créé avec JavaScript et Canvas API.",
    longDescription: `
# Jeu de plateforme en JavaScript

Un jeu de plateforme 2D créé avec JavaScript et Canvas API. Le joueur contrôle un personnage qui doit naviguer à travers différents niveaux, éviter les obstacles et collecter des objets.

## Fonctionnalités

- Plusieurs niveaux avec difficulté croissante
- Système de points et de vies
- Effets sonores et musique de fond
- Sauvegarde de la progression
- Tableau des scores
- Mode multijoueur local

## Technologies utilisées

- JavaScript vanilla
- Canvas API pour le rendu
- Howler.js pour l'audio
- LocalStorage pour la sauvegarde
- Webpack pour le bundling

## Défis et solutions

Le plus grand défi était la création d'un moteur de physique pour le jeu. J'ai implémenté un système de détection de collision et de gravité pour rendre le jeu réaliste.

Un autre défi était l'optimisation des performances, en particulier sur les appareils mobiles. J'ai utilisé des techniques comme le object pooling et le sprite batching pour améliorer les performances.

## Résultats

Ce jeu a été joué par plus de 5 000 personnes et a reçu des commentaires positifs pour son gameplay fluide et son design attrayant. Il a également été utilisé comme exemple dans un cours de développement de jeux en JavaScript.
    `,
    coverImage: "platform-game",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/platform-game",
    technologies: ["JavaScript", "Canvas API", "Howler.js", "Webpack"],
    category: "Jeu",
    featured: false,
    completedAt: "2022-12-05T00:00:00Z"
  }
];
