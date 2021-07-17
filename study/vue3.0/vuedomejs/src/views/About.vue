<template>
  <div>
    <button @click="increment">Count is: {{ state.count }}, double is: {{ state.double }}</button>
    <p>{{ obj.count }}</p>
  </div>
</template>

<script>
import { reactive, computed, ref, readonly, watchEffect } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })
    const obj = reactive({ count: 12 })

    // 作为响应式对象的属性访问
    const count = ref(0)
    const state2 = reactive({
      count
    })
    console.log(state2.count) // 0
    state2.count = 1
    console.log(count.value) // 1

    const arr = reactive([ref(3)])
    // 这里需要 .value
    console.log(arr[0].value)
    const map = reactive(new Map([['foo', ref(4)]]))
    // 这里需要 .value

    console.log(map.get('foo').value)
    const foo = ref('foo') // foo 的类型: Ref<string | number>
    foo.value = 123 // 能够通过！

    // computed
    const counts = ref(1)
    const plusOne = computed({
      get: () => count.value + 1,
      set: val => {
        counts.value = val - 1
      }
    })
    plusOne.value = 2
    console.log('counts', counts.value) // 0

    // readonly传入一个对象（响应式或普通）或 ref，返回一个原始对象的只读代理。一个只读的代理是“深层的”，对象内部任何嵌套的属性也都是只读的。
    const original = reactive({ count: 0 })
    const copy = readonly(original)
    watchEffect(() => {
      // 依赖追踪
      console.log('copy', copy.count)
    })
    // original 上的修改会触发 copy 上的侦听
    original.count++
    // 无法修改 copy 并会被警告
    // copy.count++ // warning!

    function increment() {
      state.count++
    }

    return {
      state,
      increment,
      obj
    }
  }
}
</script>
