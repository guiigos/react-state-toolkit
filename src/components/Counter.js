import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from '../context/slice';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
      <div>
        <FaPlusCircle onClick={() => dispatch(increase())} />
        <p>{count}</p>
        <FaMinusCircle onClick={() => dispatch(decrease())} />
      </div>
    );
}

export default Counter;
