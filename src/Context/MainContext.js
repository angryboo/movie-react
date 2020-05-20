/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import useFetch from '../Hooks/useFatch';

export const MovieContext = createContext(null);

// eslint-disable-next-line import/prefer-default-export
export function MovieProvider({ children }) {
  const [
    state,
    fetchPopular,
    fetchUpcoming,
    fetchSearch,
    changeInput,
    changePagePopular,
  ] = useFetch();
  const ContextValue = {
    state,
    fetchPopular,
    fetchUpcoming,
    fetchSearch,
    changeInput,
    changePagePopular,
  };
  return (
    <MovieContext.Provider value={ContextValue}>
      {children}
    </MovieContext.Provider>
  );
}
