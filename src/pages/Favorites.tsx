import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { favoriteMoviesAtom } from "../recoil/favorite-movies/atoms";
import { MovieContainer, Abstract, Title } from '../styles/moviesContent';
import { useTheme } from "@mui/system";
import { Typography, Box } from "@mui/material";
import { StyledPaper } from "../styles/favoriteMovies";
import { MovieData } from '../helpers';


const FavoritesPage = () => {
    const favoriteMoviesState = useRecoilValue(favoriteMoviesAtom);
    const theme = useTheme();

    return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, marginTop: theme.spacing(3) }}>
        <StyledPaper sx={{maxWidth:700, my: 1, mx: 'auto', p: 2}}>
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                wrap="nowrap"
                sx={{padding: theme.spacing(1,3), textAlign: 'center'}}>
                <Typography variant='h3' sx={{paddingBottom: theme.spacing(2), fontWeight: 700, color: '#230932'}}>Favorite movies</Typography>
                {favoriteMoviesState.length === 0 ? <Title sx={{color: 'white'}}>There are no favorite movies right now</Title> :
                favoriteMoviesState.map((favoriteMovie: MovieData) => <MovieContainer key={favoriteMovie.episode_id}>
                <Title>{favoriteMovie.title}</Title>
                <Abstract>{favoriteMovie.opening_crawl}</Abstract>
                </MovieContainer> 
                )}
            </Grid>
        </StyledPaper>
    </Box>)
}


export default FavoritesPage;