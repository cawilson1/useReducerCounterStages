import React, { useReducer } from "react";
import "./App.css";

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const initialState = {
  counter: 0
};

function incrementCounter() {
  return { type: INCREMENT_COUNTER };
}
function decrementCounter() {
  return { type: DECREMENT_COUNTER };
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);
  return (
    <div className="App">
      <header className="App-header">
        <div>{state.counter}</div>
        <button onClick={() => dispatch(incrementCounter())}>Increment</button>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
