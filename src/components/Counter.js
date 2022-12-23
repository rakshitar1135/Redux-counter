import classes from './Counter.module.css';
import { useSelector,useDispatch} from 'react-redux';
const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter);
  const toggleCounterHandler = () => {};
  const incrementHandler=()=>{
    dispatch({type:'increment'})
  }
  const decrementHandler=()=>{
   dispatch({type:'decrement'})
  }
  const increasehandler=()=>{
   dispatch({type:'increase',amount:10})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increasehandler}>Increase By 10</button>
      </div>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
