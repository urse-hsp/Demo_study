<template>
  <div class="container-water-fall">
    <!-- <div><button  @click="loadmore">loadmore</button> <button @click="mix">mix</button> <button @click="switchCol('5')">5列</button> <button @click="switchCol('8')">8列</button> <button @click="switchCol('10')">10列</button> </div> -->

    <waterfall :col='col' :width="itemWidth" :gutterWidth="gutterWidth"  :data="data"  @loadmore="loadmore"  @scroll="scroll"  >
      <template >

        <div class="cell-item" v-for="(item,index) in data">  
          <div class="item-body">
            <img lazy-src="https://res.bestcake.com/m-images/HotRecommend/427276281583982800.jpg"/>
             1
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      data:[],
	    col:5,
    }
  },
  mounted(){
    console.log(1)
    axios({
      url:"../../static/data/json1811.js",
      method:"get"
    }).then(res=>{
      this.data = res.data.Tag.cakelist;
      console.log(this.data)
    })
  },
  computed:{
      itemWidth(){  
            return (330*0.5*(document.documentElement.clientWidth/375))  //#rem to layout, Calculate the value of width 
      },
      gutterWidth(){
            return (10*0.5*(document.documentElement.clientWidth/375)) //#rem to layout, Calculate the value of margin 
      }
    },
    methods:{
          scroll(scrollData){
              console.log(scrollData)
          },
        switchCol(col){
            this.col = col
            console.log(this.col)
      },
      loadmore(index){
            this.data = this.data.concat(this.data)
      }
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
