import React, { useContext, useRef } from 'react';
import { MovieContext } from '../../Context/MainContext';
import Movie from '../Organisms/Movie';

function Search() {
  const { state, fetchSearch, changeInput } = useContext(MovieContext);
  // const [loading, setState] = useState(state.loading);

  const inputRef = useRef();
  const handleChange = (text) => {
    changeInput(text);
  };
  const handleClick = (text) => {
    fetchSearch(text);
  };
  return (
    <div className="Search">
      <input
        type="text"
        onChange={() => {
          handleChange(inputRef.current.value);
        }}
        ref={inputRef}
      />
      <button
        type="button"
        onClick={() => {
          handleClick(state.inputState);
          inputRef.current.value = '';
        }}
      >
        검색
      </button>
      {state.inputState}
      {/* {loading || <Loading />} */}
      <ul className="movie-list">
        {state.searchState.map((movie) => (
          <Movie key={movie.id} info={movie} type="search" />
        ))}
      </ul>
    </div>
  );
}

export default Search;
