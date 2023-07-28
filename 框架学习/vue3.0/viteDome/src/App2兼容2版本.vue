<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <p>{{ msg }}</p>
    <button @click="onclick1">按钮1</button>
    <button @click="onclick2">按钮2</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // data() {
  //   return {
  //     msg: "去微软",
  //   };
  // },
  data: () => {
    return {
      msg: "去微软",
    };
  },
  methods: {
    onclick1() {
      alert("蹭课");
    },
  },
  components: {
    HelloWorld,
  },

  setup() {
    const onclick2 = () => {
      alert("asd");
    };
    return {
      onclick2,
    };
  },
};
</script>
