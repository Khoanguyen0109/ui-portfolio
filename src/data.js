import figma from "./assets/tools/figma.png";
import ai from "./assets/tools/ai.png";
import ps from "./assets/tools/ps.png";
import xd from "./assets/tools/xd.png";

import us from "./assets/skill/research.svg";
import low from "./assets/skill/UI.png";
import proto from "./assets/skill/Protype.jpg";

import navIcon1 from "./assets/img/nav-icon1.svg";

import nobeeThumnail from "./assets/nobee/38.png";
import nobeepage from "./assets/nobee/37.png";

import carNowThumb from "./assets/carnow/19.png";
import carnow from "./assets/carnow/1.png";
import autoThumb from "./assets/nowauto/19.png";
import auto from "./assets/nowauto/20.png";

import saas from "./assets/saas/37.png";
import saasThumb from "./assets/saas/38.png";
import tiktokthumb from "./assets/tiktok/45.png";
import tiktok from "./assets/tiktok/46.png";
import thumbDesign from "./assets/design/thumb.jpg";
import design from "./assets/design/Content.jpg";
import cinethumbe from "./assets/cine/cinethumb.jpg";
import cine from "./assets/cine/cine.jpg";

const projects = [
  {
    id: 1,
    name: "Design System",
    brief: "USA housing rental app",
    thumbnail: thumbDesign,
    description: " ",
    images: [
      {
        id: 2,
        url: design,
      },
    ],
  },
  {
    id: 134432,
    name: "Cine",
    brief: "USA housing rental app",
    thumbnail: cinethumbe,
    description: " ",
    images: [
      {
        id: 2,
        url: cine,
      },
    ],
  },
  {
    id: 2,
    name: "Nobee",
    brief: "USA housing rental app",
    thumbnail: nobeeThumnail,
    description: " ",
    images: [
      {
        id: 2,
        url: nobeepage,
      },
    ],
  },
  {
    id: 242,
    name: "Tik tok",
    thumbnail: tiktokthumb,
    description: " ",
    images: [
      {
        id: 2,
        url: tiktok,
      },
    ],
  },
  {
    id: 3,
    name: "Car Now",
    brief: "Used car sales app",
    description: " ",
    thumbnail: carNowThumb,
    images: [
      {
        id: 1,
        url: carnow,
      },
    ],
  },
  {
    id: 4,
    name: "Now Auto",
    brief: "Used car buying app for dealers",
    description: " ",
    thumbnail: autoThumb,
    images: [
      {
        id: 1,
        url: auto,
      },
    ],
  },

  {
    id: 1,
    name: "Now",
    brief: "",
    description: " ",
    thumbnail: saasThumb,
    images: [
      {
        id: 1,
        url: saas,
      },
    ],
  },
];

const skills = [
  {
    name: "User Research",
    url: us,
  },
  {
    name: "Low to high Fidelity Design",
    url: low,
  },
  {
    name: "Prototyping & Usability Testing",
    url: proto,
  },
];

const tools = [
  {
    name: "Fignma",
    url: figma,
  },
  {
    name: "Xd",
    url: xd,
  },
  {
    name: "Ai",
    url: ai,
  },
  {
    name: "Ps",
    url: ps,
  },
];

const links = [
  {
    name: "Linkedin",
    icon: navIcon1,
    link: "https://www.linkedin.com/in/hien-nguyen-449761181/",
  },
];
export { projects, skills, tools, links };
