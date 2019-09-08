import { Reducer } from 'redux';
import { TodoState, TodoTypes } from './types';

const INITIAL_STATE : TodoState = {
  data: [],
  loading: false,
  error: false,
};


const reducer: Reducer<TodoState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // index
    case TodoTypes.INDEX_REQUEST:
      return {
        ...state, loading: true, error: false,
      };

    case TodoTypes.INDEX_SUCCESS:
      return {
        ...state, loading: false, error: false, data: [...action.payload],
      };

    case TodoTypes.INDEX_ERROR:
      return {
        ...state, loading: false, error: true,
      };

    // add
    case TodoTypes.ADD_REQUEST:
      return {
        ...state, loading: true,
      };

    case TodoTypes.ADD_SUCCESS:
      return {
        ...state, loading: false, error: false,
      };

    case TodoTypes.ADD_ERROR:
      return {
        ...state, loading: false, error: true,
      };

    // remove
    case TodoTypes.REMOVE_REQUEST:
      return {
        ...state, loading: true,
      };

    case TodoTypes.REMOVE_SUCCESS:
      return {
        ...state, loading: false, error: false,
      };

    case TodoTypes.REMOVE_ERROR:
      return {
        ...state, loading: false, error: true,
      };

    default:
      return state;
  }
};

export default reducer;
