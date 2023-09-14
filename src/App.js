import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WIP from './components/WIP/WIP';
import HomePage from './pages/Home/HomePage';
import ShortsPage from './pages/Shorts/ShortsPage';
import CinematicsPage from './pages/Cinematics/CinematicsPage';
import DocsPage from './pages/Docs/DocsPage';
import VfxPage from './pages/Vfx/VfxPage';
import ProgrammingPage from './pages/Programming/ProgrammingPage';
import Play from './pages/Play/Play';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/:tag" element={<Play />} />
        <Route path="/shorts" element={ <ShortsPage /> } />
        <Route path="/cinematics" element={ <CinematicsPage /> } />
        <Route path="/docs" element={ <DocsPage /> } />
        <Route path="/vfx" element={ <VfxPage /> } />
        <Route path="/vfx/:id" element={ <VfxPage /> } />
        <Route path="/programming" element={ <ProgrammingPage /> } />
        <Route path="/wip" element={ <WIP /> } />
      </Routes>
    </Router>
  );
}

export default App;
