import { atom } from 'recoil';
import { localStorageEffect } from '../helpers';
import { MovieData } from '../../helpers';

export const PERSIST_KEY = 'persist:selected-movie';

const initialState = null;

export const selectedMovieAtom = atom<MovieData | null>({
  key: 'selectedMovieState',
  default: initialState,
  effects_UNSTABLE: [localStorageEffect(PERSIST_KEY)],
});
