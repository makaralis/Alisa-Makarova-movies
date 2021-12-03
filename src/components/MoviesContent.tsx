import React from "react";
import { Grid, IconButton  } from "@mui/material";
import { MovieContainer, Abstract, Title, TopContainer } from '../styles/moviesContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ObjectLiteral } from '../helpers';
import { useRecoilState } from 'recoil';
import { favoriteMoviesAtom } from '../recoil/favorite-movies/atoms';


interface MoviesContentProps {
    moviesData: Array<ObjectLiteral> | undefined;
}

const MoviesContent: React.FC<MoviesContentProps> = ({ moviesData }) => {
    const [favoriteMoviesState, setFavoriteMoviesState] = useRecoilState(favoriteMoviesAtom);


    const addToFavorites = (movie: any) => {
        const favoriteMoviesCopy = [...favoriteMoviesState];

        if(!(favoriteMoviesCopy.some((favoriteMovie) => favoriteMovie.episode_id === movie.episode_id))) {
            favoriteMoviesCopy.push(movie);
        }

        setFavoriteMoviesState(favoriteMoviesCopy);
    }

    const removeFromFavorites = (movie: any) => {
        const favoriteMoviesCopy = [...favoriteMoviesState];

        setFavoriteMoviesState(favoriteMoviesCopy.filter((favoriteMovie) => favoriteMovie.episode_id !== movie.episode_id));
    }

    
    return (<Grid item xs={4} sm={4} lg={4}>
        {moviesData?.map((movie: any) => <MovieContainer key={movie.episode_id}>
            <TopContainer>
                <Title>{movie.title}</Title>
                {favoriteMoviesState.some((favoriteMovie: any) => favoriteMovie.episode_id === movie.episode_id)
                    ? <IconButton onClick={() => removeFromFavorites(movie)} sx={{marginBottom: '10px'}}>
                    <FavoriteIcon fontSize="large" color={"primary"}/>
                    </IconButton>

                    :  <IconButton onClick={() => addToFavorites(movie)} sx={{marginBottom: '10px'}}>
                    <FavoriteBorderIcon fontSize="large" color={"primary"}/>
                    </IconButton>
                }
            </TopContainer>
            <Abstract>{movie.opening_crawl}</Abstract>
            </MovieContainer>)}
    </Grid>)
}


export default MoviesContent;