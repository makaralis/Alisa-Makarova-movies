
import React from "react";
import MoviesContent from "../components/MoviesContent";
import MovieDescription from "../components/MovieDescription";
import { StyledGrid } from '../styles/moviesContent';

interface HomePageProps {
    moviesData: any;
}

const HomePage: React.FC<HomePageProps> = ({ moviesData }) => (
    <StyledGrid container  direction="row" justifyContent="center" spacing={2}>
        <MoviesContent moviesData={moviesData}/>
        <MovieDescription/>
    </StyledGrid>
)


export default HomePage;