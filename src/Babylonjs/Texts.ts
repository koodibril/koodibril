export interface Application {
  name: string;
  subtitle: string;
  logo: string;
  pictures: string[];
  description: string;
  link: string;
  git: string;
  pdf: string;
  technos: string[];
}

export const applications: Application[] = [
  {
    name: "SWIFTY-COMPANION",
    subtitle: "A simple profile app",
    logo: "/images/portfolio/swifty_companion/logo.png",
    pdf: "/images/portfolio/swifty_companion/en.subject.pdf",
    pictures: [],
    description:
      "This project is an introduction to mobile programming. The goal is to create, an \
      application which will allow you to get infos about 42students, using the API.",
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "GRAPHIT",
    subtitle: "A simple db app",
    logo: "/images/portfolio/graphit/logo.png",
    pdf: "",
    pictures: [
      "/images/portfolio/graphit/1.png",
      "/images/portfolio/graphit/2.png",
      "/images/portfolio/graphit/3.png",
      "/images/portfolio/graphit/4.png",
    ],
    description:
      "Reprise du projet abandonne par deux developpeurs, remise a neuf du site, \
    correction de toutes les fonctionnalites implementes mais compromises. Developpement de nouvelles \
    fonctionnalites majeures, la modification des cases type 'Excel', l'import et l'export des csv \
    amelioration de la cartographie.",
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
    subtitle: "A simple fps app",
    logo: "/images/portfolio/babylon/logo.png",
    pdf: "",
    pictures: [
      "/images/portfolio/babylon/1.png",
      "/images/portfolio/babylon/2.png",
      "/images/portfolio/babylon/3.png",
    ],
    description:
      "Tuto d'initiation a l'openGl avec la librairie babylonjs, plus d'information \
    sur openclassroom",
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
    subtitle: "A simple instagram app",
    logo: "/images/portfolio/camagru/logo.png",
    pdf: "/images/portfolio/camagru/camagru.en.pdf",
    pictures: [
      "/images/portfolio/camagru/1.png",
      "/images/portfolio/camagru/2.png",
      "/images/portfolio/camagru/4.png",
    ],
    description:
      "This project is a warmup for web. You will need to realize, a small, instagram-like \
      website allowing its users to create and share photomontage. You will, from scratch, \
      implement basic functionnalities used by any website with a userbase",
    link: "https://camagru.koodibril.com/",
    git: "https://github.com/koodibril/camagru",
    technos: [
      "devicon-php-plain colored",
      "devicon-mysql-plain-wordmark colored",
    ],
  },
  {
    name: "SWIFTY-PROTEIN",
    subtitle: "A simple protein app",
    logo: "/images/portfolio/swifty_protein/logo.png",
    pdf: "/images/portfolio/swifty_protein/en.subject.pdf",
    pictures: [],
    description:
      "This project will give you the opportunity to create 3D scenes. For the most part, \
      you will make an application that models ligands in 3D. This will also help you to deepen \
      your knowledge of a mobile framework.",
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "WOODART",
    subtitle: "A simple wordpress",
    logo: "/images/portfolio/woodart/logo.png",
    pdf: "",
    pictures: [
      "/images/portfolio/woodart/1.png",
      "/images/portfolio/woodart/2.png",
      "/images/portfolio/woodart/3.png",
    ],
    description:
      "Realisation d'un wordpress simple pour mettre en avant les tableaux d'un artiste \
    (@passat_woodart) et lui permettre d'ajouter lui meme ces nouveaux tableau.",
    link: "https://passat-woodart.koodibril.com/",
    git: "",
    technos: [
      "devicon-wordpress-plain-wordmark colored",
      "devicon-mysql-plain colored",
    ],
  },
  {
    name: "MATCHA",
    subtitle: "A simple match app",
    logo: "/images/portfolio/matcha/logo.png",
    pdf: "/images/portfolio/matcha/matcha.pdf",
    pictures: [],
    description:
      "This second project will introduce a more evolved tool to create your web \
      applications: the micro-framework. We invite you to create, in the language \
      of your choice, a dating site. Interaction between users is the heart of the project!",
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
    subtitle: "A simple clean app",
    logo: "/images/portfolio/clean_app/logo.png",
    pdf: "",
    pictures: [],
    description:
      "Un script bash, utiliser pour generer le squelette d'un application type MERN avec de \
    bonnes pratiques (typescript, eslint, redux, etc). Implemente de nombreuses technologies Cf lien Github",
    link: "",
    git: "https://github.com/AlphaBril/clean-app",
    technos: [],
  },
  {
    name: "INCEPTION OF THINGS",
    subtitle: "A simple kubernetes implementation",
    logo: "/images/portfolio/iot/logo.png",
    pdf: "/images/portfolio/iot/en.subject.pdf",
    pictures: [],
    description:
      "This project aims to introduce you to kubernetes from a developer perspective. \
      You will have to set up small clusters and discover the mechanics of continuous \
      integration. At the end of this project you will be able to have a working cluster \
      in docker and have a usable continuous integration for your applications.",
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "HYPERTUBE",
    subtitle: "A simple youtube app",
    logo: "/images/portfolio/hypertube/logo.png",
    pdf: "/images/portfolio/hypertube/hypertube/pdf",
    pictures: [],
    description:
      "Last project in this series, the Hypertube project invites you to discover an \
      extremely powerful tool category: MVC frameworks. You will learn how to manipulate \
      a MVC, in the language of your choice, to create a streaming site of videos downloaded via the BitTorrent protocol.",
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "MUSICROOM",
    subtitle: "A simple deezer app",
    logo: "/images/portfolio/musicroom/logo.png",
    pdf: "/images/portfolio/musicroom/music-room.pdf",
    pictures: [],
    description:
      "Project in partnership with Deezer. In a group, create a complete mobile app of collaborative \
      playlist using the SDK and API of Deezer. On the menu, mobile native development, \
      back-end development and creation of API REST.",
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "BALANCINGBANK",
    subtitle: "A simple bank app",
    logo: "/images/portfolio/balancing_bank/logo.png",
    pdf: "",
    pictures: [],
    description:
      "Projet web, ou l'objectif est de realiser une application capable de recupere \
    les releves de compts sous format pdf, pour les traiter et mettre en avant les depenses \
    mensuelles de l'utilisateur",
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "KOODIBRIL",
    subtitle: "A simple colibri app",
    logo: "/images/portfolio/koodibril/logo.png",
    pdf: "",
    pictures: [
      "/images/portfolio/koodibril/1.png",
      "/images/portfolio/koodibril/3.png",
      "/images/portfolio/koodibril/4.png",
    ],
    description:
      "Portfolio sous babylonjs, une librairie travaillant avec webGl, qui permet l'utilisation \
      de l'acceleration graphique pour le rendu d'une page web. Dans ce projet, j'ai egalement realiser \
      l'integralite des modeles 3D sous blender, ainsi que leurs animations. La generation de la foret \
      est effectuer de maniere aleatoire a chaque generation de rangs. Il existe exactement ",
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
    subtitle: "A simple logistic app",
    logo: "/images/portfolio/mies_house/logo.png",
    pdf: "",
    pictures: [],
    description:
      "Développer de nouvelles fonctionnalités, veiller a la robustesse, a l'extensibilité \
    et a la reutilisabilité du code. Mettre en place le CI/CD a l'aide de github action, ansible, gcp \
    et kubernetes. Mise a jour de la messagerie instantanée, \
    Réaliser un serveur mail en lien avec la messagerie instantanée, \
    Aider au développement de fonctionnalités diverses front (angular) et back (spring)",
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
    subtitle: "A simple eco app",
    logo: "/images/portfolio/ubebest/logo.png",
    pdf: "",
    pictures: [
      "/images/portfolio/ubebest/1.png",
      "/images/portfolio/ubebest/2.png",
      "/images/portfolio/ubebest/3.png",
    ],
    description:
      "Amelioration du backend, migration de scripts sous gcp afin de repartir la charge \
    du serveur, creation d'un module strapi pour controler le serveur de scripts, et les lancer si \
    necessaires. Mise a jour des scrappers. Mise a jour des scripts de calcul d'ecoscore, realisation \
    de scripts de congregation de donnees. Creation d'un module strapi d'import et d'export de donnees",
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
    subtitle: "A simple fractal app",
    logo: "/images/portfolio/fractol/logo.png",
    pdf: "/images/portfolio/fractol/fr.subject.pdf",
    pictures: [],
    description:
      "Discover 2D programming and the psychedelic universe of fractals in this project, using minilibX.",
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "UNIQU'AIR",
    subtitle: "A simple radio app",
    logo: "/images/portfolio/uniqu_air/logo.png",
    pdf: "",
    pictures: [],
    description:
      "Projet web, ou l'objectif est de realiser une radio web utilisant la blockchain \
    et l'api spotify, pour assurer l'auditeur qu'il n'ecouterat jamais la meme musique.",
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "RED-TETRIS",
    subtitle: "A simple tetris app",
    logo: "/images/portfolio/red_tetris/logo.png",
    pdf: "/images/portfolio/red_tetris/tetris.pdf",
    pictures: [],
    description:
      "The goal of this project is to develop a multiplayer tetris game on the network with \
      a set of software exclusively from Full Stack Javascript.",
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "LEMIN",
    subtitle: "A simple ant app",
    logo: "/images/portfolio/lemin/logo.png",
    pdf: "/images/portfolio/lemin/lemin.pdf",
    pictures: [],
    description:
      "Your ant colony must move from on point to another. How do you do it in the shortest \
      time possible? This project will get you acquainted with graph traversal \
      algorithms: your program will have to intelligently select paths and precise movements used by the ants",
    link: "",
    git: "",
    technos: ["devicon-c-plain-wordmark colored"],
  },
  {
    name: "SALESRAMP",
    subtitle: "A simple SaaS app",
    logo: "/images/portfolio/salesramp/logo.png",
    pdf: "",
    pictures: [],
    description: "",
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "COREWAR",
    subtitle: "A simple war app",
    logo: "/images/portfolio/corewar/logo.png",
    pdf: "/images/portfolio/corewar/corewar.fr.pdf",
    pictures: [],
    description:
      "This project involves creating a virtual arena, and having simplistic-language programs \
      fight each other. You will thus get acquainted with VM conception (with instructions it \
        recognizes, registers, etc) and compilation problems of an assembly language in bytecode. \
        In bonus, the pleasure to have your champions fight in the arena.",
    link: "",
    git: "",
    technos: ["devicon-c-plain-wordmark colored"],
  },
  {
    name: "PUSH_SWAP",
    subtitle: "A simple stack app",
    logo: "/images/portfolio/pushswap/logo.png",
    pdf: "/images/portfolio/pushswap/push_swap.fr.pdf",
    pictures: [],
    description:
      "This project involves sorting data on a stack, with a limited set of instructions, \
      and the smallest number of moves. To make this happen, you will have to manipulate \
      various sorting algorithms and choose the most appropriate solution(s) for optimized data sorting.",
    link: "",
    git: "",
    technos: ["devicon-c-plain-wordmark colored"],
  },
  {
    name: "Méta-Coaching",
    subtitle: "A simple medical app",
    logo: "/images/portfolio/meta_coaching/logo.png",
    pdf: "",
    pictures: [],
    description: "",
    link: "",
    git: "",
    technos: [],
  },
  {
    name: "AlphaBril",
    subtitle: "Florian-Marie Doucet",
    logo: "/images/portfolio/alphabril/logo.png",
    pdf: "/images/portfolio/alphabril/cv.pdf",
    pictures: [
      "https://dam.malt.com/txnsh1cmtklme34ypjva?gravity=face&func=face&face_margin=60&w=440&h=440&force_format=webp",
    ],
    description:
      "Développeur en freelance depuis 3 ans, j'accompagne mes clients en leur apportant \
    des conseils et en développant leurs plateformes complètes. Je suis capable de mener a bien \
    un projet depuis la mise en place de son architecture, jusqu'à sa sortie en production en \
    passant par son CI/CD. Je travaille depuis plus d'un an sur des projets web en React/Nodejs avec \
    des databases allant de Mysql a Mongo en passant par Neo4j et Postgres.",
    link: "https://www.malt.fr/profile/doucetflorianmarie",
    git: "https://github.com/AlphaBril",
    technos: [],
  },
];
