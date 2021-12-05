import React from "react";
import { MovieContainer, Title, StyledGrid } from '../styles/moviesContent';
import { MovieData } from '../helpers';
import { useRecoilState } from 'recoil';
import { selectedMovieAtom } from '../recoil/selected-movie/atoms';


interface MoviesContentProps {
    moviesData: Array<MovieData> | undefined;
}

const MoviesContent: React.FC<MoviesContentProps> = ({ moviesData }) => {
    const [selectedMovieState, setSelectedMovieState] = useRecoilState(selectedMovieAtom);

    
    return (<StyledGrid item xs={4} sm={4} lg={4}>
        {moviesData?.map((movie: MovieData) => <MovieContainer key={movie.episode_id} 
        onClick={() => {setSelectedMovieState(movie)}} isselected={selectedMovieState ? (selectedMovieState.episode_id === movie.episode_id).toString() : 'false'}>
                <Title>{movie.title}</Title>
            </MovieContainer>)}
    </StyledGrid>)
}


export default MoviesContent;