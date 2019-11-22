import {
    POKEMONDATA_START,
    POKEMONDATA_SUCCESS,
    POKEMONDATA_FAILURE
  } from "../actions";
  
  const initialState = {
    isLoading: false,
    error: "",
    pokemon: { name: "Sebastianzard", new: "" }
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case POKEMONDATA_START:
        return {
          ...state,
          isLoading: true
        };
      case POKEMONDATA_SUCCESS:
        return {
          ...state,
          pokemon: { ...state.pokemon, new: action.payload },
          isLoading: false
        };
      case POKEMONDATA_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  