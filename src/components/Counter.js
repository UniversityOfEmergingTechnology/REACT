import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {
    // this hook will extract data from redux store.
    // this hook will take a function as argument which is called with the entire state of the store as input. Return a subset of state that the component needs
    const count = useSelector((state) => (state.counter.value));
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <br /><br />
        <div>{count}</div>
        <br /><br />
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter