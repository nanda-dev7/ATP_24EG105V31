import { create } from 'zustand'

// create store
export const useCounterStore = create((set) => ({
  // state
  newCounter: 0,
  newCounter1:0,
  newCounter2:200,
// add user state and (name,age,email)
user: { name: "ravi", email: "ravi@gmail.com", age: 21 },
// function to change email
changeEmail: () =>
  set((state) => ({ user: { ...state.user, email: "test@gmail.com" } })),
// function to change name and age
changeNameAndAge: () =>
  set((state) => ({ user: { ...state.user, name: "bhanu", age: 23 } })),



  // actions
  incrementCounter: () =>
    set((state) => ({ newCounter: state.newCounter + 1 })),

  decrementCounter: () =>
    set((state) => ({ newCounter: state.newCounter - 1 })),

  reset: () => set({ newCounter: 0 }),


  // function to change newCounter to 500
  incrementCounter1: () => set({ newCounter1: 500 }),
  // function to decrement newCounter2 by 20
  decrementCounter2: () =>
    set((state) => ({ newCounter2: state.newCounter2 - 20 })),

}))









