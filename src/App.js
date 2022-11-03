import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import Detail from './pages/Detail';
function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route exact path={'/details/:projectId'} element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
