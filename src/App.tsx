import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Route, Routes } from 'react-router-dom';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { useTheme } from "@mui/system";
import HomePage from './pages/Home';
import FavoritesPage from './pages/Favorites';
import { Container } from './styles/global';
import Navbar from './components/Navbar';


const App = () => {
  const [moviesData, setMoviesData] = useState();
  const [loading, setLoading] = useState<Boolean>(true);
  const theme = useTheme();


  const getMovies = useCallback(async () => {
      try {
          const res = await axios.get("https://swapi.dev/api/films");

          if (res && res.data.results) {                            
              setMoviesData(res.data.results);
              setLoading(false);
          }
      }
      catch (e) {
          toast.error("Error while fetching movies data");
          setLoading(false);
      }
  }, [])

  useEffect(() => {
      getMovies();
  }, [getMovies]);


  return (
    <Container>
      {loading ? <Grid container
              direction="column"
              justifyContent="center"
              alignItems="center" sx={{paddingTop: theme.spacing(5)}}><CircularProgress size={35} />
              <Typography sx={{marginTop: theme.spacing(2)}} variant='h6'>Loading the data...</Typography></Grid> :
      <> 
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage moviesData={moviesData}/>} />
          <Route path="favorite-movies/*" element={<FavoritesPage />} />
      </Routes>
      </>}
    </Container>
  );
}

export default App;
