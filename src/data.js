import tabula1 from './assets/tabula/Thumbnail.png';
import tabula2 from './assets/tabula/2 (1).png';
import tabula3 from './assets/tabula/3 (1).png';

import loanThumb from './assets/loan/Thumbnail (1).png';
import loan1 from './assets/loan/1.png';
import loan2 from './assets/loan/2.png';
import loan3 from './assets/loan/3.png';
import loan4 from './assets/loan/4.png';
import loan5 from './assets/loan/5.png';
import loan6 from './assets/loan/6.png';
import loanVideo1 from './assets/loan/lender mode.mp4';




import dynamic1 from './assets/dynamic/1.png';
import dynamic2 from './assets/dynamic/2.png';
import dynamicVideo from './assets/dynamic/video.mp4';

import figma from './assets/tools/figma.png';
import ai from './assets/tools/ai.png';
import ps from './assets/tools/ps.png';
import xd from './assets/tools/xd.png';

import us from './assets/skill/research.svg';
import low from './assets/skill/UI.png';
import proto from './assets/skill/Protype.jpg';

import scb1 from './assets/scb/1.png';
import scb2 from './assets/scb/2.png';


import foodbThumb from './assets/food/thumb.jpeg';
import food8 from './assets/food/8.png';

import navIcon1 from './assets/img/nav-icon1.svg';
import navIcon2 from './assets/img/nav-icon2.svg';

import nobeeThumnail from './assets/nobee/thumb.jpg'
import nobeepage from './assets/nobee/page.png'
import nobeevideo from './assets/nobee/4906850406635748938.mp4'


const homeDate = {};

const projects = [
  {
    id: 1,
    name: 'Nobee',
    brief: 'USA housing rental app',
    description: ' ',
    thumbnail: nobeeThumnail,
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
    ]
  },
  {
    id: 2,
    name: 'Loan Labor',
    brief: 'B2B application',
    description: ' ',
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
      }
    ]
  },
  {
    id: 3,
    name: 'Tabula',
    brief: 'Learning management system',
    description: ' ',
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
    id: 4,
    name: 'SCB',
    brief: '',
    description: ' ',
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
  {
    id: 5,
    name: 'Dynamic',
    brief: '',
    description: ' ',
    thumbnail: dynamic1,
    images: [
      {
        id: 1,
        url: dynamic1,
      },
      {
        id: 1,
        url: dynamic2,
      },
    ],
    videos: [
      {
        id: 1,
        url: dynamicVideo,
      },
    ],
  },

  {
    id: 6,
    name: 'Food App Delivery',
    brief: '',
    description: ' ',
    thumbnail: foodbThumb,
    images: [
      {
        id: 1,
        url: food8,
      },
    ],
  },
];

const skills = [
  {
    name: 'User Research',
    url: us,
  },
  {
    name: 'Low to high Fidelity Design',
    url: low,
  },
  {
    name: 'Prototyping & Usability Testing',
    url: proto,
  },
];

const tools = [
  {
    name: 'Fignma',
    url: figma,
  },
  {
    name: 'Xd',
    url: xd,
  },
  {
    name: 'Ai',
    url: ai,
  },
  {
    name: 'Ps',
    url: ps,
  },
];

const links = [
  {
    name: 'fb',
    icon: navIcon2,
    link: 'https://www.facebook.com/thuhien4995/',
  },
  {
    name: 'Linkedin',
    icon: navIcon1,
    link: 'https://www.linkedin.com/in/hien-nguyen-449761181/',
  },
];
export { projects, skills, tools, links };
