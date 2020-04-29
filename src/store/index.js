import React, { useReducer } from "react";

const initialState = {
  counter: 0,
  n: 0,
  allowed: true
};

export function CreateStore(reducerFn) {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  function getState() {
    return state;
  }
  return { getState, dispatch };
}
