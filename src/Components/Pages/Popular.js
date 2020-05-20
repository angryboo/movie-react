/* eslint-disable operator-linebreak */
import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../Context/MainContext';
import Movie from '../Organisms/Movie';
import Loading from '../Templates/Loading';

import './CSS/Page.css';

function Popular() {
  const { state, fetchPopular } = useContext(MovieContext);
  const [loading, setLoading] = useState(state.loading);
  // const [page, setPage] = useState(1);

  const getScroll = () => {
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight ===
      document.documentElement.offsetHeight
    ) {
      // fetchPopular();
      console.log('아래');
    }
  };

  useEffect(() => {
    fetchPopular(1);
    setLoading(false);
    setTimeout(() => {
      setLoading(state.loading);
    }, 500);
    document.addEventListener('scroll', getScroll);
    return () => {
      document.removeEventListener('scroll', getScroll);
    };
  }, [fetchPopular, state.loading]);

  return (
    <div className="Popular">
      {loading || <Loading />}
      <ul className="movie-list">
        {state.popularState.map((movie) => (
          <Movie key={movie.id} info={movie} type="popular" />
        ))}
      </ul>
    </div>
  );
}

export default React.memo(Popular);
