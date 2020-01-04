/* eslint-disable camelcase */
const initialState = {
  isFetching: false,
  movies: [],
  moviePromo: {}
};

const setMovies = (movies) => ({type: `SET_MOVIES`, payload: movies});
const setMoviePromo = (movie) => ({type: `SET_MOVIE_PROMO`, payload: movie});
const setIsFetching = (isfetching) => ({type: `SET_IS_FETCHING`, payload: isfetching});

const loadMovies = () => (dispatch, getState, api) => {
  return api.get(`/films`)
  .then((response) => {
    dispatch(setMovies(response.data));
  });
};

const loadMoviePromo = () => (dispatch, getState, api) => {
  return api.get(`/films/promo`)
  .then((response) => {
    dispatch(setMoviePromo(response.data));
  });
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case `SET_MOVIES`:
      return {
        ...state,
        movies: action.payload
      };

    case `SET_MOVIE_PROMO`:
      return {
        ...state,
        moviePromo: action.payload
      };

    case `SET_IS_FETCHING`:
      return {
        ...state,
        isFetching: action.payload
      };
  }

  return state;
};

export default data;

export const ActionCreator = {
  setMovies,
  setMoviePromo,
  loadMovies,
  loadMoviePromo,
  setIsFetching
};
