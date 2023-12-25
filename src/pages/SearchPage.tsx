import {Outlet} from "react-router-dom";

import {SearchForm} from "../сomponents";

const SearchPage = () => {

    return (
        <div>
            <SearchForm/>
            <Outlet/>
        </div>
    );
};

export {SearchPage};