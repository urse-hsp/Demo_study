<template lang="">
  <avue-form :option="option" v-model="from" @submit="submit" @error="error" />
</template>
<script>
export default {
  data() {
    return {
      from: {
        username: 'admin',
        password: '123456',
      },
      option: {
        column: [
          {
            label: '姓名',
            prop: 'username',
            span: 24,
            rules: [
              {
                required: true,
                message: '请输入姓名',
                trigger: 'blur',
              },
            ],
          },
          {
            label: '密码',
            prop: 'password',
            span: 24,
            rules: [
              {
                required: true,
                message: '请输入密码',
                trigger: 'blur',
              },
            ],
          },
        ],
      },
    }
  },
  methods: {
    async submit(form, done) {
      console.log(form)
      const res = await this.$request.post('/login', form)
      if (!res.success) return this.$message.error(res.msg)
      this.$message.success(res.msg)
      window.sessionStorage.setItem('token', res.data.token)
      this.$router.push('/a')
      done()
    },
    error() {
      // this.$message.success('请查看控制台')
      // console.log(err)
    },
  },
}
</script>
<style lang="scss"></style>
