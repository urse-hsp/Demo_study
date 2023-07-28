import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './index.scss'

@inject('counter', 'user')
@observer
class Index extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  // increment = () => {
  //   const { increment } = this.props.counter
  //   increment()
  // }

  // decrement = () => {
  //   const { decrement } = this.props.counter
  //   decrement()
  // }

  // incrementAsync = () => {
  //   const { incrementAsync } = this.props.counter
  //   incrementAsync()
  // }

  render() {
    const { counter, increment, decrement, incrementAsync } = this.props.counter
    return (
      <View className='index'>
        <Button onClick={() => increment()}>+</Button>
        <Button onClick={() => decrement()}>-</Button>
        <Button onClick={() => incrementAsync()}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    )
  }
}

export default Index
