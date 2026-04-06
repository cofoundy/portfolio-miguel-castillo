export type Lang = "fr" | "es" | "en";

export const labels = {
  fr: {
    about: "À Propos",
    aboutMe: "À Propos",
    skills: "Compétences",
    projects: "Projets",
    experience: "Expérience",
    education: "Formation",
    contactMe: "Contactez-moi",
    viewProject: "Voir le projet",
    allRights: "Tous droits réservés.",
    langSwitch: "ES | EN",
    langSwitchLabel: "Changer de langue",
  },
  es: {
    about: "Acerca",
    aboutMe: "Sobre Mí",
    skills: "Competencias",
    projects: "Proyectos",
    experience: "Experiencia",
    education: "Formación",
    contactMe: "Contáctame",
    viewProject: "Ver proyecto",
    allRights: "Todos los derechos reservados.",
    langSwitch: "FR | EN",
    langSwitchLabel: "Cambiar idioma",
  },
  en: {
    about: "About",
    aboutMe: "About Me",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    contactMe: "Contact Me",
    viewProject: "View project",
    allRights: "All rights reserved.",
    langSwitch: "FR | ES",
    langSwitchLabel: "Switch language",
  },
} as const;

export const content = {
  fr: {
    title: "Gestionnaire ADV – Relation Clients & Webmarketing",
    description:
      "Professionnel en Gestion ADV et Relation Clients avec plus de 25 années d'expérience. Spécialiste en webmarketing, gestion de projets IT et stratégie de communication digitale. Basé en Île-de-France.",
    tagline:
      "Plus de 25 ans d'expérience en gestion ADV, relation clients, projets IT et stratégie digitale.",
    stats: [
      { value: "25+", label: "Ans d'expérience" },
      { value: "10+", label: "Entreprises" },
      { value: "MBA", label: "Executive MBA" },
    ],
    aboutMe:
      "Professionnel en Gestion ADV et Relation Clients avec plus de 25 années d'expérience dans le cycle de facturation et gestion de contrats. 5 années d'expérience en coordination de projet dans les secteurs IT, communication digitale et webmarketing. Trilingue français-espagnol-anglais, passionné de danse, gastronomie latino-américaine et musique. Membre du Conseil d'Administration du club PEHB (Portes de l'Essonne Handball) depuis 2024.",
    skills: [
      "Gestion ADV",
      "Relation Clients",
      "CRM & ERP",
      "Gestion de Projets IT",
      "Webmarketing (SEM/SMM)",
      "Facturation & Recouvrement",
      "Google Analytics",
      "Développement Web",
      "Excel (TCD)",
      "ITIL 4",
      "Rédaction de Contrats",
      "WordPress",
    ],
    projects: [
      {
        name: "Refonte SI — I.A.P.R.",
        description:
          "MOA IT pour la refonte complète du système d'information d'un réseau de 500+ psychologues à travers la France. Rédaction du cahier des charges, lancement d'appel d'offre, coordination du développement, recettage et mise en production.",
        link: "",
        skills: ["MOA IT", "Gestion de Projet", "SI", "Appel d'Offre"],
      },
      {
        name: "Association HARO-art",
        description:
          "Conception d'une stratégie de lancement d'une association pour promouvoir des artistes locaux, avec location de locaux d'exposition et création d'une marketplace en ligne.",
        link: "",
        skills: ["Stratégie Digitale", "Marketplace", "Communication"],
      },
      {
        name: "CHIC — Plaine Commune",
        description:
          "Réalisation d'une stratégie de communication et maquettes d'un site web bilingue pour un projet éphémère de la Seine-Saint-Denis, ciblant les moins de 25 ans via Snapchat et Instagram.",
        link: "",
        skills: ["Site Bilingue", "Social Media", "UX/UI"],
      },
      {
        name: "Restaurant Dream Sushi 91",
        description:
          "Création d'un site web statique pour un restaurant avec objectif de référencement Google (SEO) et présence sur Google Maps.",
        link: "",
        skills: ["SEO", "Site Web", "Google Maps"],
      },
    ],
    experience: [
      {
        company: "Atlantique Packaging",
        title: "Gestionnaire ADV & Relation Clients",
        dateRange: "2024 – 2026",
        bullets: [
          "Coordination et pilotage de l'activité du service ADV",
          "Gestion de tableaux de bord (Statistiques, CA, Grilles de Prix)",
          "Suivi des commandes via ERP (Devis à facturation)",
        ],
      },
      {
        company: "Freelance",
        title: "Conseiller en Stratégie de Communication Webmarketing",
        dateRange: "2018 – Présent",
        bullets: [
          "Stratégie de lancement de marques, concepts et services",
          "Création de sites web et stratégie de communication digitale",
          "Clients : associations, restaurants, artistes indépendants",
        ],
      },
      {
        company: "Genopole",
        title: "Gestionnaire ADV – Relation Clients & Chargé de Projets",
        dateRange: "2022 – 2023",
        bullets: [
          "Création de poste pour le service comptable et commercial",
          "Contrats fibre REVE pour startups du campus Genopole",
          "Participation aux projets RIE (400+ adhérents) et Protopia (Biotech Food Lab)",
        ],
      },
      {
        company: "Intelcia (SFR Business)",
        title: "Relation Client & Chargé de Gestion Déploiement Fibre B2B",
        dateRange: "2019 – 2022",
        bullets: [
          "Coordinateur projet déploiement fibre chez les souscripteurs B2B",
          "Suivi satisfaction client sur 2 mois pour fidélisation",
        ],
      },
      {
        company: "I.A.P.R.",
        title: "Gestionnaire ADV & Relation Clients, CRM, Chef de Projet IT",
        dateRange: "2007 – 2017",
        bullets: [
          "Cycle de facturation et gestion des litiges (300+ clients)",
          "Administrateur SI interne (réseau 500+ psychologues, France entière)",
          "MOA IT : refonte complète du SI (cahier des charges, appel d'offre, recettage, mise en production)",
        ],
      },
      {
        company: "Eurotoll",
        title: "Chargé Commercial & SAV",
        dateRange: "2007",
        bullets: ["Gestion commerciale et service après-vente"],
      },
      {
        company: "Disneyland Paris",
        title: "Opérateur de Réservations Trilingue",
        dateRange: "2001 – 2002",
        bullets: ["Gestion des réservations en français, espagnol et anglais"],
      },
      {
        company: "Chanel S.A.",
        title: "Assistant de Projets et de Production",
        dateRange: "1997 – 2001",
        bullets: ["Assistant au Laboratoire Pilote pour projets et production"],
      },
    ],
    education: [
      {
        school: "VISIPLUS Digital Learning",
        degree: "Executive MBA – Stratégies Web Marketing & Projets Communication Digitale",
        dateRange: "2020 – 2021",
        achievements: ["Titre certifié RNCP Niveau 7 (EU)"],
      },
      {
        school: "IESA Multimédia",
        degree: "Chef de Projet Multimédia",
        dateRange: "2017 – 2018",
        achievements: ["Mention Bien", "Titre certifié RNCP Niveau 6 (EU)"],
      },
    ],
  },
  es: {
    title: "Gestor ADV – Relación Clientes & Webmarketing",
    description:
      "Profesional en Gestión ADV y Relación Clientes con más de 25 años de experiencia. Especialista en webmarketing, gestión de proyectos IT y estrategia de comunicación digital. Basado en Île-de-France, Francia.",
    tagline:
      "Más de 25 años de experiencia en gestión ADV, relación clientes, proyectos IT y estrategia digital.",
    stats: [
      { value: "25+", label: "Años de experiencia" },
      { value: "10+", label: "Empresas" },
      { value: "MBA", label: "Executive MBA" },
    ],
    aboutMe:
      "Profesional en Gestión ADV y Relación Clientes con más de 25 años de experiencia en el ciclo de facturación y gestión de contratos. 5 años de experiencia en coordinación de proyectos en los sectores IT, comunicación digital y webmarketing. Trilingüe francés-español-inglés, apasionado por la danza, la gastronomía latinoamericana y la música. Miembro del Consejo de Administración del club PEHB (Portes de l'Essonne Handball) desde 2024.",
    skills: [
      "Gestión ADV",
      "Relación Clientes",
      "CRM & ERP",
      "Gestión de Proyectos IT",
      "Webmarketing (SEM/SMM)",
      "Facturación & Cobranza",
      "Google Analytics",
      "Desarrollo Web",
      "Excel (TCD)",
      "ITIL 4",
      "Redacción de Contratos",
      "WordPress",
    ],
    projects: [
      {
        name: "Rediseño SI — I.A.P.R.",
        description:
          "MOA IT para la renovación completa del sistema de información de una red de 500+ psicólogos en toda Francia. Redacción del pliego de condiciones, licitación, coordinación del desarrollo, pruebas y puesta en producción.",
        link: "",
        skills: ["MOA IT", "Gestión de Proyecto", "SI", "Licitación"],
      },
      {
        name: "Asociación HARO-art",
        description:
          "Concepción de una estrategia de lanzamiento de una asociación para promover artistas locales, con alquiler de espacios de exposición y creación de un marketplace en línea.",
        link: "",
        skills: ["Estrategia Digital", "Marketplace", "Comunicación"],
      },
      {
        name: "CHIC — Plaine Commune",
        description:
          "Realización de una estrategia de comunicación y maquetas de un sitio web bilingüe para un proyecto efímero en Seine-Saint-Denis, dirigido a menores de 25 años vía Snapchat e Instagram.",
        link: "",
        skills: ["Sitio Bilingüe", "Redes Sociales", "UX/UI"],
      },
      {
        name: "Restaurante Dream Sushi 91",
        description:
          "Creación de un sitio web estático para un restaurante con objetivo de posicionamiento Google (SEO) y presencia en Google Maps.",
        link: "",
        skills: ["SEO", "Sitio Web", "Google Maps"],
      },
    ],
    experience: [
      {
        company: "Atlantique Packaging",
        title: "Gestor ADV & Relación Clientes",
        dateRange: "2024 – 2026",
        bullets: [
          "Coordinación y gestión de la actividad del servicio ADV",
          "Gestión de tableros de control (Estadísticas, Facturación, Precios)",
          "Seguimiento de pedidos vía ERP (Cotización a facturación)",
        ],
      },
      {
        company: "Freelance",
        title: "Asesor en Estrategia de Comunicación Webmarketing",
        dateRange: "2018 – Presente",
        bullets: [
          "Estrategia de lanzamiento de marcas, conceptos y servicios",
          "Creación de sitios web y estrategia de comunicación digital",
          "Clientes: asociaciones, restaurantes, artistas independientes",
        ],
      },
      {
        company: "Genopole",
        title: "Gestor ADV – Relación Clientes & Encargado de Proyectos",
        dateRange: "2022 – 2023",
        bullets: [
          "Creación de puesto para el servicio contable y comercial",
          "Contratos de fibra REVE para startups del campus Genopole",
          "Participación en proyectos RIE (400+ miembros) y Protopia (Biotech Food Lab)",
        ],
      },
      {
        company: "Intelcia (SFR Business)",
        title: "Relación Cliente & Encargado de Despliegue Fibra B2B",
        dateRange: "2019 – 2022",
        bullets: [
          "Coordinador de proyecto de despliegue de fibra para suscriptores B2B",
          "Seguimiento de satisfacción del cliente durante 2 meses para fidelización",
        ],
      },
      {
        company: "I.A.P.R.",
        title: "Gestor ADV & Relación Clientes, CRM, Jefe de Proyecto IT",
        dateRange: "2007 – 2017",
        bullets: [
          "Ciclo de facturación y gestión de litigios (300+ clientes)",
          "Administrador SI interno (red de 500+ psicólogos en toda Francia)",
          "MOA IT: renovación completa del SI (pliego, licitación, pruebas, producción)",
        ],
      },
      {
        company: "Eurotoll",
        title: "Encargado Comercial & Postventa",
        dateRange: "2007",
        bullets: ["Gestión comercial y servicio postventa"],
      },
      {
        company: "Disneyland Paris",
        title: "Operador de Reservas Trilingüe",
        dateRange: "2001 – 2002",
        bullets: ["Gestión de reservas en francés, español e inglés"],
      },
      {
        company: "Chanel S.A.",
        title: "Asistente de Proyectos y Producción",
        dateRange: "1997 – 2001",
        bullets: ["Asistente en el Laboratorio Piloto para proyectos y producción"],
      },
    ],
    education: [
      {
        school: "VISIPLUS Digital Learning",
        degree: "Executive MBA – Estrategias Web Marketing & Proyectos Comunicación Digital",
        dateRange: "2020 – 2021",
        achievements: ["Título certificado RNCP Nivel 7 (EU)"],
      },
      {
        school: "IESA Multimédia",
        degree: "Jefe de Proyecto Multimedia",
        dateRange: "2017 – 2018",
        achievements: ["Mención Bien", "Título certificado RNCP Nivel 6 (EU)"],
      },
    ],
  },
  en: {
    title: "ADV Manager – Client Relations & Webmarketing",
    description:
      "ADV Management and Client Relations professional with 25+ years of experience. Specialist in webmarketing, IT project management and digital communication strategy. Based in Île-de-France, France.",
    tagline:
      "25+ years of experience in ADV management, client relations, IT projects and digital strategy.",
    stats: [
      { value: "25+", label: "Years of Experience" },
      { value: "10+", label: "Companies" },
      { value: "MBA", label: "Executive MBA" },
    ],
    aboutMe:
      "ADV Management and Client Relations professional with 25+ years of experience in billing cycles and contract management. 5 years of experience in project coordination in IT, digital communication and webmarketing sectors. Trilingual French-Spanish-English, passionate about dance, Latin American gastronomy and music. Board member of PEHB club (Portes de l'Essonne Handball) since 2024.",
    skills: [
      "ADV Management",
      "Client Relations",
      "CRM & ERP",
      "IT Project Management",
      "Webmarketing (SEM/SMM)",
      "Billing & Collections",
      "Google Analytics",
      "Web Development",
      "Excel (Pivot Tables)",
      "ITIL 4",
      "Contract Drafting",
      "WordPress",
    ],
    projects: [
      {
        name: "IS Overhaul — I.A.P.R.",
        description:
          "IT MOA for the complete overhaul of the information system serving a network of 500+ psychologists across France. Specifications drafting, tendering, development coordination, user testing and production deployment.",
        link: "",
        skills: ["IT MOA", "Project Management", "IS", "Tendering"],
      },
      {
        name: "HARO-art Association",
        description:
          "Strategy design for launching an association to promote local artists, with exhibition space rental and online marketplace creation.",
        link: "",
        skills: ["Digital Strategy", "Marketplace", "Communication"],
      },
      {
        name: "CHIC — Plaine Commune",
        description:
          "Communication strategy and bilingual website mockups for an ephemeral project in Seine-Saint-Denis, targeting under-25s via Snapchat and Instagram.",
        link: "",
        skills: ["Bilingual Site", "Social Media", "UX/UI"],
      },
      {
        name: "Dream Sushi 91 Restaurant",
        description:
          "Static website creation for a restaurant with Google SEO and Google Maps presence as primary objectives.",
        link: "",
        skills: ["SEO", "Website", "Google Maps"],
      },
    ],
    experience: [
      {
        company: "Atlantique Packaging",
        title: "ADV Manager & Client Relations",
        dateRange: "2024 – 2026",
        bullets: [
          "Coordination and management of ADV department activities",
          "Dashboard management (Statistics, Revenue, Pricing Grids)",
          "Order tracking via ERP (Quote to billing)",
        ],
      },
      {
        company: "Freelance",
        title: "Digital Communication Strategy Consultant",
        dateRange: "2018 – Present",
        bullets: [
          "Brand, concept and service launch strategy",
          "Website creation and digital communication strategy",
          "Clients: associations, restaurants, independent artists",
        ],
      },
      {
        company: "Genopole",
        title: "ADV Manager – Client Relations & Project Manager",
        dateRange: "2022 – 2023",
        bullets: [
          "Position creation for accounting and commercial department",
          "REVE fiber contracts for Genopole campus startups",
          "Participation in RIE projects (400+ members) and Protopia (Biotech Food Lab)",
        ],
      },
      {
        company: "Intelcia (SFR Business)",
        title: "Client Relations & B2B Fiber Deployment Manager",
        dateRange: "2019 – 2022",
        bullets: [
          "Fiber deployment project coordinator for B2B subscribers",
          "2-month client satisfaction follow-up for retention",
        ],
      },
      {
        company: "I.A.P.R.",
        title: "ADV Manager & Client Relations, CRM, IT Project Manager",
        dateRange: "2007 – 2017",
        bullets: [
          "Billing cycle and dispute management (300+ clients)",
          "Internal IS administrator (network of 500+ psychologists across France)",
          "IT MOA: complete IS overhaul (specifications, tendering, testing, production)",
        ],
      },
      {
        company: "Eurotoll",
        title: "Sales & After-Sales Representative",
        dateRange: "2007",
        bullets: ["Sales management and after-sales service"],
      },
      {
        company: "Disneyland Paris",
        title: "Trilingual Reservations Operator",
        dateRange: "2001 – 2002",
        bullets: ["Reservations management in French, Spanish and English"],
      },
      {
        company: "Chanel S.A.",
        title: "Projects & Production Assistant",
        dateRange: "1997 – 2001",
        bullets: ["Pilot Laboratory assistant for projects and production"],
      },
    ],
    education: [
      {
        school: "VISIPLUS Digital Learning",
        degree: "Executive MBA – Web Marketing Strategies & Digital Communication Projects",
        dateRange: "2020 – 2021",
        achievements: ["RNCP Level 7 certified (EU)"],
      },
      {
        school: "IESA Multimédia",
        degree: "Multimedia Project Manager",
        dateRange: "2017 – 2018",
        achievements: ["With Honours", "RNCP Level 6 certified (EU)"],
      },
    ],
  },
} as const;

export function getLabels(lang: Lang) {
  return labels[lang];
}

export function getContent(lang: Lang) {
  return content[lang];
}
