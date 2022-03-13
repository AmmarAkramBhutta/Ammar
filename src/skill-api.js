import designIcon from "./img/idea.png";
import frontendIcon from "./img/frontend.png";
import backendIcon from "./img/backend.png";
import fullstackIcon from "./img/fullstack.png";
import cmsIcon from "./img/cms.png";

const skillApi = [
  {
    id: 1,
    image: designIcon,
    name: "Website Design, UI / UX",
    description:
      "Be it website or mobile app design, my clients get the product that has the best combination of outstanding user experience and visual aesthetics.",
    tags: ["Figma", "HTML", "CSS", "Webflow"],
  },
  {
    id: 2,
    image: frontendIcon,
    name: "Frontend Web Development",
    description:
      "I make frontend of websites using my design skills with cutting edge tools, techniques and standards with performance at priority.",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    id: 3,
    image: backendIcon,
    name: "Backend Web Development",
    description:
      "Building the server-side web application logic or integration of the work front-end developers do. I write the web services and APIs used by front-end developers and mobile application developers",
    tags: ["Python", "Node", "JavaScript", "Django"],
  },
  {
    id: 4,
    image: fullstackIcon,
    name: "Full Stack Development",
    description:
      "I develop both client and server software managing all the work of programming a browser, server along with databases.",
    tags: ["React", "Node", "SQL", "Django", "MongoDB"],
  },
  {
    id: 5,
    image: cmsIcon,
    name: "CMS Development",
    description:
      "Working with designers and content creators, I build tools that help others publish, edit, and maintain websites. These tools can be a website builder or a specially designed content management system.",
    tags: ["Wordpress", "Webflow"],
  },
];

export default skillApi;
