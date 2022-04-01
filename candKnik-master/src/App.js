import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Questions from './components/pages/questions';
import Applications from './components/pages/applications';
import Home from './components/pages/home';
import Navbar from './components/cards/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page404 from './components/pages/page404';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='' exact element={<Home />} />
        <Route path='questions' exact element={<Questions />} />
        <Route path='applications/:id' exact element={<Applications />} />
        <Route path='*' exact element={<Page404 />} />
      </Routes>
    </Router>  
  );
}

export default App;
