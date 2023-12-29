import { create } from 'zustand';

type BearStateProps = {
    isUserAdmin: boolean;
    darkMode: boolean;
    language: 'polish' | 'english' | 'ukrainian' | 'russian';
};
type StoreProps = BearStateProps & {
    toggleDarkMode: () => void;
    changeLanguage: () => void;
};

const useStore = create<StoreProps>((set) => ({
    isUserAdmin: false,
    darkMode: true,
    language: 'polish',
    toggleDarkMode: () =>
        set((state: BearStateProps) => ({
            // console.log("it's state: ",state)
            darkMode: !state.darkMode,
        })),
    changeLanguage: () => {},

    // increasePopulation: () =>
    //     set((state: BearStateProps) => ({ bears: state.bears + 1 })),
    // removeAllBears: () => set({ bears: 0 }),
}));

export default useStore;

// export const doSum = (a: number, b: number) => {
//   return a + b;
// };
// console.log(doSum(1, 2));
// type StoreState = {
//   searchInput: string;
//   counter: number;
// };

// const initialState: StoreState = {
//   searchInput: '',
//   counter: 0,
// };

// interface Store {
//   searchInput: '';
//   counter: 0;
//   incrementCounter: () => void;
//   resetState: () => void;
// }

// export const store = create<Store>((set) => ({
//   searchInput: '',
//   counter: 0,
//   incrementCounter: () => {
//     set((state) => {
//       counter: state.counter + 1;
//     });
//   },
//   resetState: () => set(initialState),
// }));
