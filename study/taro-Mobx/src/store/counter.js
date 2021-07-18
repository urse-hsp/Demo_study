import { observable, action, computed } from 'mobx'

// const counterStore = observable({
//   counter: 0,
//   counterStore() {
//     this.counter++
//   },
//   increment() {
//     console.log('increment')
//     this.counter++
//   },
//   decrement() {
//     console.log('decrement')
//     this.counter--
//   },
//   incrementAsync() {
//     console.log('incrementAsync')
//     setTimeout(() => {
//       this.counter++
//     }, 1000)
//   },
// })

class counterStore {
  @observable counter = 0

  @action.bound
  counterStore() {
    this.counter++
  }

  @action.bound
  increment() {
    console.log('increment')
    this.counter++
  }

  @action.bound
  decrement() {
    console.log('decrement')
    this.counter--
  }

  @action.bound
  incrementAsync() {
    console.log('incrementAsync')
    setTimeout(() => {
      this.counter++
    }, 1000)
  }

  @computed get total() {
    return this.counter * 10
  }
}

export const counterStores = new counterStore()
export default counterStores
