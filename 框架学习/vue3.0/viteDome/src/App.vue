<template>
  <div>
    <p>{{ state.name }}</p>
    <p>{{ state.attr.age }}</p>
    <p>{{ state.attr.height }}</p>
    <button @click="myfn">按钮</button>

    <!-- <p v-model="a">{{ b }}</p> -->
    <input type="text" v-model='true ? a : b' />
    <button @click="fn">俺</button>

    <ul>
      <li v-for="item in list" :key="item">
        <p v-for="items in item" :key="items">{{items.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, readonly, isReadonly, shallowReadonly } from "vue";
// readonly只读数据 并且递归只读
// shallowReadonly创建只读的，不是递归的
// const和readonly区别：赋值保护，变量不能重新赋值。readonly属性保护，属性不能重新赋值
export default {
  name: "App",
  data(){
    return {
      list:[
        [{name:'qwe'},{name:'qwe2'}],
        [{name:'哈桑2'},{name:'哈桑3'}]
      ]
    }
  },
  created(){
    console.log(this.list)
  },

  setup() {
    let state = readonly({ name: "hsp", attr: { age: 18, height: 1.88 } });

    function myfn() {
      state.name = "123";
      state.attr.age = "123";
      state.attr.height = "123";
      console.log(isReadonly(state));
    }

    const a = ref(1);
    const b = ref(3);

    function fn() {
      console.log(a.value);
      console.log(b.value);
    }
    return { state, myfn, a, b, fn };
  },
};
</script>
