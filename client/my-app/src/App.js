import './App.css';
import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home';
import Animes from './pages/Animes';
import Heroes from './pages/Heroes';
import Villains from './pages/Villains';
import Organizations from './pages/Organizations';
const API = 'http.//localhost:3001'


function App() {
  return (
    <div>
      <div className="Nav">
        <h1>Anime-List</h1>
        <Nav />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home API={API} />} />
          <Route path="/animes" element={<Animes API={API} />} />
          <Route path="/heroes" element={<Heroes API={API} />} />
          <Route path="/villains" element={<Villains API={API} />} />
          <Route path="/organizations" element={<Organizations API={API} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
