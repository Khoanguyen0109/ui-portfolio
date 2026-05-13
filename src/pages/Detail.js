import { useParams } from 'react-router-dom';
import { projects } from '../data';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { ImageGallery } from '../components/ImageGallery';
import { CaseStudyTestGenerator } from '../components/CaseStudyTestGenerator';
import NotFound from './NotFound';

function Detail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) return <NotFound />;

  const isFullCaseStudy = project.caseStudyType === 'full';

  return (
    <>
      <NavBar />
      {isFullCaseStudy ? (
        <CaseStudyTestGenerator project={project} />
      ) : (
        <ImageGallery project={project} />
      )}
      <Footer />
    </>
  );
}

export default Detail;
