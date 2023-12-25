import {useEffect} from "react";

import {Movies} from "../сomponents";
import {useAppDispatch, useAppSelector} from "../hooks";
import {moviesActions} from "../redux/slices";
import {useSearchParams} from "react-router-dom";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const {page, movies} = useAppSelector(state => state.movies)
    const [_, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery({page})
    }, []);

    useEffect(() => {
        page && dispatch(moviesActions.getMovies({page}))
    }, [page]);

    return (
        <div>
            <Movies movies={movies}/>
        </div>
    );
};

export {MoviesPage};