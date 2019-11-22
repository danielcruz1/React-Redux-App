import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import reducer from "./reducers";
import PokemonData from "./PokemonData";
import "./App.css";


const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <h1>Show me the money!</h1>
      <PokemonData />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
