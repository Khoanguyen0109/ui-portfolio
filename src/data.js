// Tool and skill assets removed (components replaced by Tailwind redesign)

import getnowThumb from "./assets/getnow/Thumbnail.jpg";

// import autoThumb from "./assets/nowauto/19.jpg";
// import auto from "./assets/nowauto/1.jpg";


// import cinethumbe from "./assets/cine/cinethumb.jpg";
// import cine from "./assets/cine/cine.jpg";
// import remithumb from "./assets/remitano/thumb.jpg";
// import remidetail from "./assets/remitano/detail.jpg";
// import lendthumb from "./assets/lend/lend.jpg";
// import detail from "./assets/lend/detail.jpg";


import noBee1 from "./assets/newNobee/1.jpg";
import noBee2 from "./assets/newNobee/2.jpg";
import noBee3 from "./assets/newNobee/3.jpg";
import noBee4 from "./assets/newNobee/4.jpg";
import noBee5 from "./assets/newNobee/5.jpg";
import noBee6 from "./assets/newNobee/6.jpg";
import noBee7 from "./assets/newNobee/7.jpg";
import noBee8 from "./assets/newNobee/8.jpg";
import noBeeThumb from "./assets/newNobee/Thumnail.jpg";

import importTestCaseThumb from "./assets/importTestCase/Thumbnail.png";


import carThumb from "./assets/newCar/Thumbnail.jpg"
import car1 from "./assets/newCar/1.jpg";
import car2 from "./assets/newCar/2.jpg";
import car3 from "./assets/newCar/3.jpg";
import car4 from "./assets/newCar/4.jpg";
import car5 from "./assets/newCar/5.jpg";
import car6 from "./assets/newCar/6.jpg";
import car7 from "./assets/newCar/7.jpg";
import car8 from "./assets/newCar/8.jpg";
import car9 from "./assets/newCar/9.jpg";
import car10 from "./assets/newCar/10.jpg";



import testcaseThumb from "./assets/testcasse/Thumbnail.jpg"
import test1 from "./assets/testcasse/1.jpg";
import test2 from "./assets/testcasse/2.jpg";
import test3 from "./assets/testcasse/3.jpg";
import test4 from "./assets/testcasse/4.jpg";
import test5 from "./assets/testcasse/5.jpg";
import test6 from "./assets/testcasse/6.jpg";
import test7 from "./assets/testcasse/7.jpg";
import test8 from "./assets/testcasse/8.jpg";
import test9 from "./assets/testcasse/9.jpg";
import test10 from "./assets/testcasse/10.jpg";





