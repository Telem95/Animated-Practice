import createDataContext from "../helpers/createDataContext";
import moviesApi from "../api/theMovieDB";

const moviesReducer = (state, action) => {
  switch (action.type) {
    case "add_movies":
      return { ...state, movies: [...state.movies, ...action.payload] };
    case "add_tv":
      return { ...state, tv: [...state.tv, ...action.payload] };
    case "add_actors":
      return { ...state, actors: [...state.actors, ...action.payload] };
    default:
      return state;
  }
};

const fetchTrendingMovies = (dispatch) => async () => {
  try {
    const response = await moviesApi("/trending/movie/week").get();
    const { results } = response.data;
    dispatch({ type: "add_movies", payload: results });
  } catch (err) {
    console.log("Error: " + err);
  }
};

const fetchTrendingTV = (dispatch) => async () => {
  try {
    const response = await moviesApi("/trending/tv/week").get();
    const { results } = response.data;
    dispatch({ type: "add_tv", payload: results });
  } catch (err) {
    console.log("Error: " + err);
  }
};

const fetchTrendingActors = (dispatch) => async () => {
  try {
    const response = await moviesApi("/trending/person/week").get();
    const { results } = response.data;
    dispatch({ type: "add_actors", payload: results });
  } catch (err) {
    console.log("Error: " + err);
  }
};

export const { Context, Provider } = createDataContext(
  moviesReducer,
  {
    fetchTrendingMovies,
    fetchTrendingTV,
    fetchTrendingActors,
  },
  { movies: [], tv: [], actors: [] }
);
