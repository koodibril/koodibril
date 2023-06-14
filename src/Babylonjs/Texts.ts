export interface Application {
  name: string;
  subtitle: Text;
  logo: string;
  pictures: string[];
  description: Text;
  link: string;
  git: string;
  pdf: string;
  technos: string[];
}

export interface Text {
  fr: string;
  en: string;
}

export const applications: Application[] = [
  {
    name: "SWIFTY-COMPANION",
    subtitle: {
      en: "A simple profile app",
      fr: "A simple profile app",
    },
    logo: "/images/portfolio/swifty_companion/logo.png",
    pdf: "/images/portfolio/swifty_companion/en.subject.pdf",
    pictures: [],
    description: {
      en: "Swifty-companion is a mobile app that allow you to gather personnal data on 42 students \
      using the official API of 42 intranet.",
      fr: "Swifty-companion est une application qui permet de récupérer les informations des élèves de 42, \
      en utilisant l'API de l'intranet de 42.",
    },
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "GRAPHIT",
    subtitle: {
      en: "A simple db app",
      fr: "A simple db app",
    },
    logo: "/images/portfolio/graphit/logo.png",
    pdf: "",
    pictures: [
      "/images/portfolio/graphit/1.png",
      "/images/portfolio/graphit/2.png",
      "/images/portfolio/graphit/3.png",
      "/images/portfolio/graphit/4.png",
    ],
    description: {
      en: "Reprise du projet abandonne par deux developpeurs, remise a neuf du site, \
      correction de toutes les fonctionnalites implementes mais compromises. Developpement de nouvelles \
      fonctionnalites majeures, la modification des cases type 'Excel', l'import et l'export des csv \
      amelioration de la cartographie.",
      fr: "Reprise du projet abandonne par deux developpeurs, remise a neuf du site, \
    correction de toutes les fonctionnalites implementes mais compromises. Developpement de nouvelles \
    fonctionnalites majeures, la modification des cases type 'Excel', l'import et l'export des csv \
    amelioration de la cartographie.",
    },
    link: "http://demo.graph-it.fr",
    git: "",
    technos: [
      "devicon-react-original-wordmark colored",
      "devicon-d3js-plain colored",
      "devicon-nodejs-plain-wordmark colored",
      "devicon-neo4j-plain-wordmark colored",
    ],
  },
  {
    name: "BABYLON",
    subtitle: {
      en: "A simple fps app",
      fr: "A simple fps app",
    },
    logo: "/images/portfolio/babylon/logo.png",
    pdf: "",
    pictures: [
      "/images/portfolio/babylon/1.png",
      "/images/portfolio/babylon/2.png",
      "/images/portfolio/babylon/3.png",
      "/images/portfolio/babylon/3.png",
    ],
    description: {
      en: "Tutorial of initiation to openGl with the babylonjs library. The objective is to\
      create a mini game of First Person Shooter. We learn the use of game engine, frames, \
      animations and meshes.",
      fr: "Tutoriel d'initiation a l'openGl avec la librairie babylonjs, l'objectif est de \
      realiser un mini jeu de tir a la premiere personne. On y apprend la gestion de l'engine \
      des frames, animations et mesh.",
    },
    link: "https://babylon.koodibril.com/",
    git: "https://github.com/koodibril/babylon",
    technos: [
      "devicon-javascript-plain colored",
      "devicon-nodejs-plain-wordmark colored",
      "devicon-opengl-plain-wordmark colored",
    ],
  },
  {
    name: "CAMAGRU",
    subtitle: {
      en: "A simple instagram app",
      fr: "A simple instagram app",
    },
    logo: "/images/portfolio/camagru/logo.png",
    pdf: "/images/portfolio/camagru/camagru.en.pdf",
    pictures: [
      "/images/portfolio/camagru/1.png",
      "/images/portfolio/camagru/2.png",
      "/images/portfolio/camagru/4.png",
    ],
    description: {
      en: "Camagru is a little Instagram-like website, that allow users to create and share \
      photoshopped pictures. It implement most fonctionality met on the majority of \
      user based websites.",
      fr: "Camagru est un petit site Instagram-like permettant à des utilisateurs de réaliser \
      et partager des photo-montages. Il implemente les fonctionnalités de base rencontrées sur \
      la majorité des sites possédant une base utilisateur.",
    },
    link: "https://camagru.koodibril.com/",
    git: "https://github.com/koodibril/camagru",
    technos: [
      "devicon-php-plain colored",
      "devicon-mysql-plain-wordmark colored",
    ],
  },
  {
    name: "SWIFTY-PROTEIN",
    subtitle: {
      en: "A simple protein app",
      fr: "A simple protein app",
    },
    logo: "/images/portfolio/swifty_protein/logo.png",
    pdf: "/images/portfolio/swifty_protein/en.subject.pdf",
    pictures: [],
    description: {
      en: "Swifty-protein is a mobile app that allows to get 'ligands' on the nanana API. You can \
      search into a thousand of those molecular links and when you select one, it will display it \
      in 3D to explore it.",
      fr: "Swifty-protein est un application qui permet de recuperer des 'ligands' sur l'API \
      du site nanana. Elle permet de rechercher parmis un milier de ces lisaisons moleculaires \
      et lors de leurs selection, se charge de leurs representation en modele 3D.",
    },
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "WOODART",
    subtitle: {
      en: "A simple wordpress",
      fr: "A simple wordpress",
    },
    logo: "/images/portfolio/woodart/logo.png",
    pdf: "",
    pictures: [
      "/images/portfolio/woodart/1.png",
      "/images/portfolio/woodart/2.png",
      "/images/portfolio/woodart/3.png",
    ],
    description: {
      en: "Thomas (@passat_woodart) is an artist working with wood waste. He gathers them \
      in an enjoyable mountain style, giving them a second life.",
      fr: "Thomas (@passat_woodart) est un artiste travaillant les chutes de bois. Il les \
      agencent dans un style montagnard agreable, leurs donnant une seconde vie.",
    },
    link: "https://passat-woodart.koodibril.com/",
    git: "",
    technos: [
      "devicon-wordpress-plain-wordmark colored",
      "devicon-mysql-plain colored",
    ],
  },
  {
    name: "MATCHA",
    subtitle: {
      en: "A simple match app",
      fr: "A simple match app",
    },
    logo: "/images/portfolio/matcha/logo.png",
    pdf: "/images/portfolio/matcha/matcha.pdf",
    pictures: [],
    description: {
      en: "Matcha is Tinder-like website, that allow sharing, search and matching users \
      profiles. It implement most functionality met on the majority of dating websites.",
      fr: "Matcha est un site Tinder-like permettant aux utilisateurs de partager \
      leurs profils et de se 'matcher' entre eux. Il implemente les fonctionnalités de base \
      rencontrées sur la majorité des sites de rencontre.",
    },
    link: "",
    git: "",
    technos: [
      "devicon-react-original-wordmark colored",
      "devicon-nodejs-plain-wordmark colored",
      "devicon-neo4j-plain-wordmark colored",
    ],
  },
  {
    name: "CLEAN-APP",
    subtitle: {
      en: "A simple clean app",
      fr: "A simple clean app",
    },
    logo: "/images/portfolio/clean_app/logo.png",
    pdf: "",
    pictures: [],
    description: {
      en: "A npm module 'generate-clean-app', that generate the squelet of a MERN stack with good \
      practices (typescript, eslint, redux, etc) and connectors for most of the common databases. \
      Implement numerous technologies Cf github link.",
      fr: "Module npm 'generate-clean-app', qui genere le squelette d'une application type MERN avec de \
      bonnes pratiques (typescript, eslint, redux, etc) ainsi que les connecteurs des principales Databases. \
      Implemente de nombreuses technologies Cf lien Github",
    },
    link: "",
    git: "https://github.com/AlphaBril/clean-app",
    technos: [],
  },
  {
    name: "INCEPTION OF THINGS",
    subtitle: {
      en: "A simple kubernetes implementation",
      fr: "A simple kubernetes implementation",
    },
    logo: "/images/portfolio/iot/logo.png",
    pdf: "/images/portfolio/iot/en.subject.pdf",
    pictures: [],
    description: {
      en: "This project aims to introduce you to kubernetes from a developer perspective. \
      You will have to set up small clusters and discover the mechanics of continuous \
      integration. At the end of this project you will be able to have a working cluster \
      in docker and have a usable continuous integration for your applications.",
      fr: "Ce projet a pour but de vous faire découvrir kubernetes d'un point de vue \
      développeur. Vous allez devoir mettre en place des petits clusters et découvrir \
      la mécanique de l'intégration continue. À la fin de ce projet vous serrez capable \
      d'avoir un cluster fonctionnel rapidement dans docker et ainsi avoir une intégration \
      continue utilisable pour vos applications.",
    },
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "HYPERTUBE",
    subtitle: {
      en: "A simple youtube app",
      fr: "A simple youtube app",
    },
    logo: "/images/portfolio/hypertube/logo.png",
    pdf: "/images/portfolio/hypertube/hypertube/pdf",
    pictures: [],
    description: {
      en: "Hypertube is a Youtube-like website, that allow sharing of videos with BitTorrent \
      protocol to its users. It implement most functionnality met on the majority of \
      streaming websites.",
      fr: "Hypertube est un site Youtube-like permettant aux utilisateurs de partager \
      des videos via le protocole BitTorrent. Il implemente les fonctionnalités de base \
      rencontrées sur la majorité des sites de streaming de video.",
    },
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "MUSICROOM",
    subtitle: {
      en: "A simple deezer app",
      fr: "A simple deezer app",
    },
    logo: "/images/portfolio/musicroom/logo.png",
    pdf: "/images/portfolio/musicroom/music-room.pdf",
    pictures: [],
    description: {
      en: "Project in partnership with Deezer. In a group, create a complete mobile app of collaborative \
      playlist using the SDK and API of Deezer. On the menu, mobile native development, \
      back-end development and creation of API REST.",
      fr: "Musicroom est une application mobile en partenariat avec Deezer. Elle permet de realiser \
      des playlist collaborative en utilisant les SDK et API de Deezer. Du \
      développement natif mobile, du développement de back-end et de la création d'API REST.",
    },
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "BALANCINGBANK",
    subtitle: {
      en: "A simple bank app",
      fr: "A simple bank app",
    },
    logo: "/images/portfolio/balancing_bank/logo.png",
    pdf: "",
    pictures: [],
    description: {
      en: "Projet web, ou l'objectif est de realiser une application capable de recupere \
      les releves de compts sous format pdf, pour les traiter et mettre en avant les depenses \
      mensuelles de l'utilisateur",
      fr: "Balancing-Bank lit vos releves de comptes sous format pdf, puis traite et agence \
      les donnees de maniere comprehensible pour vous permettre de mieux vous y retrouver.",
    },
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "KOODIBRIL",
    subtitle: {
      en: "A simple colibri app",
      fr: "Une simple app de colibri",
    },
    logo: "/images/portfolio/koodibril/logo.png",
    pdf: "",
    pictures: [
      "/images/portfolio/koodibril/1.png",
      "/images/portfolio/koodibril/3.png",
      "/images/portfolio/koodibril/3.png",
      "/images/portfolio/koodibril/4.png",
    ],
    description: {
      fr: "Portfolio sous babylonjs, une librairie travaillant avec webGl, qui permet l'utilisation \
      de l'acceleration graphique pour le rendu d'une page web. Dans ce projet, j'ai egalement realiser \
      l'integralite des modeles 3D sous blender, ainsi que leurs animations. La generation de la foret \
      est effectuer de maniere aleatoire a chaque generation de rangs",
      en: "Portfolio made with babylonjs, a webgl library, wich allow graphic acceleration to render \
      website frontend. In this project I realised all 3D models under blender, and their animations. The \
      forest generation is random.",
    },
    link: "https://koodibril.com",
    git: "https://github.com/koodibril/koodibril",
    technos: [
      "devicon-angularjs-plain-wordmark colored",
      "devicon-devicon-plain-wordmark colored",
      "devicon-spring-plain-wordmark colored",
      "devicon-mongodb-plain-wordmark colored",
      "devicon-opengl-plain-wordmark colored",
    ],
  },
  {
    name: "MIES HOUSE",
    subtitle: {
      en: "A simple logistic app",
      fr: "A simple logistic app",
    },
    logo: "/images/portfolio/mies_house/logo.png",
    pdf: "",
    pictures: [],
    description: {
      en: "Développer de nouvelles fonctionnalités, veiller a la robustesse, a l'extensibilité \
      et a la reutilisabilité du code. Mettre en place le CI/CD a l'aide de github action, ansible, gcp \
      et kubernetes. Mise a jour de la messagerie instantanée, \
      Réaliser un serveur mail en lien avec la messagerie instantanée, \
      Aider au développement de fonctionnalités diverses front (angular) et back (spring)",
      fr: "Mies House est une entreprise developpant des logiciels BtoB. J'ai participer a la realisation \
      du logiciel Fall, qui permet la mise en relation des differents acteurs lors du transport logistique \
      d'un colis.",
    },
    link: "https://mieshouse.com/",
    git: "",
    technos: [
      "devicon-angularjs-plain-wordmark colored",
      "devicon-spring-plain-wordmark colored",
      "devicon-postgresql-plain-wordmark colored",
      "devicon-googlecloud-plain-wordmark colored",
    ],
  },
  {
    name: "UBEBEST",
    subtitle: {
      en: "A simple eco app",
      fr: "A simple eco app",
    },
    logo: "/images/portfolio/ubebest/logo.png",
    pdf: "",
    pictures: [
      "/images/portfolio/ubebest/1.png",
      "/images/portfolio/ubebest/2.png",
      "/images/portfolio/ubebest/3.png",
    ],
    description: {
      en: "Amelioration du backend, migration de scripts sous gcp afin de repartir la charge \
      du serveur, creation d'un module strapi pour controler le serveur de scripts, et les lancer si \
      necessaires. Mise a jour des scrappers. Mise a jour des scripts de calcul d'ecoscore, realisation \
      de scripts de congregation de donnees. Creation d'un module strapi d'import et d'export de donnees",
      fr: "Ubebest (Qweeko) est une entreprise qui se veut actrice dans la crise environnementale. La \
      plateforme qu'ils proposent permet de comparer les prix des electromenager afin de selection celui \
      avec le moins d'impact lors de sa fabrication, son transport, sa duree et sa fin de vie.",
    },
    link: "https://ubebest.com/",
    git: "",
    technos: [
      "devicon-react-original-wordmark colored",
      "devicon-nodejs-plain-wordmark colored",
      "devicon-postgresql-plain-wordmark colored",
      "devicon-googlecloud-plain-wordmark colored",
    ],
  },
  {
    name: "FRACTOL",
    subtitle: {
      en: "A simple fractal app",
      fr: "A simple fractal app",
    },
    logo: "/images/portfolio/fractol/logo.png",
    pdf: "/images/portfolio/fractol/fr.subject.pdf",
    pictures: [],
    description: {
      en: "Discover 2D programming and the psychedelic universe of fractals in this project, \
      using minilibX.",
      fr: "Fractol est un site representant l'univers psychédelique des fractales. Amusez-vous \
      en modifiant divers parametres et regarder votre fractale evoluer !",
    },
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "UNIQU'AIR",
    subtitle: {
      en: "A simple radio app",
      fr: "A simple radio app",
    },
    logo: "/images/portfolio/uniqu_air/logo.png",
    pdf: "",
    pictures: [],
    description: {
      en: "Projet web, ou l'objectif est de realiser une radio web utilisant la blockchain \
      et l'api spotify, pour assurer l'auditeur qu'il n'ecouterat jamais la meme musique.",
      fr: "Toujours a la recherche d'une nouvelle musique ? Marre de vos playlist en boucle ? \
      Uniqu'air combine la blockchain d'etherium et l'api spotify, pour assurer a l'auditeur \
      qu'il n'ecouterat jamais la meme musique.",
    },
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "RED-TETRIS",
    subtitle: {
      en: "A simple tetris app",
      fr: "A simple tetris app",
    },
    logo: "/images/portfolio/red_tetris/logo.png",
    pdf: "/images/portfolio/red_tetris/tetris.pdf",
    pictures: [],
    description: {
      en: "The goal of this project is to develop a multiplayer tetris game on the network with \
      a set of software exclusively from Full Stack Javascript.",
      fr: "L'objectif de ce projet est de développer un jeu de tetris multijoueurs en réseau à \
      partir d'une pile logicielle exclusivement Full Stack Javascript",
    },
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "LEMIN",
    subtitle: {
      en: "A simple ant app",
      fr: "A simple ant app",
    },
    logo: "/images/portfolio/lemin/logo.png",
    pdf: "/images/portfolio/lemin/lemin.pdf",
    pictures: [],
    description: {
      en: "Your ant colony must move from on point to another. How do you do it in the shortest \
      time possible? This project will get you acquainted with graph traversal \
      algorithms: your program will have to intelligently select paths and precise \
      movements used by the ants",
      fr: "Votre colonie de fourmis doit se déplacer d'un point à un autre. Mais comment \
      faire pour que cela prenne le moins de temps possible ? Ce projet vous fait \
      découvrir les algorithmes de parcours de graphe : votre programme devra sélectionner \
      intelligemment les chemins et les mouvements précis qui doivent être empruntés par ces fourmis.",
    },
    link: "",
    git: "",
    technos: ["devicon-c-plain-wordmark colored"],
  },
  {
    name: "SALESRAMP",
    subtitle: {
      en: "A simple SaaS app",
      fr: "A simple SaaS app",
    },
    logo: "/images/portfolio/salesramp/logo.png",
    pdf: "",
    pictures: [],
    description: {
      en: "",
      fr: "Salesramp est une solution BtoB qui permet de mieux gerer vos equipes commerciales. Elle se \
      connecte directement aux API des plus grands CRM du marche, Zoho, salesforce, sellsy, ... Et recupere \
      pour vous les donnes de vos sales afin d'automatisez le calcul de vos plans de commission.",
    },
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "COREWAR",
    subtitle: {
      en: "A simple war app",
      fr: "A simple war app",
    },
    logo: "/images/portfolio/corewar/logo.png",
    pdf: "/images/portfolio/corewar/corewar.fr.pdf",
    pictures: [],
    description: {
      en: "This project involves creating a virtual arena, and having simplistic-language programs \
      fight each other. You will thus get acquainted with VM conception (with instructions it \
      recognizes, registers, etc) and compilation problems of an assembly language in bytecode. \
      In bonus, the pleasure to have your champions fight in the arena.",
      fr: "Corewar est une simulation de combat. Entrez dans une arène virtuelle et affronter des \
      programmes codés dans un langage simpliste (assembleur). Les programmes s'affrontent sur 512 \
      octet de RAM pour la supprematie absolue du terrain.",
    },
    link: "",
    git: "",
    technos: ["devicon-c-plain-wordmark colored"],
  },
  {
    name: "PUSH_SWAP",
    subtitle: {
      en: "A simple stack app",
      fr: "A simple stack app",
    },
    logo: "/images/portfolio/pushswap/logo.png",
    pdf: "/images/portfolio/pushswap/push_swap.fr.pdf",
    pictures: [],
    description: {
      en: "This project involves sorting data on a stack, with a limited set of instructions, \
      and the smallest number of moves. To make this happen, you will have to manipulate \
      various sorting algorithms and choose the most appropriate solution(s) for optimized data sorting.",
      fr: "Push Swap aborde la complexite algorithmique: comment obtenir une pile trier avec un set \
      d'instructions limité, en moins de coups possibles. Plusieurs algorithme sont abordes selon \
      le nombre d'entree a trier.",
    },
    link: "",
    git: "",
    technos: ["devicon-c-plain-wordmark colored"],
  },
  {
    name: "Méta-Coaching",
    subtitle: {
      en: "A simple medical app",
      fr: "A simple medical app",
    },
    logo: "/images/portfolio/meta_coaching/logo.png",
    pdf: "",
    pictures: [],
    description: {
      en: "",
      fr: "Meta-coaching est un portail medical en ligne. Il fournit des programmes de Coaching \
      sante realise par des professionnel afin d'apprendre a ses utilisateurs a gerer leur sommeil, \
      stree, equilibre alimentaire ou forme.",
    },
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "AlphaBril",
    subtitle: {
      en: "Florian-Marie Doucet",
      fr: "Florian-Marie Doucet",
    },
    logo: "/images/portfolio/alphabril/logo.png",
    pdf: "/images/portfolio/alphabril/cv.pdf",
    pictures: [
      "https://dam.malt.com/txnsh1cmtklme34ypjva?gravity=face&func=face&face_margin=60&w=440&h=440&force_format=webp",
    ],
    description: {
      en: "Développeur en freelance depuis 3 ans, j'accompagne mes clients en leur apportant \
      des conseils et en développant leurs plateformes complètes. Je suis capable de mener a bien \
      un projet depuis la mise en place de son architecture, jusqu'à sa sortie en production en \
      passant par son CI/CD. Je travaille depuis plus d'un an sur des projets web en React/Nodejs avec \
      des databases allant de Mysql a Mongo en passant par Neo4j et Postgres.",
      fr: "Développeur en freelance depuis 3 ans, j'accompagne mes clients en leur apportant \
      des conseils et en développant leurs plateformes complètes. Je suis capable de mener a bien \
      un projet depuis la mise en place de son architecture, jusqu'à sa sortie en production en \
      passant par son CI/CD. Je travaille depuis plus d'un an sur des projets web en React/Nodejs avec \
      des databases allant de Mysql a Mongo en passant par Neo4j et Postgres.",
    },
    link: "https://www.malt.fr/profile/doucetflorianmarie",
    git: "https://github.com/AlphaBril",
    technos: [],
  },
];
