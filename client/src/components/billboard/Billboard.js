import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList } from "../../actions/movies";
import {StyledTitle, StyledBillboard, StyledAside} from './Billboard-styles';
import BillboardCard from './BillboardCard';

export default function Billboard () {
    const dispatch = useDispatch();
    const movieList = useSelector(state => state.movieList);
    useEffect(() => {
        dispatch(getMovieList())
    }, [dispatch])
    return (
        <StyledBillboard>
            <StyledTitle>Billboard Movies</StyledTitle>
            <StyledAside></StyledAside>
            {movieList.length > 0 ? movieList.map(movie => <BillboardCard props={movie} key={movie._id}/>) : <h2>Error 404!</h2>}
        </StyledBillboard>
    )
}