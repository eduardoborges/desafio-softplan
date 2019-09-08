/* eslint-disable @typescript-eslint/no-explicit-any */
import { action } from 'typesafe-actions';

import { TodoTypes, Todo } from './types';

// index
export const indexRequest = () => action(
    TodoTypes.INDEX_REQUEST,
);

export const indexSuccess = (payload: Todo[]) => action(
    TodoTypes.INDEX_SUCCESS,
    payload,
);

export const indexError = () => action(
    TodoTypes.INDEX_ERROR,
);

// add
export const addRequest = (text: string) => action(
    TodoTypes.ADD_REQUEST,
    text,
);

export const addSuccess = () => action(
    TodoTypes.ADD_SUCCESS,
);

export const addError = () => action(
    TodoTypes.ADD_ERROR,
);

// remove
export const removeRequest = (todo: Todo) => action(
    TodoTypes.REMOVE_REQUEST,
    todo.id,
);

export const removeSuccess = () => action(
    TodoTypes.REMOVE_SUCCESS,
);

export const removeError = () => action(
    TodoTypes.REMOVE_ERROR,
);
