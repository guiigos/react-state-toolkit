import { configureStore } from '@reduxjs/toolkit';
import counter from '../slice';

export default configureStore({
  reducer: {
    counter,
  },
});
