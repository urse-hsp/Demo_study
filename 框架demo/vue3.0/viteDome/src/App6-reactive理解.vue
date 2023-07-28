<template>
  <div>
    <p>{{ state.time }}</p>
    <button @click="myfn">按钮</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  data() {
    return {
      msg: "去微软",
    };
  },

  setup() {
    // const state = reactive({
    //   number:0
    // });
    // const state = reactive([1, 3, 5]);
    const state = reactive({
      time: new Date(),
    });
    const myfn = () => {
      // state.number = 1
      // state[0] = 666;
      // state.time.setDate(state.time.getDate() + 1);
      const newTime = new Date(state.time.getTime());
      newTime.setDate(state.time.getDate() + 1);
      state.time = newTime;
      console.log(state.time);
    };
    return {
      state,
      myfn,
    };
  },
};
</script>
