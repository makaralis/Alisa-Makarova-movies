import React from "react";
import { Grid  } from "@mui/material";
import { MovieContainer, Title } from '../styles/moviesContent';
import { ObjectLiteral } from '../helpers';
import { useRecoilState } from 'recoil';
import { selectedMovieAtom } from '../recoil/selected-movie/atoms';


interface MoviesContentProps {
    moviesData: Array<ObjectLiteral> | undefined;
}

const MoviesContent: React.FC<MoviesContentProps> = ({ moviesData }) => {
    const [selectedMovieState, setSelectedMovieState] = useRecoilState(selectedMovieAtom);

    
    return (<Grid item xs={4} sm={4} lg={4}>
        {moviesData?.map((movie: any) => <MovieContainer key={movie.episode_id} 
        onClick={() => {setSelectedMovieState(movie)}} isselected={(selectedMovieState.episode_id === movie.episode_id).toString()}>
                <Title>Movie title: {movie.title}</Title>
            </MovieContainer>)}
    </Grid>)
}


export default MoviesContent;