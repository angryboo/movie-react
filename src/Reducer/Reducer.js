/* eslint-disable default-case */
export const initialState = {
  popularState: [],
  upcomingState: [],
  searchState: [],
  error: {
    state: false,
    message: null,
  },
  loading: true,
  inputState: '',
  inputHistory: [],
};

export const reducer = (state, action) => {
  console.log('reducer', state);
  switch (action.type) {
    case 'LOADING':
      return {
        popularState: initialState.popularState,
        upcomingState: initialState.upcomingState,
        searchState: initialState.searchState,
        error: initialState.error,
        loading: true,
        inputState: '',
        inputHistory: [],
      };
    case 'POPULAR':
      return {
        ...state,
        popularState: [...state.popularState, ...action.popularState],
      };
    case 'UPCOMING':
      return {
        ...state,
        upcomingState: action.upcomingState,
      };
    case 'SEARCH':
      return {
        ...state,
        searchState: action.searchState,
      };
    case 'CHANGE-INPUT':
      return {
        ...state,
        inputState: action.inputState,
      };
    case 'ADD-HISTORY':
      return {
        ...state,
        inputHistory: [...state.inputHistory, action.inputHistory],
      };
    case 'ADD-PAGE-POP':
      return {
        ...state,
        popularPage: action.popularPage,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
