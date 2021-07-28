import React, { useEffect, useState, useRef } from 'react';
import StyledContainer from './StylesModal';
import { useParams } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import { useSpring, animated } from 'react-spring';
import { updateMovie } from '../../../actions/movies';
import { Title } from '../styled';
import { getMovieById } from '../../../actions/movies';


function ModalGenre({ showModalGenre, setShowModalGenre }) {
    
    const dispatch = useDispatch();
    const params = useParams();
    const [movie, setMovie] = useState({
        title: "",
        date: "",
        poster: "",
        description: "",
        genre: "",
        cast: "",
        trailer: "",
        rated: "",
        runtime: "",
        director: "",
        IMDb: "",
    });
    const ChangeInput = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateMovie(movie, params.id)
        await swal(`${'Genre'}`, `Edited succesfully`, "success", {
            buttons: false,
            timer: 2000,
        });
        dispatch(getMovieById(params.id))
    }
    //Efecto para traer el detalle de la pelicula
    useEffect(() => {
        const fetchMovieDetail = async () => {
            const response = await axios.get(`https://movies-henry-app.herokuapp.com/movies/${params.id}`);
            const date = new Date(response.data.date)
            response.data.date = date.toISOString().split('T')[0]
            setMovie(response.data);
        }
        fetchMovieDetail();

    }, [params.id])
    //click outside the form
    const modalRef = useRef()
    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModalGenre(false);
        }
    }

    const animation = useSpring({
        config: {
            duration: 300
        },
        opacity: showModalGenre ? 1 : 0,
        transform: showModalGenre ? `translateY(0%)` : `translateY(-100%)`
    })

    return (
        <div>
            {showModalGenre ?
            <StyledContainer ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                <form
                    className="postMovieForm"
                    onChange={(e) => ChangeInput(e)}
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <button
                        className="close"
                        onClick={() => setShowModalGenre(prev => !prev)}
                    > X
                    </button>
                    <div className="formInputContainer">
                        <div>
                        </div>
                        <div>
                            <Title>Genre</Title>
                            <input
                                placeholder="Genre"
                                type="text"
                                name="genre"
                                value={movie.genre}
                            />
                        </div>
                    </div>
                    <div className="formInputContainer">
                        <button className="postMovieButton" type="submit">
                            Edit Genre
                        </button>
                    </div>
                </form>
                </animated.div>
            </StyledContainer>: null}
        </div>  
    );
}

export default ModalGenre;