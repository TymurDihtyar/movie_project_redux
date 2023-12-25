import {useEffect} from "react";
import {Outlet} from "react-router-dom";

import {Genres} from "../сomponents";
import {useAppDispatch} from "../hooks";
import {moviesActions} from "../redux/slices";

const GenresPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getGenres())
    }, []);

    return (
        <div>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};