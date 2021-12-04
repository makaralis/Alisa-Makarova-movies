
import React from "react";
import { Grid } from "@mui/material";
import MoviesContent from "../components/MoviesContent";
import { useTheme } from '@mui/system';

interface HomePageProps {
    moviesData: any;
}

const HomePage: React.FC<HomePageProps> = ({ moviesData }) => {
    const theme = useTheme();

    return (<Grid container spacing={2} sx={{margin: theme.spacing(1,3)}}>
        <MoviesContent moviesData={moviesData}/>
    </Grid>)
}


export default HomePage;