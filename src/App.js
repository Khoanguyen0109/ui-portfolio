import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import Detail from './pages/Detail';
import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  // useScrollToTop();

  return (
    <Router>
      <Wrapper>
        <div className='App'>
          <NavBar />
          <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/details/:projectId'} element={<Detail />} />
          </Routes>
          <Footer />
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
