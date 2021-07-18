<template lang="">
  <div>
    <avue-crud :data="data" :option="option" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          name: '张三',
          sex: '男',
          date: '1994-02-23 00:00:00',
        },
        {
          name: '李四',
          sex: '女',
          date: '1994-02-23 00:00:00',
        },
        {
          name: '王五',
          sex: '女',
          date: '1994-02-23 00:00:00',
        },
        {
          name: '赵六',
          sex: '男',
          date: '1994-02-23 00:00:00',
        },
      ],
      total: 10,
      option: {
        title: '表格的标题',
        titleSize: 'h3',
        titleStyle: {
          color: 'red',
        },
        page: false,
        align: 'center',
        menuAlign: 'center',
        column: [
          {
            label: '姓名',
            prop: 'name',
          },
          {
            label: '性别',
            prop: 'sex',
          },
          {
            label: '日期',
            prop: 'date',
            type: 'date',
            format: 'yyyy-MM-dd hh:mm:ss',
            valueFormat: 'yyyy-MM-dd hh:mm:ss',
          },
        ],
      },
    }
  },
}
</script>
<style lang="scss" scoped></style>
