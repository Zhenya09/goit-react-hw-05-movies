import React, { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../services/api';
import TrendingMoviesList from 'components/MovieList/TrendingMoviesList';
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await fetchTrendMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : error ? (
        <p>
          Sorry, we could not fetch the trending movies. Please try again later.
        </p>
      ) : (
        <TrendingMoviesList trendingMovies={trendingMovies} />
      )}
    </>
  );
};

export default Home;