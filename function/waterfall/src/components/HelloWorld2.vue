<template>
  <div>
      <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData">

      </vue-waterfall-easy>
  </div>
</template>

<script>

import axios from 'axios'
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
  name: 'HelloWorld2',
  data () {
    return {
        data:[],
        imgsArr: [],
        group: 0,
    }
  },
  mounted(){
    axios({
      url:"../../static/data/json1811.js",
      method:"get"
    }).then(res=>{
      this.data = res.data.Tag.cakelist;
    })
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    getData() {
      axios.get('./../static/data/json1811.js?group=' + this.group) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
        .then(res => {
          this.imgsArr = this.imgsArr.concat(res.data.Tag.cakelist)
          this.group++
        })
        console.log()
    },
  },
  created() {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img{
  width: 100%;
}
</style>
