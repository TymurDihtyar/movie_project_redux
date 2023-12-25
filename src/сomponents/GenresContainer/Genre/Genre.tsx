import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

import {IGenre} from "../../../interfaces";
import css from './Genre.module.css'
import {moviesActions} from "../../../redux/slices";
import {useAppDispatch} from "../../../hooks";

interface IProps extends PropsWithChildren {
    item: IGenre
}

const Genre: FC<IProps> = ({item}) => {
    const {id:idGenres, name: nameGenre} = item;
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const resetPage = () => {
        dispatch(moviesActions.setPage({page:'1'}))
        navigate(`${idGenres}`)
    }

    return (
        <Button onClick={resetPage} style={{fontFamily: 'Bebas Neue, sans-serif', fontSize:'18px'}} className={css.butt}>{nameGenre}</Button>
    );
};

export {Genre};