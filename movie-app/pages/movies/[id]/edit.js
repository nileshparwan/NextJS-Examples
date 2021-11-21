import React from 'react';
import Router from 'next/router'
import MovieCreateForm from '../../../components/MovieCreateForm';
import { getMovieById, updateMovie } from '../../../actions';


const EditMovie = ({ query, movie }) => {
    const handleUpdateMovie = (movie) => {
        updateMovie(movie).then(updatedData => {
            Router.push(`/movies/[id]`, `/movies/${movie.id}`);
        })
    }

    return (
        <div className="container">
            <h1>Edit the Movie</h1>
            <MovieCreateForm submitButtonText="Update" initialData={movie} handleFormSubmit={handleUpdateMovie}/>
        </div>
    );
};

EditMovie.getInitialProps = async (ctx) => {
    const { query } = ctx;
    const movie = await getMovieById(query.id)
    return { query: query, movie };
};

export default EditMovie;