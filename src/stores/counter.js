import {defineStore} from 'pinia';

export const useCounterStore = defineStore('counter', {
  state:() =>({
    counter: 1,
  }),
  getters: {
    doubleCount: state => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    }
  },
})