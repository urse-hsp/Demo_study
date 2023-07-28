<template>
  <div>
    <form action="">
      <input type="text" v-model="ustu.id" />
      <input type="text" v-model="ustu.name" />
      <input type="text" v-model="ustu.age" />
      <input type="submit" @click="addUstu" />
    </form>

    <ul>
      <li v-for="(item, index) in stu" :key="item.id" @click="deletes(index)">
        {{ item.id }} : {{ item.name }} : {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  // data() {
  //   return {
  //     msg: "去微软",
  //   };
  // },
  data: () => {
    return {
      stu: [
        { name: "qwe", id: 0, age: 10 },
        { name: "ert", id: 1, age: 10 },
        { name: "tyu", id: 2, age: 10 },
      ],
      ustu: {
        id: "",
        name: "",
        age: "",
      },
    };
  },
  methods: {
    deletes(index) {
      this.stu = this.stu.filter((item, indexs) => indexs !== index);
    },
    addUstu(e) {
      e.preventDefault();
      const stu = Object.assign({}, this.ustu); // 拷贝一份出来
      this.stu.push(stu);
      this.ustu.id = "";
      this.ustu.name = "";
      this.ustu.age = "";
    },
  },

  setup() {
    return {};
  },
};
</script>

// 数据和业务逻辑分散 不利于管理