const projects = [
  {
    id: 1,
    name: "AI Test Generator — a new chapter for QA teams",
    tag: "AI · QA Testing",
    category: "QA Testing",
    year: "2026",
    impact: "↓ 70% time saved · 100% adoption. AI-powered test case generation from requirements, with Feature Area grouping — the structural layer no competitor provides.",
    chips: ["AI-augmented design", "Feature Area system", "Solo designer"],
    thumbBg: "linear-gradient(135deg,#1a1a2e,#16213e)",
    caseStudyType: "full",
    thumbnail: testcaseThumb,
    description: " ",
    requirePassword: false,
    images: [
      {
        id: 1,
        url: test1,
      },
      {
        id: 2,
        url: test2,
      },
      {
        id: 3,
        url: test3,
      },
      {
        id: 4,
        url: test4,
      },
      {
        id: 5,
        url: test5,
      },
      {
        id: 6,
        url: test6,
      },
      {
        id: 7,
        url: test7,
      },
      {
        id: 8,
        url: test8,
      },
      {
        id: 9,
        url: test9,
      },
      {
        id: 10,
        url: test10,
      },
    ],
  },
  {
    id: 2,
    name: "Import Test Cases — migrate millions, lose nothing",
    tag: "QA Testing · Import Test Case Data",
    category: "QA Testing",
    year: "2026",
    brief: "Import workflow for QA teams",
    impact: "A 4-step guided import flow that lets QE teams migrate thousands of test cases from TestRail, Qase, Excel, or CSV — with auto field mapping, conflict resolution, and zero data loss.",
    chips: ["Data import UX", "Workflow design", "Senior Designer"],
    thumbBg: "linear-gradient(135deg,#0d1b2a,#1b2838)",
    caseStudyType: "import-case-study",
    thumbnail: importTestCaseThumb,
    description: " ",
    requirePassword: false,
    images: [],
  },
  {
    id: 3,
    name: "Viet Nam Car Rental Application",
    tag: "Vehicle valuation",
    category: "Vehicle Tech",
    year: "2023",
    brief: "Design system at scale",
    impact: "Change the way people rent cars in Viet Nam",
    chips: ["Design systems", "Leadership"],
    thumbBg: "linear-gradient(135deg,#0f1a0f,#162616)",
    caseStudyType: "gallery",
    description: " ",
    requirePassword: false,
    thumbnail: carThumb,
    images: [
      {
        id: 1,
        url: car1,
      },
      {
        id: 2,
        url: car2,
      },
      {
        id: 3,
        url: car3,
      },
      {
        id: 4,
        url: car4,
      },
      {
        id: 5,
        url: car5,
      },
      {
        id: 6,
        url: car6,
      },
      {
        id: 7,
        url: car7,
      },
      {
        id: 8,
        url: car8,
      },
      {
        id: 9,
        url: car9,
      },
      {
        id: 10,
        url: car10,
      },
    ],
  },
  {
    id: 7,
    name: "GetNow V2 — Slide Presentation",
    tag: "Healthcare · Slides",
    category: "Healthcare",
    year: "2026",
    impact: "Interactive 13-slide presentation of the GetNow pharmacy dispatch design — brief, context, decisions, demo, tradeoffs, and release plan navigated one slide at a time.",
    chips: ["Healthcare", "Slideshow", "Presentation", "Solo designer"],
    thumbBg: "linear-gradient(135deg,#0a1628,#1a2744)",
    caseStudyType: "getnow-slides",
    thumbnail: getnowThumb,
    description: " ",
    requirePassword: false,
    images: [],
    hidden: true,
  },
  {
    id: 6,
    name: "GetNow — Pharmacy Dispatch System",
    tag: "Healthcare · Logistics",
    category: "Healthcare",
    year: "2026",
    impact: "Auto verified and smart marketplace system — Kanban dispatch board, guided OOS resolution, pre-dispatch sign-off, and driver handoff in one compliance-first flow.",
    chips: ["Healthcare", "Desktop app", "Workflow design", "Solo designer"],
    thumbBg: "linear-gradient(135deg,#0a1628,#1a2744)",
    caseStudyType: "getnow",
    thumbnail: getnowThumb,
    description: " ",
    requirePassword: false,
    images: [],
  },
  {
    id: 5,
    name: "Nobee — USA housing rental app",
    tag: "Prop-tech · Housing",
    category: "Prop-tech",
    year: "2022",
    brief: "USA housing rental app",
    impact: "Designed end-to-end rental experience for US renters — search, listing detail, application flow, and tenant dashboard — in a clean, trust-building visual language.",
    chips: ["Prop-tech", "Mobile & web", "End-to-end UX"],
    thumbBg: "linear-gradient(135deg,#0f1a10,#162616)",
    caseStudyType: "gallery",
    thumbnail: noBeeThumb,
    description: " ",
    requirePassword: false,
    images: [
      { id: 1, url: noBee1 },
      { id: 2, url: noBee2 },
      { id: 3, url: noBee3 },
      { id: 4, url: noBee4 },
      { id: 5, url: noBee5 },
      { id: 6, url: noBee6 },
      { id: 7, url: noBee7 },
      { id: 8, url: noBee8 },
    ],
  },
  // {
  //   id: 4,
  //   name: "Now Auto",
  //   brief: "Used car buying app for dealers",
  //   description: " ",
  //   thumbnail: autoThumb,
  //   images: [
  //     {
  //       id: 1,
  //       url: auto,
  //     },
  //   ],
  // },
  

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
  // {
  //   id: 23123,
  //   name: "Remitano",
  //   brief: "USA housing rental app",
  //   thumbnail: remithumb,
  //   description: " ",
  //   images: [
  //     {
  //       id: 2,
  //       url: remidetail,
  //     },
  //   ],
  // },
  // {
  //   id: 3413249,
  //   name: "Lending Remitano",
  //   brief: "USA housing rental app",
  //   thumbnail: lendthumb,
  //   description: " ",
  //   images: [
  //     {
  //       id: 2,
  //       url: detail,
  //     },
  //   ],
  // },
];

export { projects };
