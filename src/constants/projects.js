import alliance from "../assets/projectAssets/alliance.png"
import alliance2 from "../assets/projectAssets/alliance2.png"
import alliance3 from "../assets/projectAssets/alliance3.png"
import teamb from "../assets/projectAssets/teamb.png"
import teamb2 from "../assets/projectAssets/teamb2.png"
import teamb3 from "../assets/projectAssets/teamb3.png"
import teamb4 from "../assets/projectAssets/teamb4.png"
import trilodex1 from "../assets/projectAssets/trilodex1.png"
import trilodex2 from "../assets/projectAssets/trilodex2.png"
import DashboardImage from "../assets/projectAssets/dashboard.png"
import DashboardImage2 from "../assets/projectAssets/dashboard2.png"
import DashboardImage3 from "../assets/projectAssets/dashboard3.png"
import passGen from "../assets/projectAssets/passwordGenerator.png"
import pixelArt from "../assets/projectAssets/pixelArt.png"
import pixelArt2 from "../assets/projectAssets/pixelArt2.png"
import blockRotate from "../assets/projectAssets/blockRotate.png"
import sortAlgorithm from "../assets/projectAssets/sortAlgorithms.png"
import sortAlgorithm2 from "../assets/projectAssets/sortAlgorithms2.png"
import calculator from "../assets/projectAssets/calculator.png"

/*
  {
    title: "",        - heading for project
    iconImage: "",    - thumbnail shown on the card
    images: [],       - gallery shown in the modal (1 = no arrows, 2+ = arrows)
    shortDesc: "",    - short text on the card
    longDesc: "",     - full description in the modal
    tags: [],         - array of tags shown in the modal  
    link: ""          - link to project, shown in the modal
  },
*/

export const projects = [
  // {
  //   title: "",
  //   iconImage: "",
  //   images: [],
  //   shortDesc: "",
  //   longDesc: "",
  //   tags: [],
  //   link: ""
  // },
  {
    title: "Nottinghamshire Golf Alliance",
    iconImage: alliance,
    images: [alliance, alliance2, alliance3],
    shortDesc: "A full-stack platform uniting Nottinghamshire golfers with live leaderboards and event scheduling, all managed through a secure admin panel.",
    longDesc: "A comprehensive golf platform built for the Nottinghamshire Golf Alliance, bringing together clubs and players across the county. Features include a real-time Order of Merit leaderboard, event and tee time management, a searchable course directory, and a secure Auth0-protected admin panel for importing results via CSV and Excel.",
    tags: ["React", "Strapi", "Auth0"],
    link: "https://www.nottsalliance.com"
  },
  {
    title: "TeamB Coaching",
    iconImage: teamb,
    images: [teamb, teamb2, teamb3, teamb4],
    shortDesc: "A professional football coaching website for a UK-based academy with programme details and integrated contact forms.",
    longDesc: "A clean, responsive single-page site for TeamB Coaching, a UK football academy offering age-specific training programmes. Built with React and Tailwind, it features programme breakdowns by age group, coach profiles, a live embedded Facebook feed, and a fully validated contact and registration form powered by EmailJS.",
    tags: ["React", "Tailwind", "EmailJS"],
    link: "https://teambcoaching.co.uk"
  },
  {
    title: "Trilodex",
    iconImage: trilodex1,
    images: [trilodex1, trilodex2],
    shortDesc: "Portfolio site for an independent software studio challenging bloated enterprise software with simple, affordable apps.",
    longDesc: "The public-facing site for Trilodex, an independent software studio built around a 'Trinity' philosophy — simple, purposeful, and affordable. The site showcases the studio's products and values through smooth Framer Motion animations and a glass-morphism design, built with Next.js, TypeScript, and Tailwind.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://trilodex.com"
  },
  // {
  //   title: "Karris & Kaine Wedding",
  //   iconImage: "",
  //   images: [],
  //   shortDesc: "A personalised wedding website with RSVP management, meal selection, and a guest admin dashboard.",
  //   longDesc: "A bespoke wedding site for our November 2026 celebration, featuring a full RSVP system with family grouping, 3-course meal selection, and dietary preference tracking. Backed by Supabase for real-time data, with a password-protected admin dashboard for managing guests and exporting lists. Built with Next.js, TypeScript, and Tailwind.",
  //   tags: ["Next.js", "TypeScript", "Supabase"],
  //   link: "https://karriskainewedding.com"
  // },
  {
    title: "Password Generator",
    iconImage: passGen,
    images: [passGen],
    shortDesc: "A simple password generator along with a copy function for easy to use password creation.",
    longDesc: "A simple and straightforward password generator with a view to simplify the password generation process with unique and secure passwords. This project also includes a copy function to further ease the process.",
    tags: ["HTML", "Javascript", "CSS"],
    link: "https://kainebinch.dev/PasswordGenerator"
  },
  {
    title: "Pixel Art Generator",
    iconImage: pixelArt,
    images: [pixelArt, pixelArt2],
    shortDesc: "A grid generator with a color wheel that allows you to paint and erase each element within the grid",
    longDesc: "A modifiable grid generator featuring a color wheel for painting and erasing grid elements. This allows you to paint and erase elements, creating unique designs.",
    tags: ["HTML", "JavaScript", "CSS"],
    link: "https://kainebinch.dev/Grid-Painter"
  },
  {
    title: "React Admin Dashboard",
    iconImage: DashboardImage,
    images: [DashboardImage, DashboardImage2, DashboardImage3],
    shortDesc: "A versatile tool integrating datasets for comprehensive overviews and centralized data storage.",
    longDesc: "This project is a versatile tool designed for seamless integration with diverse datasets. It offers users a comprehensive overview of data at a glance while serving as a centralized repository for all related information.",
    tags: ["React", "Tailwind", "Data"],
    link: "https://kainebinch.dev/adminDashboard",
  },
  {
    title: "Rotating Blocks",
    iconImage: blockRotate,
    images: [blockRotate],
    shortDesc: "A background of grey crosses that, on mouse entry, change to white squares which creates a painting effect.",
    longDesc: "A background of grey crosses that, on mouse entry, change to white squares which creates a painting effect.",
    tags: ["HTML", "JavaScript", "p5.js"],
    link: "https://kainebinch.dev/Rotating-Blocks"
  },
  {
    title: "Calculator",
    iconImage: calculator,
    images: [calculator],
    shortDesc: "An easy-to-use calculator designed to perform fundamental arithmetic tasks with simplicity and precision.",
    longDesc: "An easy-to-use calculator designed to perform fundamental arithmetic tasks with simplicity and precision.",
    tags: ["HTML", "JavaScript", "p5.js"],
    link: "https://kainebinch.dev/Calculator"
  },
  {
    title: "Sorting Algorithms",
    iconImage: sortAlgorithm,
    images: [sortAlgorithm, sortAlgorithm2],
    shortDesc: "Sorting algorithms with detailed implementations and visualizations, focusing on algorithm analysis",
    longDesc: "Sorting algorithms with detailed implementations and visualizations, focusing on algorithm analysis",
    tags: ["HTML", "JavaScript", "p5.js"],
    link: "https://kainebinch.dev/Sorting-Algorithms"
  },
]
