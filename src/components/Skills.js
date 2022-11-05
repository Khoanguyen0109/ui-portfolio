import meter2 from '../assets/img/meter2.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';
import { skills } from '../data';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <section className='skill'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>
                Here is my achievements and skills that I am using to adapt the
                work and contribute everyday.<br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'
              >
                {skills.map((skil) => (
                  <div className='item'>
                    <img height={'115px'} src={skil.url} alt={skil.name} />
                    <h5>{skil.name}</h5>
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
