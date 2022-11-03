import React from 'react';
import { useParams } from 'react-router-dom';
import colorSharp from '../assets/img/color-sharp.png';
import { projects } from '../data';
import NotFound from './NotFound';

function Detail() {
  const params = useParams();
  console.log('params', params);
  const { projectId } = params;
  const project = projects.find((p) => p.id === parseInt(projectId));
  console.log('project', project);
  if (!project) {
    return <NotFound />;
  }
  return (
    <div>
      <section className='banner'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='skill-bx wow '>
                <h2>Skills</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.<br></br> Lorem Ipsum has been the
                  industry's standard dummy text.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className='background-image-left' src={colorSharp} alt='Image' />
      </section>
      <section className='skill'>
        <div className='container'>
          <div className='row'>
            <div className='skill-bx wow'>
              {/* <img className='' src={img1} alt='Image' />
              <img className='' src={img2} alt='Image' />

              <img className='' src={img3} alt='Image' /> */}
              {project.images.map((p) => (
                <img className='' src={p.url} alt={`Image ${p.id} `} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
