import React from 'react';
import colorSharp from '../assets/img/color-sharp.png';

function NotFound() {
  return (
    <div>
      <section className='banner' id='skills'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='skill-bx'>
                <h2>Not Foud</h2>
              </div>
            </div>
          </div>
        </div>
        <img className='background-image-left' src={colorSharp} alt='' />
      </section>
    </div>
  );
}

export default NotFound;
