<template>
  <div>
    <p>{{ state }}</p>
  </div>
  <button @click="myfn">按钮</button>
</template>

<script>
import { reactive, } from "vue";

export default {
  name: "App",

  setup() {
    const obj = { name: "lnk", age: 18 };
    const state = reactive(obj)
    const obj2 = toRaw(state)
    console.log(obj2 === obj)


    // 引用关系，state的本质是一个proxy对象，在这个对象中引用obj

    const myfn = () => {
      // 如果直接修改对象，是无法触发界面更新的，需要通过包装之后的对象来修改，才会出发界面的更新
      // obj.name = 'zs'
      // console.log(obj)
      state.name = 'zs'
      console.log(state)
    };
    return {
      state,
      myfn,
    };
  },
};
</script>
