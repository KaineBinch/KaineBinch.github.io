export const personalInfo = {
  name: {
    first: "KAINE",
    last: "BINCH",
    full: "KAINE BINCH"
  },
  title: "Software Engineer",
  aboutMe: "Experienced Team Manager with a proven track record in the social care sector, specializing in fostering teamwork, empowering teams, and driving performance. Currently expanding my skill set into software development, with a focus on modern programming languages and frameworks. Passionate about continuous personal growth, I am eager to integrate my strong leadership and management skills into the tech industry, bringing a commitment to learning, innovation, and adaptability across various technologies."
};

export const technicalSkills = {
  languages: "JavaScript, TypeScript, PHP, SQL, HTML5, CSS, Markdown",
  frameworksLibraries: "React, VueJs, NodeJs, p5.js, Tailwind CSS, Framer Motion, GSAP, AOS",
  toolsTech: "Git & GitHub, Visual Studio Code, REST APIs, GraphQL, JSON, Yarn/NPM, Prettier, ESLint, Postman",
  versionControl: "Git (proficient with GitHub workflows, branches, pull requests, merging, rebasing)",
  databasesCMS: "PostgreSQL, MySQL, MongoDB, Strapi Headless CMS",
  cloudDevOps: "AWS Services, Docker Containerization, CI/CD Pipelines, GitHub Actions",
  deploymentHosting: "Docker, AWS (EC2, Lambda), GitHub Pages, Vercel, VPS hosting, Nginx, PM2",
  uiuxDesign: "Figma, Pixso, Adobe XD (wireframing, prototyping, design systems), Material UI, DaisyUI",
  testingDebugging: "Vitest, Jest, Mocha, Sinon, Chai, React Testing Library, Cypress (E2E testing)",
  collaborationTools: "Trello, Jira, MS Teams, Zoom, Confluence",
  methodologies: "Agile Development, Scrum, Test-Driven Development (TDD), Code Reviews, Pair Programming"
};

export const technicalSkillsArray = [
  { title: "Languages", text: technicalSkills.languages },
  { title: "Frameworks & Libraries", text: technicalSkills.frameworksLibraries },
  { title: "Tools & Technologies", text: technicalSkills.toolsTech },
  { title: "Version Control", text: technicalSkills.versionControl },
  { title: "Databases & CMS", text: technicalSkills.databasesCMS },
  { title: "Cloud & DevOps", text: technicalSkills.cloudDevOps },
  { title: "Deployment & Hosting", text: technicalSkills.deploymentHosting },
  { title: "UI/UX Design", text: technicalSkills.uiuxDesign },
  { title: "Testing & Debugging", text: technicalSkills.testingDebugging },
  { title: "Collaboration Tools", text: technicalSkills.collaborationTools },
  { title: "Methodologies", text: technicalSkills.methodologies }
];

export const contactInfo = {
  phone: {
    number: "07802 766962",
    link: "tel:07802766962"
  },
  email: {
    address: "kainebinch@live.com",
    link: "mailto:kainebinch@live.com"
  },
  location: {
    address: "Kimberley, Nottingham",
    link: "https://google.com/maps/place/Kimberley,+Nottingham/@52.9966447,-1.2752485,14.5z/data=!4m6!3m5!1s0x4879ea535219591b:0x92f219209af9e8f5!8m2!3d52.994062!4d-1.253579!16zL20vMDI4Nnli"
  },
  website: {
    url: "kainebinch.dev",
    link: "https://kainebinch.dev"
  }
};

export const onlineProfiles = [
  {
    platform: "GitHub",
    username: "kainebinch",
    icon: "fa-brands fa-github",
    link: "https://github.com/KaineBinch"
  },
  {
    platform: "LinkedIn",
    username: "kainebinch",
    icon: "fa-brands fa-linkedin",
    link: "https://linkedin.com/in/kainebinch"
  },
  {
    platform: "HackerRank",
    username: "kainebinch",
    icon: "fa-brands fa-hackerrank",
    link: "https://hackerrank.com/profile/kainebinch"
  },
  {
    platform: "Exercism",
    username: "kainebinch",
    iconOverride: true,
    link: "https://exercism.org/profiles/KaineBinch"
  }
];

export const education = {
  higherEducation: {
    institution: "Notts County FC",
    period: "2013-2015",
    qualification: "BTEC Level 3 Extended Diploma in Sport",
    grade: "Merit Merit Merit"
  },
  gcses: {
    institution: "Bluecoat Academy",
    period: "2007-2012",
    subjects: [
      { subject: "Maths", grade: "A" },
      { subject: "English", grade: "A" },
      { subject: "Science (Triple Award)", grade: "A" },
      { subject: "Physical Education", grade: "A" },
      { subject: "Religious Studies", grade: "A" },
      { subject: "Psychology", grade: "B" },
      { subject: "ICT", grade: "Merit" },
      { subject: "History", grade: "C" }
    ]
  }
};