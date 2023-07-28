<template>
  <div>
    <form action="">
      <input type="text" v-model="state2.stu.id" />
      <input type="text" v-model="state2.stu.name" />
      <input type="text" v-model="state2.stu.age" />
      <input type="submit" @click="addStu" />
    </form>
    <ul>
      <li
        v-for="(item, index) in state.stus"
        :key="item.id"
        @click="remStu(index)"
      >
        {{ item.id }} : {{ item.name }} : {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";
import  uscRcmoveStudcnt  from "./remove";
import  useAddStudent  from "./add";

export default {
  name: "App",

  setup() {
    // const { state, remStu } = uscRcmoveStudcnt();
    // return { state, remStu };
    const uscRcmoveStudcnts = uscRcmoveStudcnt();
    const useAddStudents = useAddStudent(uscRcmoveStudcnts);
    return { ...uscRcmoveStudcnts, ...useAddStudents };
  },
};

// function uscRcmoveStudcnt() {
//   const state = reactive({
//     stus: [
//       { name: "qwe", id: 0, age: 10 },
//       { name: "ert", id: 1, age: 10 },
//       { name: "tyu", id: 2, age: 10 },
//     ],
//   });
//   const remStu = (index) => {
//     state.stus = state.stus.filter((item, indexs) => indexs !== index);
//   };
//   return { state, remStu };
// }

// const useAddStudent = (uscRcmoveStudcnts) => {
//   const state2 = reactive({
//     stu: {
//       id: "",
//       name: "",
//       age: "",
//     },
//   });
//   const addStu = (e) => {
//     e.preventDefault();
//     const stu = Object.assign({}, state2.stu);
//     uscRcmoveStudcnts.state.stus.push(stu);
//     state2.stu.id = "";
//     state2.stu.name = "";
//     state2.stu.age = "";
//   };
//   return { state2, addStu };
// };

</script>

// 数据业务逻辑分散问题解决， 自己保存自己的数据和业务逻辑
