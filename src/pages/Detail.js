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
              <div className='skill-bx '>
                <h2>{project.name}</h2>
                <p>
                  {project.description}
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
            <div className='skill-bx'>
              {/* <img className='' src={img1} alt='Image' />
              <img className='' src={img2} alt='Image' />

              <img className='' src={img3} alt='Image' /> */}
              {project.images.map((p) => (
                <img className='' src={p.url} alt={`Image ${p.id} `} />
              ))}
              {project.videos &&
                project.videos.map((video) => (
                  <video width='1000' height='500' controls>
                    <source src={video.url} type='video/mp4' />
                  </video>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
