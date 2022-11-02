import redux, { createStore } from "redux";

// create redux store
// is not deprecated , but recommand configureStore in redux Toolkit library
// you have 3 options if dont want to see that strikethrough
// 1. use redux toolkit
// 2. change export name
// 3. do nothing. it just strikethrough , it doesn't effect how your code behavior

/** 2. Create Reducer function
 *     Reducer function could have 2 parameters for (Old State + Dispatch Action)
 *     and could return New State Object
 *     this means Reducer function should be a Pure Function => same input leads to same output & No sideEffect
 *     Ex. dont send HTTP request , dont store something in local storage, dont get by local storage
 */
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

/** 1. Create Store */
/** 3. Mapping Reducer function with store */
const store = redux.createStore(counterReducer); // this store should be manage data(state)
//  The data managed by the store is determined by the reducer function.

console.log(store.getState());

/** 4. Generate subscribe function*/
const counterSubscriber = () => {
  const lastestState = store.getState();
  console.log("lastestState : ", lastestState);
};

/** 5. subscribe */
store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" }); // dependency of reducer Function. or trigger of reducer function
store.dispatch({ type: "decrement" }); // dependency of reducer Function. or trigger of reducer function
