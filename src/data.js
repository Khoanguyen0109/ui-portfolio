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

const homeDate = {};

const projects = [
  {
    id: 1,
    name: 'Tabula',
    brief: "Education",
    description: ' ',
    thumbnail: tabula1,
    images: [
      {
        id: 1,
        url: tabula1
      },
      {
        id: 1,
        url: tabula2
      },
      {
        id: 1,
        url: tabula3
      },
    ],
  },
  {
    id: 2,
    name: 'Loan Labor',
    brief: "CRM",
    description: ' ',
    thumbnail: loanThumb,
    images: [
      {
        id: 1,
        url: loan1
      },
      {
        id: 2,
        url: loan2
      },
      {
        id: 1,
        url: loan3
      },
      {
        id: 1,
        url: loan4
      },
      {
        id: 1,
        url: loan5
      },
      {
        id: 1,
        url: loan6
      },
    ],
  },
];

export { projects };
