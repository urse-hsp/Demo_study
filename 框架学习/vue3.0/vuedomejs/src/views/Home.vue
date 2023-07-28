<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div>
      ---------------------------------------------------------------
      <div
        v-for="(item, i) in list"
        :key="i"
        :ref="
          el => {
            divs[i] = el
          }
        "
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { watch, reactive, ref, onMounted, onUpdated, onUnmounted, provide, inject, watchEffect, onBeforeUpdate, unref, toRef } from 'vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    // 侦听一个 getter
    const state = reactive({ count: 0 })
    watch(
      () => state.count,
      (count, prevCount) => {
        console.log(count, prevCount)
        /* ... */
      }
    )

    // 直接侦听一个 ref
    const count = ref(0)
    watch(count, (count, prevCount) => {
      console.log(count, prevCount)
    })

    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })

    const ThemeSymbol = Symbol()
    // 提供者：
    const themeRef = ref('dark')
    provide(ThemeSymbol, themeRef)

    // 使用者：
    const theme = inject(ThemeSymbol, ref('light'))
    watchEffect(() => {
      console.log(`theme set to: ${theme.value}`)
    })

    const list = reactive([1, 2, 3])
    const divs = ref([])
    // 确保在每次变更之前重置引用
    onBeforeUpdate(() => {
      divs.value = []
    })

    // const as = ref(1)
    const as2 = reactive({ count: 0 })
    const unwrapped = unref(as2)
    console.log(unwrapped)

    const statee = reactive({
      foo: 1,
      bar: 2
    })
    const fooRef = toRef(statee, 'foo')
    fooRef.value++
    console.log(statee.foo, 'foRef')
    statee.foo++
    console.log(statee.foo, 'foo')

    return {
      list,
      divs
    }
  }
}
</script>
