import axios from "axios";

export const POKEMONDATA_START = "POKEMONDATA_START";
export const POKEMONDATA_SUCCESS = "POKEMONDATA_SUCCESS";
export const POKEMONDATA_FAILURE = "POKEMONDATA_FAILURE";

export const getPokemonData = () => dispatch => {
  dispatch({ type: POKEMONDATA_START });

  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then(res => {
      console.log(res);
      dispatch({
        type: POKEMONDATA_SUCCESS,
        payload: res.data.value
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: POKEMONDATA_FAILURE,
        error: "You failed to catch this Pokemon!"
      });
    });
};
