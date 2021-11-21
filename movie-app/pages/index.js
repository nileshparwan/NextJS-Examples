import React from 'react';
import Carousel from '../components/Carousel';
import Sidebar from '../components/Sidebar';
import MovieList from '../components/MovieList';

import { getMovies, getCategories } from '../actions';

const Home = ({ movies, carouselImages, categories }) => {
  const [filter, setFilter] = React.useState('all');

  const changeCategory = React.useCallback(category => setFilter(category), [filter]);

  const filterMovies = (movies) => {
    if (filter === "all") {
      return movies;
    }

    return movies.filter(m => {
      return m.genre && m.genre.includes(filter)
    });
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="row">

          <div className="col-lg-3">
            <Sidebar
              appName="MovieDB"
              categories={categories}
              activeCategory={filter}
              changeCategory={changeCategory}
            />
          </div>

          <div className="col-lg-9">
            <Carousel carouselImages={carouselImages} />

            {filter && <h1>Displaying {filter} movies</h1>}

            <div className="row">
              {/* {errorMessage && errorMessage} */}
              <MovieList movies={filterMovies(movies) || []} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  const movies = await getMovies();
  const carouselImages = movies.map(carousel => ({ id: carousel.id, url: carousel.image, name: carousel.name }));
  const categories = await getCategories();
  return { movies, carouselImages, categories };
};

export default Home;