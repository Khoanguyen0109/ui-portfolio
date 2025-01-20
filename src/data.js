import figma from "./assets/tools/figma.png";
import ai from "./assets/tools/ai.png";
import ps from "./assets/tools/ps.png";
import xd from "./assets/tools/xd.png";

import us from "./assets/skill/research.svg";
import low from "./assets/skill/UI.png";
import proto from "./assets/skill/Protype.jpg";

import navIcon1 from "./assets/img/nav-icon1.svg";

import nobeeThumnail from "./assets/nobee/39.jpg";
import nobeepage from "./assets/nobee/15.jpg";

import carNowThumb from "./assets/carnow/19.png";
import carnow from "./assets/carnow/1.png";
import autoThumb from "./assets/nowauto/19.jpg";
import auto from "./assets/nowauto/1.jpg";

import tiktokthumb from "./assets/tiktok/45.jpg";
import tiktok from "./assets/tiktok/46.jpg";
import thumbDesign from "./assets/design/thumb.jpg";
import design from "./assets/design/Content.jpg";
import cinethumbe from "./assets/cine/cinethumb.jpg";
import cine from "./assets/cine/cine.jpg";
import remithumb from "./assets/remitano/thumb.jpg";
import remidetail from "./assets/remitano/detail.jpg"
import lendthumb from "./assets/lend/lend.jpg"
import detail from "./assets/lend/detail.jpg"


import noBee1 from "./assets/newNobee/1.jpg"
import noBee2 from "./assets/newNobee/2.jpg"
import noBee3 from "./assets/newNobee/3.jpg"
import noBee4 from "./assets/newNobee/4.jpg"
import noBee5 from "./assets/newNobee/5.jpg"
import noBee6 from "./assets/newNobee/6.jpg"
import noBee7 from "./assets/newNobee/7.jpg"
import noBee8 from "./assets/newNobee/8.jpg"
import noBeeThumb from "./assets/newNobee/Thumnail.jpg"



const projects = [
  {
    id: 2,
    name: "Nobee",
    brief: "USA housing rental app",
    thumbnail: noBeeThumb,
    description: " ",
    images: [
      {
        id: 1,
        url: noBee1,
        // width: "1320px",
        // height: "22186px",
      },
      {
        id: 2,
        url: noBee2,
        // width: "1320px",
        // height: "22186px",
      },
      {
        id: 3,
        url: noBee3,
        // width: "1320px",
        // height: "22186px",
      },
      {
        id: 4,
        url: noBee4,

      },
      {
        id: 5,
        url: noBee5,
 
      },
      {
        id: 6,
        url: noBee6,
        // width: "1320px",
        // height: "22186px",
      },
      {
        id: 7,
        url: noBee7,

      },
      {
        id: 8,
        url: noBee8,

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
        width: "1320px",
        height: "13925px",
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

  // {
  //   id: 1,
  //   name: "Design System",
  //   brief: "USA housing rental app",
  //   thumbnail: thumbDesign,
  //   description: " ",
  //   images: [
  //     {
  //       id: 2,
  //       url: design,
  //     },
  //   ],
  // },
  {
    id: 23123,
    name: "Remitano",
    brief: "USA housing rental app",
    thumbnail: remithumb,
    description: " ",
    images: [
      {
        id: 2,
        url: remidetail,
      },
    ],
  },
  {
    id: 3413249,
    name: "Lending Remitano",
    brief: "USA housing rental app",
    thumbnail: lendthumb,
    description: " ",
    images: [
      {
        id: 2,
        url: detail,
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
