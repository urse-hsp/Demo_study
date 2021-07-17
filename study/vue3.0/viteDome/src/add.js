import { reactive } from "vue";

const useAddStudent = (uscRcmoveStudcnts) => {
  const state2 = reactive({
    stu: {
      id: "",
      name: "",
      age: "",
    },
  });
  const addStu = (e) => {
    e.preventDefault();
    const stu = Object.assign({}, state2.stu);
    uscRcmoveStudcnts.state.stus.push(stu);
    state2.stu.id = "";
    state2.stu.name = "";
    state2.stu.age = "";
  };
  return { state2, addStu };
};

export default useAddStudent;
