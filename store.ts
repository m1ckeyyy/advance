import { create } from 'zustand';

type StoreState = {
  searchInput: string;
  counter: number;
};

const initialState: StoreState = {
  searchInput: '',
  counter: 0,
};

interface Store {
  searchInput: '';
  counter: 0;
  incrementCounter: () => void;
  resetState: () => void;
}

export const store = create<Store>((set) => ({
  searchInput: '',
  counter: 0,
  incrementCounter: () => {
    set((state) => {
      counter: state.counter + 1;
    });
  },
  resetState: () => set(initialState),
}));
