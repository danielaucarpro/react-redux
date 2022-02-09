// here we put all the redux logic
//we want to create the store and create the reducers

import { createStore } from 'redux';

//state default value is counter: 0 - inicial state
const counterReducer = (state = { counter: 0 }, action) => {
    // switch (action.type) {
    //     case 'increment':
    //         return { counter: state.counter + 1 };
    //     case 'decrement':
    //         return { counter: state.counter - 1 };
    //     default: state;
    // }
    if(action.type === 'increment'){
        return {counter: state.counter + 1}
    }
    if(action.type === 'decrement'){
        return {counter: state.counter - 1}
    }
    return state;
};

//create store wants a pointer to a reducer function as parameter
const store = createStore(counterReducer);

export default store;