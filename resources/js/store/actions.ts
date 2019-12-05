import {ActionTree} from 'vuex';
import RootState from './state';

export enum GlobalActionKeys {
  fetchRootData = 'fetchRootData',
  createNewListItem = 'createNewListItem',
  fetchUserCollections = 'fetchUserCollections',
}

export const actions: ActionTree<RootState, RootState> = {};
