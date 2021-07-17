<template>
    <div>
        <VirtualCollection
            :cellSizeAndPositionGetter="cellSizeAndPositionGetter"
            :collection="items"
            :height="500"
            :width="370"
        >
            <div slot="cell" slot-scope="props">{{props.data}}</div>
        </VirtualCollection>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data () {
            return {
                items: new Array(1000).fill(0).map((_, index) => ({ data: '#' + index })),
                data:[]
            }
        },
        mounted(){
          axios({
            url:"../../static/data/json1811.js",
            method:"get"
          }).then(res=>{
            this.data = res.data.Tag.cakelist;
            console.log(this.data)
          })
        },
        methods: {
            cellSizeAndPositionGetter(item, index) {
                // compute size and position
                return {
                    width: 180,
                    height: 150,
                    x: (index % 2) * 110,
                    y: parseInt(index / 2) * 160
                }
            }
        }
    }
</script>


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
