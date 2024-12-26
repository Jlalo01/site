import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WIP from './components/WIP/WIP';
import HomePage from './pages/Home/HomePage';
import CategoryPage from './pages/Category/CategoryPage';
import Play from './pages/Play/Play';
import ProgrammingPage from './pages/Programming/ProgrammingPage';
import PhotosPage from './pages/Photos/PhotosPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
      </Routes>
    </Router>
  );
}

export default App;
