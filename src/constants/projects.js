import DashboardImage from "../assets/projectAssets/dashboard.png"
import DashboardIcon from "../assets/projectAssets/smallDashboard.png";
import passGen from "../assets/projectAssets/passwordGenerator.png"
import pixelArt from "../assets/projectAssets/pixelArt.png"
import blockRotate from "../assets/projectAssets/blockRotate.png"
import sortAlgorithm from "../assets/projectAssets/sortAlgorithms.png"

export const projects = [
  {
    title: "React Admin Dashboard",
    hoverImage: DashboardImage,
    iconImage: DashboardIcon,
    shortDesc: "A versatile tool integrating datasets for comprehensive overviews and centralized data storage.",
    longDesc: "This project is a versatile tool designed for seamless integration with diverse datasets. It offers users a comprehensive overview of data at a glance while serving as a centralized repository for all related information.",
    tags: ["react", "tailwind", "data"],
    link: "https://kainebinch.dev/adminDashboard",
  },
  {
    title: "Password Generator",
    hoverImage: "",
    iconImage: passGen,
    shortDesc: "A simple password generator along with a copy function for easy to use password creation.",
    longDesc: "A simple and straightforward password generator with a view to simplify the password generation process with unique and secure passwords. This project also includes a copy function to further ease the process.",
    tags: ["HTML", "Javascript", "CSS"],
    link: "https://kainebinch.dev/PasswordGenerator"
  },
  {
    title: "Pixel Art Generator",
    hoverImage: "",
    iconImage: pixelArt,
    shortDesc: "A grid generator with a color wheel that allows you to paint and erase each element within the grid",
    longDesc: "A modifiable grid generator featuring a color wheel for painting and erasing grid elements. This allows you to paint and erase elements, creating unique designs.",
    tags: ["HTML", "Javascript", "CSS"],
    link: "https://kainebinch.dev/Grid-Painter"
  },
  {
    title: "Rotating Blocks",
    hoverImage: "",
    iconImage: blockRotate,
    shortDesc: "A background of grey crosses that, on mouse entry, change to white squares which creates a painting effect.",
    longDesc: "A background of grey crosses that, on mouse entry, change to white squares which creates a painting effect.",
    tags: ["HTML", "Javascript", "p5.js"],
    link: "https://kainebinch.dev/Rotating-Blocks"
  },
  {
    title: "Sorting Algorithms",
    hoverImage: "",
    iconImage: sortAlgorithm,
    shortDesc: "Sorting algorithms with detailed implementations and visualizations, focusing on algorithm analysis",
    longDesc: "Sorting algorithms with detailed implementations and visualizations, focusing on algorithm analysis",
    tags: ["HTML", "Javascript", "p5.js"],
    link: "https://kainebinch.dev/Sorting-Algorithms"
  },
]