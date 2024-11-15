import { atomWithStorage } from 'jotai/utils';

export const favouritesAtom = atomWithStorage('favourites', []); 
export const searchHistoryAtom = atomWithStorage('searchHistory', []);