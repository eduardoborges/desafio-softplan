/* eslint-disable @typescript-eslint/no-explicit-any */
import { action } from 'typesafe-actions';

import { CharactersTypes as Types, ResponseCharacters, Character } from './types';

// index
export const indexRequest = () => action(
  Types.INDEX_REQUEST,
);

export const indexSuccess = (payload: ResponseCharacters[]) => action(
  Types.INDEX_SUCCESS,
  payload,
);

export const indexError = () => action(
  Types.INDEX_ERROR,
);

export const updateChar = (char: Character) => action(
  Types.UPDATE,
  char,
);
