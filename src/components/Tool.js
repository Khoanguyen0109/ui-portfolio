import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from '../assets/img/arrow1.svg';
import arrow2 from '../assets/img/arrow2.svg';
import colorSharp from '../assets/img/color-sharp.png';
import { tools } from '../data';

export const Tools = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='tools'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx'>
              <h2>Tools</h2>
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'
              >
                {tools.map((tool) => (
                  <div className='item'>
                    <img src={tool.url} alt={tool.name} />
                    <h5>{tool.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  );
};
