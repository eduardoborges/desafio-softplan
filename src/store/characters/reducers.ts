import { Reducer } from 'redux';
import { CharactersTypes as Types, CharactersState as State } from './types';

const INITIAL_STATE : State = {
  data: [],
  loading: false,
  error: false,
  page: 1,
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
        data: [...state.data, ...action.payload.results],
        page: state.page + 1,
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
