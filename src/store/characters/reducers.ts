import { Reducer } from 'redux';
import { CharactersTypes as Types, CharactersState as State } from './types';

const INITIAL_STATE : State = {
  data: [],
  loading: false,
  error: false,
  next: null,
};


const reducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // index
    case Types.INDEX_REQUEST:
      return {
        ...state, loading: true, error: false,
      };

    case Types.INDEX_SUCCESS:
      return {
        ...state,
        data: [...action.payload.results],
        next: action.payload.next,
        loading: false,
        error: false,
      };

    case Types.INDEX_ERROR:
      return {
        ...state, loading: false, error: true,
      };

    default:
      return state;
  }
};

export default reducer;
