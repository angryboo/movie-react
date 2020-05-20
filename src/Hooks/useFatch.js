import { useReducer, useCallback } from 'react';
import { initialState, reducer } from '../Reducer/Reducer';
import { movies } from '../API/MovieAPI';

const useFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 인기순 데이터
  const fetchPopular = useCallback(async (page) => {
    dispatch({ type: 'LOADING' });
    try {
      const movieData = await movies.getPopular(page);
      if (movieData.status === 200) {
        dispatch({
          type: 'POPULAR',
          popularState: movieData.data.results,
        });
      } else {
        dispatch({
          type: 'ERROR',
          error: {
            state: true,
            message: movieData.statusText,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: 'ERROR',
        error: {
          state: true,
          message: error.message,
        },
      });
    }
  });

  // Upcoming 데이터
  const fetchUpcoming = useCallback(async () => {
    dispatch({ type: 'LOADING' });
    try {
      const movieData = await movies.getUpcoming();
      if (movieData.status === 200) {
        dispatch({
          type: 'UPCOMING',
          upcomingState: movieData.data.results,
        });
      } else {
        dispatch({
          type: 'ERROR',
          error: {
            state: true,
            message: movieData.statusText,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: 'ERROR',
        error: {
          state: true,
          message: error.message,
        },
      });
    }
  });

  // 검색 데이터
  const fetchSearch = useCallback(async (text) => {
    dispatch({ type: 'LOADING' });
    try {
      const movieData = await movies.searchMovies(text);
      console.log('before-load', movieData);
      if (movieData.status === 200) {
        console.log('get-ok', movieData);
        dispatch({
          type: 'SEARCH',
          searchState: movieData.data.results,
        });
      } else {
        console.log('error', movieData);
        dispatch({
          type: 'ERROR',
          error: {
            state: true,
            message: movieData.statusText,
          },
        });
      }
    } catch (error) {
      console.log('error');
      dispatch({
        type: 'ERROR',
        error: {
          state: true,
          message: error.message,
        },
      });
    }
  });

  const changeInput = (text) => {
    dispatch({
      type: 'CHANGE-INPUT',
      inputState: text,
    });
  };

  const addInputHistory = (text) => {
    dispatch({
      type: 'ADD-HISTORY',
      inputHistory: text,
    });
  };

  return [
    state,
    fetchPopular,
    fetchUpcoming,
    fetchSearch,
    changeInput,
    addInputHistory,
  ];
};

export default useFetch;
