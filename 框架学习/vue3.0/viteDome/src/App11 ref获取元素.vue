<template>
  <div>
    <div ref="box">dv</div>
    <!-- <button @click="myfn">按钮</button> -->
  </div>
</template>

<script>
import { ref, customRef, onMounted } from "vue";

export default {
  name: "App",

  setup() {
    // console.log(this.this, $refs.box);
    let box = ref(null);
    console.log(box.value);

    onMounted(() => {
      console.log("onMounted", box.value);
    });

    return {
      box,
    };
  },
};
</script>
