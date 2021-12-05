import { atom } from 'recoil';
import { localStorageEffect } from '../helpers';
import { MovieData } from '../../helpers';

export const PERSIST_KEY = 'persist:favorite-movies';

const initialState: MovieData[] = [];

export const favoriteMoviesAtom = atom<Array<MovieData>>({
  key: 'favoriteMoviesState',
  default: initialState,
  effects_UNSTABLE: [localStorageEffect(PERSIST_KEY)],
});
