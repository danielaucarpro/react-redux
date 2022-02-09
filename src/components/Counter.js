//to access the store we need to use a custom react hook created by react devs
//use selector is good because it's allow us to selector only parts of our store and not the entire store
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  //use selector needs a functions that point redux to what we want to extract from our store
  /*here we are just retrieving the state.counter from store 
  and now this component has the latest updated version of state.counter 
  which is automatically manage by redux behind the scenes*/
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  //use dispatch is a function that allow us to dispatch actions to our store
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
   };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
