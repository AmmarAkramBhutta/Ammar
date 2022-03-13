// import ph from "./img/ph.jpeg";
import teamapp from "./img/teamapp.jpg";
import chatapp from "./img/chatapp.jpg";
import PowerCell from "./img/powercell.png";
import musicapp from "./img/musicapp.png";
import dc from "./img/dc.jpg";
import jdiary from "./img/jdiary.png";
import Homepage from "./img/Homepage.jpg";

const projectApi = [
  // FULL STACK PROJECTS
  {
    id: "fullstack",
    url: "/projects/jdiary",
    name: "jDiary",
    link: "https://www.npmjs.com/package/jdiary",
    tags: ["TypeScript", "React.js", "Node", "Webassembly"],
    description:
      "It is a complex app, an interactive browser-based coding environment built with the latest web technologies. It's like a Jupyter Notebook, but for Javascript, with many additional features added in.",
    image: jdiary,
  },

  // FRONTEND PROJECTS
  {
    id: "frontend",
    url: "/projects/music-app",
    name: "Music App",
    link: "https://ammarmusic.netlify.app/",
    tags: ["React.js"],
    description:
      "A simplistic music website idea, fetches music from a remote API to play them on a sleek interface.",
    image: musicapp,
  },
  {
    id: "frontend",
    url: "/projects/a-gym-website",
    name: "A Gym Website",
    link: "https://ammarakrambhutta.github.io/PowerCell/",
    tags: ["TailwindCSS", "JavaScript"],
    description:
      "This is a main page for a concept project - a gym fitness application. This website is fast, interactive and fully responsive.",
    image: PowerCell,
  },
  // {
  //   id: "frontend",
  //   url: "/projects/photography-website",
  //   name: "Photography Website",
  //   link: "https://eager-poitras-56fed6.netlify.app/",
  //   tags: ["CSS", "JavaScript", "HTML"],
  //   description:
  //     "This is a main page for a concept project - a gym fitness application. This website is fast, interactive and fully responsive.",
  //   image: ph,
  // },

  // BACKEND PROJECTS
  // {
  //   id: "backend",
  //   url: "/projects/backend",
  //   name: "Backend",
  //   link: "https://eager-poitras-56fed6.netlify.app/",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   description:
  //     "This is a concept Website for Photography - includes simplistic design made from HTML, CSS and JavaScript.",
  //   image: ph,
  // },

  // CMS PROJECTS
  {
    id: "cms",
    url: "/projects/news-website",
    name: "Developer News Website",
    link: "https://dev.cell/",
    tags: ["Wordpress", "PHP", "JavaScript"],
    description:
      "A website of a complex news site design. It is for developers that will help the professionals solve problems and get latest insights from their field.",
    image: dc,
  },
  {
    id: "cms",
    url: "/projects/chat-app",
    name: "Chat App Website",
    link: "https://chat-app-homepage.webflow.io/",
    tags: ["Webflow"],
    description:
      "This is a homepage design and build for a concept project - a chat application. I designed the page first then built a responsive web page using Webflow.",
    image: chatapp,
  },
  {
    id: "cms",
    url: "/projects/team-app",
    name: "Team App Website",
    link: "https://team-app.webflow.io/",
    tags: ["Webflow"],
    description:
      "Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I have built the website and the blog in Webflow which has one of the best CMS for blog hosting.",
    image: teamapp,
  },
  {
    id: "cms",
    url: "/projects/webdesign-portfolio",
    name: "Web Design Portfolio Website",
    link: "https://ammarakram2.webflow.io/",
    tags: ["Webflow"],
    description:
      "An interactive website to showcase my web design skills built using a powerful content management system, Webflow",
    image: Homepage,
  },

  // UI / UX PROJECTS
  // {
  //   id: "uiux",
  //   url: "/projects/ammar-photography",
  //   name: "Web Design",
  //   link: "https://eager-poitras-56fed6.netlify.app/",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   description:
  //     "This is a concept Website for Photography - includes simplistic design made from HTML, CSS and JavaScript.",
  //   image: ph,
  // },
];

export default projectApi;
