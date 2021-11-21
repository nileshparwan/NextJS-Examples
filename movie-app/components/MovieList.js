// import React from "react";
import Link from 'next/link';

const MovieList = ({ movies }) => {

    const Shorten = (text) => {
        let txt = text.substring(0, 100);
        if (text.length > 100) {
            txt = txt + "...";
        }
        return txt;
    };

    return movies.map((movie) => (
        <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
            <div className="card h-100">
                <Link href={`/movies/[id]`} as={`/movies/${movie.id}`}>
                    <a >
                        <picture>
                            <source
                                srcSet={`${movie.image}?fm=webp&w=480`}
                                media="(max-width: 480px)"
                                type="image/webp"
                            />
                            <img className="card-img-top" src={movie.image} alt={movie.name} title={movie.name} width="100%" height="175" />
                        </picture>
                    </a>
                </Link>
                <div className="card-body">
                    <h4 className="card-title">
                        <Link href={`/movies/[id]`} as={`/movies/${movie.id}`}>
                            <a href="#">{movie.name}</a>
                        </Link>

                    </h4>
                    <p className="movie-genre">{movie.genre}</p>
                    <p className="card-text">{Shorten(movie.description)}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{movie.rating}</small>
                </div>
            </div>
        </div>
    ));
};

export default MovieList;