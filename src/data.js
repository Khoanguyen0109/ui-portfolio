import tabula1 from "./assets/tabula/Thumbnail.png";
import tabula2 from "./assets/tabula/2 (1).png";
import tabula3 from "./assets/tabula/3 (1).png";

import loanThumb from "./assets/loan/Thumbnail (1).png";
import loan1 from "./assets/loan/1.png";
import loan2 from "./assets/loan/2.png";
import loan3 from "./assets/loan/3.png";
import loan4 from "./assets/loan/4.png";
import loan5 from "./assets/loan/5.png";
import loan6 from "./assets/loan/6.png";
import loanVideo1 from "./assets/loan/lender mode.mp4";

import figma from "./assets/tools/figma.png";
import ai from "./assets/tools/ai.png";
import ps from "./assets/tools/ps.png";
import xd from "./assets/tools/xd.png";

import us from "./assets/skill/research.svg";
import low from "./assets/skill/UI.png";
import proto from "./assets/skill/Protype.jpg";

import scb1 from "./assets/scb/1.png";
import scb2 from "./assets/scb/2.png";

import navIcon1 from "./assets/img/nav-icon1.svg";
import navIcon2 from "./assets/img/nav-icon2.svg";

import nobeeThumnail from "./assets/nobee/thumb.jpg";
import nobeepage from "./assets/nobee/page.png";
import nobeevideo from "./assets/nobee/4906850406635748938.mp4";

import carNowThumb from "./assets/carnow/Carnow-1.jpg";
import carnow from "./assets/carnow/Carnow.jpg";
import autoThumb from "./assets/nowauto/Nowauto-1.jpg";
import auto from "./assets/nowauto/Nowauto.jpg";

import saas from "./assets/saas/saas.jpg";
import saasThumb from "./assets/saas/saas_thumb.jpg";
const projects = [
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
    name: "[Saas] Property management",
    brief:
      "Self managing your rental properties and applications with Nobee SaaS",
    description: " ",
    thumbnail: saasThumb,
    images: [
      {
        id: 1,
        url: saas,
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
        id: 1,
        url: nobeeThumnail,
      },
      {
        id: 2,
        url: nobeepage,
      },
    ],
    videos: [
      {
        id: 1,
        url: nobeevideo,
      },
    ],
  },

  {
    id: 5,
    name: "Loan Labor",
    brief: "B2B application",
    description: " ",
    thumbnail: loanThumb,
    images: [
      {
        id: 1,
        url: loan1,
      },
      {
        id: 2,
        url: loan2,
      },
      {
        id: 1,
        url: loan3,
      },
      {
        id: 1,
        url: loan4,
      },
      {
        id: 1,
        url: loan5,
      },
      {
        id: 1,
        url: loan6,
      },
    ],
    videos: [
      {
        id: 1,
        url: loanVideo1,
      },
      {
        id: 2,
        url: loanVideo1,
      },
      {
        id: 3,
        url: loanVideo1,
      },
    ],
  },
  {
    id: 6,
    name: "Tabula",
    brief: "Learning management system",
    description: " ",
    thumbnail: tabula1,
    images: [
      {
        id: 1,
        url: tabula1,
      },
      {
        id: 1,
        url: tabula2,
      },
      {
        id: 1,
        url: tabula3,
      },
    ],
  },
  {
    id: 7,
    name: "SCB",
    brief: "",
    description: " ",
    thumbnail: scb1,
    images: [
      {
        id: 1,
        url: scb1,
      },
      {
        id: 1,
        url: scb2,
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
