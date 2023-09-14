import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WIP from './components/WIP/WIP';
import HomePage from './pages/Home/HomePage';
import CategoryPage from './pages/Category/CategoryPage';
import Play from './pages/Play/Play';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/play/:tag" element={<Play />} />
        <Route path="/:category" element={ <CategoryPage /> } />
        <Route path="/wip" element={ <WIP /> } />
      </Routes>
    </Router>
  );
}

export default App;
