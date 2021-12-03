import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home';
import FavoritesPage from './pages/Favorites';
import { Container } from './styles/global';

const App = () => {
  return (
    <Container>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="favorite-movies/*" element={<FavoritesPage />} />
      </Routes>
    </Container>
  );
}

export default App;
