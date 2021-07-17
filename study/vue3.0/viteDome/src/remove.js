import { reactive } from "vue";

function uscRcmoveStudcnt() {
  const state = reactive({
    stus: [
      { name: "qwe", id: 0, age: 10 },
      { name: "ert", id: 1, age: 10 },
      { name: "tyu", id: 2, age: 10 },
    ],
  });
  const remStu = (index) => {
    state.stus = state.stus.filter((item, indexs) => indexs !== index);
  };
  return { state, remStu };
}

export default uscRcmoveStudcnt;
