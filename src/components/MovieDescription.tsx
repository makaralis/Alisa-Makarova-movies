
import React from "react";
import {  IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Abstract, Title, TopContainer } from '../styles/moviesContent';
import { useRecoilValue , useRecoilState} from "recoil";
import { selectedMovieAtom } from "../recoil/selected-movie/atoms";
import { favoriteMoviesAtom } from "../recoil/favorite-movies/atoms";
import { DescriptionContainer } from "../styles/moviesContent";


const MovieDescription= () => {
    const selectedMovieState = useRecoilValue(selectedMovieAtom);
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

    return (<DescriptionContainer item xs={6} sm={6} lg={6}>
            <TopContainer>
                <Title variant='h5'>{selectedMovieState.title}</Title>
                {favoriteMoviesState.some((favoriteMovie: any) => favoriteMovie.episode_id === selectedMovieState.episode_id)
                    ? <IconButton onClick={() => removeFromFavorites(selectedMovieState)} sx={{marginBottom: '10px'}}>
                    <FavoriteIcon fontSize="large" color={"primary"}/>
                    </IconButton>

                    :  <IconButton onClick={() => addToFavorites(selectedMovieState)} sx={{marginBottom: '10px'}}>
                    <FavoriteBorderIcon fontSize="large" color={"primary"}/>
                    </IconButton>
                }
            </TopContainer>
            <Abstract>{selectedMovieState.opening_crawl}</Abstract>
    </DescriptionContainer>)
}


export default MovieDescription;