import React from 'react';
import { getPokemonData } from './actions';
import { connect } from 'react-redux';

const PokemonData = props => {
    console.log('dc: PokemonData.js: PokemonData: props:', props);
    return (
        <>
        <button
            onClick={() => {
                props.getPokemonData();
            }}
        >
            Catch em All! 
        </button>
        {props.error && <div>{props.error}</div>}
        {props.isLoading ? (
            <div>cathing...</div>
        ) : (
            <>
            <div>Pokemon Name: {props.pokemon.name}</div>
            <div>{props.pokemon.new}</div>
            </>
        )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        pokemon: state.pokemon
    };
};

export default connect(
    mapStateToProps,
     { getPokemonData }
)(PokemonData);
