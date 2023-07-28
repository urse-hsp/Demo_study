import { Component, useEffect } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './index.scss'

// @inject('store')
// @observer
const Index = props => {
  // const { counter } = props.store
  const { increment, decrement, incrementAsync, counter } = props.counter
  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <View className='index'>
      <Button onClick={() => increment()}>+</Button>
      <Button onClick={() => decrement()}>-</Button>
      <Button onClick={() => incrementAsync()}>Add Async</Button>
      <Text>{counter}</Text>
    </View>
  )
}

// export default inject('store')(observer(Index)) app.js下 Provider store是个对象的时候 store={store}
export default inject('counter', 'user')(observer(Index))
