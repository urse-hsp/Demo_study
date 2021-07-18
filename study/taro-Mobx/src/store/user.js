import { observable, action } from 'mobx'

const userStore = observable({
  counter: 2,
  counterStore() {
    this.counter++
  },
  increment() {
    console.log('increment')
    this.counter++
  },
  decrement() {
    console.log('decrement')
    this.counter--
  },
  incrementAsync() {
    console.log('incrementAsync')
    setTimeout(() => {
      this.counter++
    }, 1000)
  },
})



export default userStore
