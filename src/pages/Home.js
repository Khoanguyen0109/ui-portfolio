import { NavBar } from '../components/NavBar';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { AIToolkit } from '../components/AIToolkit';
import { Work } from '../components/Work';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

function Home() {
  return (
    <div className="bg-bg min-h-screen">
      <NavBar />
      <Hero />
      <Marquee />
      <AIToolkit />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
