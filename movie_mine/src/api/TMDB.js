import axios from 'axios';

const TMDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

const getMoviesByTerm=(SearchTerm, setMovies)=>{
    TMDB.get('/search/movie',
        {
        params: {
                api_key: "c39521903def0e80532d4c8bc140285a",
                query: SearchTerm,
            }
        }).then((response)=>{
        console.log(response);
        setMovies(response.data.results);
    });
}

export { getMoviesByTerm };