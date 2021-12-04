import { atom } from 'recoil';
import { localStorageEffect } from '../helpers';
import { ObjectLiteral } from '../../helpers';

export const PERSIST_KEY = 'persist:selected-movie';

const initialState = {};

export const selectedMovieAtom = atom<ObjectLiteral>({
  key: 'selectedMovieState',
  default: initialState,
  effects_UNSTABLE: [localStorageEffect(PERSIST_KEY)],
});
