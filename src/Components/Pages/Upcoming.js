import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../Context/MainContext';
import Movie from '../Organisms/Movie';
import './CSS/Page.css';
import Loading from '../Templates/Loading';

function Upcoming() {
  const { state, fetchUpcoming } = useContext(MovieContext);
  const [loading, setState] = useState(false);
  useEffect(() => {
    fetchUpcoming();
    setState(false);
    setTimeout(() => {
      setState(state.loading);
    }, 800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loading]);

  return (
    <div className="Upcoming">
      {loading || <Loading />}
      <ul className="movie-list">
        {state.upcomingState.map((movie) => (
          <Movie key={movie.id} info={movie} type="upcoming" />
        ))}
      </ul>
    </div>
  );
}

export default Upcoming;
