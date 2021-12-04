
import React from "react";
import MoviesContent from "../components/MoviesContent";
import MovieDescription from "../components/MovieDescription";
import { StyledGrid } from '../styles/moviesContent';

interface HomePageProps {
    moviesData: any;
}

const HomePage: React.FC<HomePageProps> = ({ moviesData }) => (
    <StyledGrid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '60px'}}>
        <MoviesContent moviesData={moviesData}/>
        <MovieDescription/>
    </StyledGrid>
)


export default HomePage;