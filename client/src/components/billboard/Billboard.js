import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList } from "../../actions/movies";
import { StyledTitle, StyledBillboard, StyledAside } from './Billboard-styles';
import { StyledFirstAside, StyledSecondAside, StyledAsidePublicity } from './Aside-styles';
import BillboardCard from './BillboardCard';
import { Link } from 'react-router-dom';
import Footer from "../footer/Footer";

export default function Billboard () {
    const dispatch = useDispatch();
    const movieList = useSelector(state => state.movieList);
    useEffect(() => {
        dispatch(getMovieList())
    }, [dispatch])
    return (
        <StyledBillboard>
            <StyledTitle>Billboard Movies</StyledTitle>
            <StyledAside>
                <StyledFirstAside>
                    <Link>
                        <p>Combos</p>
                        <img src="https://image.flaticon.com/icons/png/512/864/864818.png" alt="" />
                    </Link>
                </StyledFirstAside>
                <StyledSecondAside>
                    <Link>
                        <p>Memories</p>
                        <img src="https://image.flaticon.com/icons/png/512/86/86511.png" alt=""/>
                    </Link>
                </StyledSecondAside>
                <StyledAsidePublicity>Publicidad</StyledAsidePublicity>
            </StyledAside>
            {movieList.length > 0 ? movieList.map(movie => <BillboardCard props={movie} key={movie._id}/>) : <h2>Error 404!</h2>}
            <Footer marginTop='6000px'/>
        </StyledBillboard>
    )
}