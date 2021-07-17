<template>
  <div>
    <p>{{ state.a }}</p>
    <p>{{ state.gf.b }}</p>
    <p>{{ state.gf.f.c }}</p>
    <p>{{ state.gf.f.s.d }}</p>
  </div>
  <button @click="myfn">按钮</button>
</template>

<script>
import { reactive, ref, shallowReactive, shallowRef } from "vue";
// import { ref } from "vue";
import { isRef, isReactive } from "vue";

export default {
  name: "App",
  data: () => {
    return {
      msg: "去微软",
    };
  },

  setup() {
    const state = shallowReactive({
      a: "a",
      gf: {
        b: "b",
        f: {
          c: "c",
          s: {
            d: "d",
          },
        },
      },
    });
    const myfn = () => {
      // state.value.a = "1";
      // state.value.gf.b = "2";
      // state.value.gf.f.c = "3";
      // state.value.gf.f.s.d = "4";

      // state.a = "1";
      state.gf.b = "2";
      state.gf.f.c = "3";
      state.gf.f.s.d = "4";
    };
    return {
      state,
      myfn,
    };
  },
};
</script>
