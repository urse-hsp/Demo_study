<template>
  <div>
    <avue-crud v-bind="bindVal" v-on="onEvent" v-model="form" :page.sync="page" />
  </div>
</template>

<script>
import curdMixin from '../mixins/crud'

export default {
  mixins: [curdMixin],
  data() {
    return {
      config: {
        save: '/setList', // 增加
        delete: '/deleteList', // 删除
        update: '/alterList', // 修改
        list: '/getlist', // 获取
      },
      option: {
        index: true,
        align: 'center',
        headerAlign: 'center',
        border: true,
        stripe: true,
        refreshBtn: true,
        columnBtn: false,
        excelBtn: true,
        column: [
          {
            label: '姓名',
            prop: 'name',
            rules: [
              {
                required: true,
                message: '请输入姓名',
                trigger: 'blur',
              },
            ],
          },
          {
            label: '年龄',
            prop: 'age',
          },
          {
            label: '性别',
            prop: 'sex',
            type: 'select',
            dicData: [
              {
                label: '未知',
                value: '',
              },
              {
                label: '男',
                value: 0,
              },
              {
                label: '女',
                value: 1,
              },
            ],
          },
          {
            label: '地址',
            prop: 'location',
            rules: [
              {
                required: true,
                message: '请输入地址',
                trigger: 'blur',
              },
            ],
          },
        ],
      },
    }
  },
  methods: {},
}
</script>

<style scoped></style>
