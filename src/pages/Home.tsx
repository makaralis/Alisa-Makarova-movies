import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const HomePage = () => {
    const [moviesData, setMoviesData] = useState();

    const getMovies = useCallback(async () => {
        try {
            const res = await axios.get("https://swapi.dev/api/films");

            if (res && res.data.results) {
                setMoviesData(res.data.results);
            }
        }
        catch (e) {
            toast.error("Error while fetching movies data")
        }
    }, [])

    useEffect(() => {
        getMovies();
    },[getMovies]);

    console.log(moviesData);

    return (<>
    </>)
}


export default HomePage;