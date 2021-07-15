import React, {useEffect} from 'react';
import { HomeCont, ContMovies, Movies, Billboard, ComingSoon, Stores, Labels, MerchCard, PubliCard, Icon, Linked } from './Styles';
import MovieCard from './MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from "../../actions/movies";
import Footer from '../footer/Footer'
import Slider from '../comboSlider/slider';

export default function Home() {
    const dispatch = useDispatch();
    const movieList = useSelector(state => state.movieList);
    const releaseList = useSelector(state => state.movieList);

    useEffect(() => {
        dispatch(getMovieList())
    }, [dispatch]);

    return (
        <HomeCont>
            <ContMovies>
                <Movies>
                    <Labels>Billboard</Labels>
                    <Billboard>
                        {movieList.length > 0 ? movieList.filter(movie => movie.onBillboard).map(movie => <MovieCard props={movie} id={movie._id} />) : <h2>Loading movies...</h2>}
                    </Billboard>
                    <Labels>Coming Soon</Labels>
                    <ComingSoon>
                        {releaseList.length > 0 ? movieList.filter(movie => !movie.onBillboard).map(movie => <MovieCard props={movie} id={movie._id} />) : <h2>Loading movies...</h2>}
                    </ComingSoon>
                </Movies>
                <Stores>
                    <MerchCard><Slider /></MerchCard>
                    <MerchCard><Linked to='/products'><Icon src="https://image.flaticon.com/icons/png/512/86/86511.png" /></Linked></MerchCard>
                    <PubliCard>
                        Publicity
                    </PubliCard>
                </Stores>
            </ContMovies>
            <Footer />  
        </HomeCont>
    )
}