<template>
  <div>
    <p>{{ count }}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",

  // 解决了数据和业务逻辑的分类 不利于管理
  // setup 函数是组合api的入口函数
  setup() {
    // 定义一个名称叫做connt的变量，这个变量的初始值是0 、 这个变量发生改变之后， Vue会自动更UI
    const count = ref(0); // 在祝贺api中定义的变量/方法，压箱在外接使用，必须通过react 暴露出去
    // 在组合api中，如果想定义方法，不用定义到methods中，直接定义即可
    function myFn() {
      // alert("1234");
      console.log(count.value);
      count.value++;
    }
    return {
      count,
      myFn,
    };
  },
};
</script>
