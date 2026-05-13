import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:projectId" element={<Detail />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
