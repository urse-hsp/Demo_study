<template>
  <div>
    <p>{{ age }}</p>
    <button @click="myfn">按钮</button>
    <ul>
      <li v-for="item in state" :key="item">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, customRef } from "vue";

function myRef(value) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        console.log("get", value);
        return value;
      },
      set(newValue) {
        trigger();
        console.log("set", newValue);
        value = newValue;
      },
    };
  });
}

function myRef2(value) {
  return customRef((track, trigger) => {
    fetch(value)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        value = data;
        trigger();
      })
      .catch((err) => {
        console.log(err);
      });
    return {
      get() {
        track(); //追踪
        console.log("get", value);
        // 注意, b不能在get方法中发送忘了亲戚，  不然会死循环
        return value;
      },
      set(newValue) {
        console.log("set", newValue);
        value = newValue;
        trigger();
      },
    };
  });
}
export default {
  name: "App",

  setup() {
    // const age = ref(18); // reactive({value: 18})
    const age = myRef(18);
    const myfn = () => {
      age.value += 1;
    };

    const dataList = ref([]);
    // customRef理解
    // fetch("../public/data.json")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     dataList.value = data;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    let state = myRef2("../public/data.json");

    return {
      age,
      myfn,
      state,
    };
  },
};
</script>
