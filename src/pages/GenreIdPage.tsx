import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {Movies} from "../Components";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {moviesActions} from "../redux/slices/moviesSlice";

const GenreIdPage = () => {
    const {idGenres} = useParams<string>()
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page') ? query.get('page') : '1'

    const {moviesByGenres, total_pages} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMoviesByGenre({page, with_genres:idGenres}))
    }, [page, idGenres]);

    return (
        <div>
            <Movies movies={moviesByGenres} page={page} setQuery={setQuery} maxPage={total_pages}/>
        </div>
    );
};

export {GenreIdPage};