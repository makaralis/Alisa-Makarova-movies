import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home';
import FavoritesPage from './pages/Favorites';

const App = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="favorite-movies/*" element={<FavoritesPage />} />
      </Routes>
    
    </>
  );
}

export default App;
