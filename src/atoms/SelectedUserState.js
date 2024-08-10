import { atom } from 'recoil';

export const selectedUserState = atom({
  key: 'selectedUserState',
  default: null, // Initially, no user is selected
});
