export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: "/web.webp",
  },
  {
    title: "Software Engineer",
    icon: "/backend.webp",
  },
  {
    title: "UI Designer",
    icon: "/mobile.webp",
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.webp",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.webp",
  },
  {
    name: "bootstrap",
    icon: "/tech/bootstrap.webp",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.webp",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.webp",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.webp",
  },
  {
    name: "Three JS",
    icon: "/tech/threejs.webp",
  },
//   {
//     name: "Angular",
//     icon: "/tech/angular.svg",
//   },
  {
    name: "React JS",
    icon: "/tech/reactjs.webp",
  },
  {
    name: "Node JS",
    icon: "/tech/nodejs.svg",
  },
  {
    name: "Express JS",
    icon: "/tech/express.svg",
  },
  {
    name: "Mongo DB",
    icon: "/tech/mongodb.svg",
  },
  {
    name: "SQL",
    icon: "/tech/sql.svg",
  },
  {
    name: "git",
    icon: "/tech/git.webp",
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Relinns Technologies",
    icon: "/company/relinns.webp",
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023",
    points: [
      "Improving designs to make more user friendly with responsiveness.",
      "Designing User Interface (UI) for the problem statement.",
      "Analyzing the needs of customer in a website.",
      "User Experience improvements and feedbacks.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Ducktale IT Services",
    icon: "/company/ducktale.webp",
    iconBg: "#E6DEDD",
    date: "May 2023 - Dec 2023",
    points: [
      "Implemented backend functionalities and integrations on frontend.",
      "Developing and maintaining Websites",
      "Analyzing feedbacks and fixing bugs.",
      "Cleaning and optimizing code.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Itechnolabs",
    icon: "/company/itechnolabs.webp",
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Managed client communication effectively and providing technical support.",
      "Demonstrated proficiency in problem-solving and debugging techniques.",
      "Search Engine Optimization.",
      "Design and hosting Maintenance.",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Simranjeet kaur",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/simranjeet-kaur12/",
  },
  {
    id: 2,
    testimonial:
      "Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
    name: "Simranjeet kaur",
    image: "/tech/github.webp",
    link: "https://github.com/simran193",
  },
  {
    id: 3,
    testimonial:
      "Instagram is a visual platform that enables professionals to showcase their work, network with industry peers, and build their personal brand.",
    name: "Simranjeet kaur",
    image: "/socialmedia/instagram.webp",
    link: "https://www.instagram.com/official_.simran.___/",
  },
];

const projects = [
  {
    name: "E-commerce shop",
    description:
      "A Fully Responsive Angular and Node application build to buy and sell their products.",
    tags: [
      {
        name: "Angular",
        color: "red-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
    ],
    image: "/projectimg/dashboard.webp",
    source_code_link:
      "https://github.com/Simran193/Angular_shop",
  },
  {
    name: "E-Notebook",
    description:
      "E-Notebook is an application of react and node build to perform perations with notes like create, update, save, and delete etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient"
      }
    ],
    image: "/projectimg/Notesave.webp",
    source_code_link: "https://github.com/Simran193/E-Notebook",  
  },
  {
    name: "News Letter",
    description:
      "News letter is an react based application to show latest news about business, weather, stock-market etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: "/projectimg/provid.webp",
    source_code_link: "https://github.com/Simran193/News-letter",
  },
  {
    name: "Text Manipulator",
    description:
      "Text Manipulator is a react application build to perform certain operations with text like copy text, word count, filter and many more features are there.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "orange-text-gradient",
      }
    ],
    image: "/projectimg/text.webp",
    source_code_link: "https://github.com/Simran193/Text-Manipulator",
  },
  {
    name: "A 3D Developer Portfolio",
    description:
      "A responsive 3D Portfolio website which is made using Three.js a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL. It has a beautiful interface made using Tailwind CSS and React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "orange-text-gradient",
      },
      {
        name: "emailjs",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/portfoliosample.webp",
    source_code_link: "https://github.com/simran193/portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
