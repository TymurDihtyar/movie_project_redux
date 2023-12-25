import {ButtonGroup} from "@mui/material";

import {Genre} from "../Genre";
import css from './Genres.module.css'
import {useAppSelector} from "../../../hooks";


const Genres = () => {
    const {genres} = useAppSelector(state => state.movies)

    return (
        <ButtonGroup className={css.buttGroup} variant="contained" aria-label=" outlined primary button group" size={"large"} color='warning'>
            {genres && genres.map(item => <Genre key={item.id} item={item}/>)}
        </ButtonGroup>
    );
};

export {Genres};