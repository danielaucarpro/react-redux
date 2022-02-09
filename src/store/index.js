// here we put all the redux logic
//we want to create the store and create the reducers

import { createStore } from 'redux';

const inicialState = { counter: 0, showCounter: true };

//state default value is counter: 0 - inicial state
const counterReducer = (state = inicialState, action) => {
    if(action.type === 'increment'){
        return {counter: state.counter + 1, showCounter: state.showCounter}
    }
    if(action.type === 'decrement'){
        return {counter: state.counter - 1, showCounter: state.showCounter}
    }
    if(action.type === 'toggle'){
        return {counter: state.counter, showCounter: !state.showCounter}
    }
    return state;
};

//create store wants a pointer to a reducer function as parameter
const store = createStore(counterReducer);

export default store;