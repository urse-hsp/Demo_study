<template>
  <div>
    <button @click="myfn">按钮1</button>
    <p>{{ msg }}</p>
    <button @click="myfn2">按钮2</button>
    <p>{{ age }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  data() {
    return {
      msg: "去微软",
    };
  },
  methods: {
    myfn() {
      alert("蹭课");
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  components: {},

  setup() {
    console.log("setup");
    const age = ref(18);
    function myfn2() {
      alert("www.66.com");
    }
    return {
      age,
      myfn2,
    };
  },
};
</script>
