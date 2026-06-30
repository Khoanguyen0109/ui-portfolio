import { useParams } from 'react-router-dom';
import { projects } from '../data';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { ImageGallery } from '../components/ImageGallery';
import { CaseStudyTestGenerator } from '../components/CaseStudyTestGenerator';
import { CaseStudyImportTestCase } from '../components/CaseStudyImportTestCase';
import { CaseStudyGetNow } from '../components/CaseStudyGetNow';
import NotFound from './NotFound';

function Detail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) return <NotFound />;

  const isFullCaseStudy = project.caseStudyType === 'full';
  const isImportCaseStudy = project.caseStudyType === 'import-case-study';
  const isGetNow = project.caseStudyType === 'getnow';
  return (
    <>
      {!isGetNow && <NavBar />}
      {isFullCaseStudy ? (
        <CaseStudyTestGenerator project={project} />
      ) : isImportCaseStudy ? (
        <CaseStudyImportTestCase project={project} />
      ) : isGetNow ? (
        <CaseStudyGetNow project={project} />
      ) : (
        <ImageGallery project={project} />
      )}
      {!isGetNow && <Footer />}
    </>
  );
}

export default Detail;
