import React from "react";
import "./App.css";
import {
  incrementCounter,
  decrementCounter,
  updateN,
  incrementByN,
  decrementByN,
  allowIncrementByN
} from "./actions";
import { reducer } from "./reducers";
import { CreateStore } from "./store";

function App() {
  const store = CreateStore(reducer);
  console.log(store.getState());
  return (
    <div className="App">
      <header className="App-header">
        <div>{store.getState().counter}</div>
        <button onClick={() => store.dispatch(incrementCounter())}>
          Increment
        </button>
        <button onClick={() => store.dispatch(decrementCounter())}>
          Decrement
        </button>

        <div>
          <label>Number to increment by</label>
          <input
            onChange={e => store.dispatch(updateN(Number(e.target.value)))}
          />
          <br />
          <button
            onClick={() => store.dispatch(incrementByN())}
            disabled={!store.getState().allowed}
          >
            Increment by n
          </button>
          <button
            onClick={() => store.dispatch(decrementByN())}
            disabled={!store.getState().allowed}
          >
            Decrement by n
          </button>
        </div>
        <input
          type="checkbox"
          onChange={() => store.dispatch(allowIncrementByN())}
        />
      </header>
    </div>
  );
}

export default App;
