

export enum TodoTypes {
  INDEX_REQUEST = '@todo/INDEX_REQUEST',
  INDEX_SUCCESS = '@todo/INDEX_SUCCESS',
  INDEX_ERROR = '@todo/INDEX_ERROR',


  ADD_REQUEST = '@todo/ADD_REQUEST',
  ADD_SUCCESS = '@todo/ADD_SUCCESS',
  ADD_ERROR = '@todo/ADD_ERROR',

  REMOVE_REQUEST = '@todo/REMOVE_REQUEST',
  REMOVE_SUCCESS = '@todo/REMOVE_SUCCESS',
  REMOVE_ERROR = '@todo/REMOVE_ERROR',

  TOGGLE_REQUEST = '@todo/TOGGLE_REQUEST',
  TOGGLE_SUCCESS = '@todo/TOGGLE_SUCCESS',
  TOGGLE_ERROR = '@todo/TOGGLE_ERROR',
}


export interface Todo {
  id?: number,
  userId: number,
  title: string,
  complete?: boolean
}

export interface TodoState {
  data: Todo[],
  loading: boolean,
  error: boolean
}
