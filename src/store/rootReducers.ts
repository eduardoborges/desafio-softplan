import { combineReducers } from 'redux';

import todos from './todos/reducers';
import characters from './characters/reducers';

export default combineReducers({
  TODOS: todos,
  CHARACTERS: characters,
});
