import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { decrease, increase } from '../../context/slice';

const FunctionalComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.counter);

  return (
    <p>
      <FaPlusCircle onClick={() => dispatch(increase())} />
      <span>{state.value}</span>
      <FaMinusCircle onClick={() => dispatch(decrease())} />
    </p>
  );
}

export default FunctionalComponent;
