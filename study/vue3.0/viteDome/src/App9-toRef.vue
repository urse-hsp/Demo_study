<template>
  <div>
    <p>{{ state.name }}</p>
  </div>
  <button @click="myfn">按钮</button>
</template>

<script>
import { reactive, ref,toRef, toRefs } from "vue";

export default {
  name: "App",

  setup() {
    const obj = { name: "lnj", age: 18 };
    // let state = toRef(obj); // 等于拿到这个数据创建一个ref响应式数据
    let state = toRefs(obj); // 等于拿到这个数据创建一个ref响应式数据
    console.log(state);

    const myfn = () => {
      // state.value = "zs";
      state.name.value = "zs";
      state.age.value = 666
      // 结论：利用ｒｅｆ将某个对象中的属性变成响应式的数据。我门修改的响应式数据是不会影响到原始数据的
      // toref 将某个对象中的属性变成响应式数据，我们修改数据会影响原始数据的。通过toRef创建的数据修改后，不会更新ui界面
      // ref-复制数据，修改不会影响数据源，ui界面会自动更新。toRef-引用数据，修改会影响数据原改变，界面不会更新。

      console.log(obj);
      console.log(state);
    };
    return {
      state,
      myfn,
    };
  },
};
</script>
