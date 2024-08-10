import { atom } from 'recoil';

export const SearchState = atom({
  key: 'SearchState',
  default: '',
});

export const LawyerTypeState = atom({
  key: 'LawyerTypeState',
  default: 'All',
});
