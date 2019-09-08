import { CharactersState } from './characters/types';
import { TodoState } from './todos/types';

export interface AppState {
  TODOS: TodoState,
  CHARACTERS: CharactersState,
}
