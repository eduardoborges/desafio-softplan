
export enum CharactersTypes {
  INDEX_REQUEST = '@chars/INDEX_REQUEST',
  INDEX_SUCCESS = '@chars/INDEX_SUCCESS',
  INDEX_ERROR = '@chars/INDEX_ERROR',
}

export interface Character {
  id?:number,
  birth_year: string,
  created: Date,
  edited: Date,
  eye_color: string,
  films: string[],
  gender: 'male' | 'female',
  hair_color: string,
  height: string,
  homeworld: string,
  mass: string,
  name: string,
  skin_color: string,
  species: string[],
  starships: string[],
  url: string,
}

export interface CharactersState {
  data: Character[],
  loading: boolean,
  error: boolean,
  page: number,
}

export interface ResponseCharacters {
  count: number,
  next: string,
  previous: string,
  results: Character[],
}
