import { atom } from 'recoil';
import { localStorageEffect } from '../helpers';
import { ObjectLiteral } from '../../helpers';

export const PERSIST_KEY = 'persist:favorite-movies';

const initialState: any[] = [];

export const favoriteMoviesAtom = atom<any>({
  key: 'favoriteMoviesState',
  default: initialState,
  effects_UNSTABLE: [localStorageEffect(PERSIST_KEY)],
});
