import axios from "axios";

export const FETCH_POKEMON_START = "FETCH_POKEMON";
export const FETCH_POKEMON_SUCCESS = "FETCH_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_FAILURE";

export const getPokemon = () => dispatch => {
  console.log("action");
  dispatch({ type: FETCH_POKEMON_START });
  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      console.log("error", err.response);
      dispatch({
        type: FETCH_POKEMON_FAILURE,
        payload: `${err.response.status} 
    ${err.response.data}`
      });
    });
};
