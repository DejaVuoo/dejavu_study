<template>
  <div class="app">
    <Header @addItem="addItem" />
    <div id="tasks">
      <Lists
        :itemList="itemList"
        :delItem="delItem"
        :toggleItemDone="toggleItemDone"
        :toggleIsEdit="toggleIsEdit"
        :changeText="changeText"
      />
      <Footer
        :itemList="itemList"
        @clearList="clearList"
        v-if="itemList.length"
        @toggleAll="toggleAll"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue"
import Lists from "./components/lists.vue"
import Footer from "./components/footer.vue"
export default {
  components: {
    Header,
    Lists,
    Footer,
  },
  data() {
    return {
      itemList: [],
    }
  },
  methods: {
    //添加数据的方法
    addItem(item) {
      this.itemList.push(item)
    },
    //清除所有的数据
    clearList() {
      this.itemList = []
    },
    //删除一条
    delItem(id) {
      const index = this.itemList.findIndex((item) => item.id === id)

      this.itemList.splice(index, 1)
    },
    //修改某一条数据的done值
    toggleItemDone(id) {
      // this.itemList = this.itemList.map(item=>{
      //   if(item.id===id){
      //     item.isDone=!item.isDone
      //     return item
      //   }else{
      //     return item
      //   }
      // })
      this.itemList.forEach((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
      })
    },
    // 实现全选
    toggleAll(value) {
      if (value) {
        // this.itemList = this.itemList.map((item) => {
        //   item.isDone  = true
        //   return item
        // })
        this.itemList.forEach(item=>{
          item.isDone = true
        })
      } else {
        // this.itemList = this.itemList.map((item) => {
        //    item.isDone = false
        //    return item
        // })
        this.itemList.forEach(item=>{
          item.isDone = false
        })
      }
    },
    //切换某一条的可编辑状态
    toggleIsEdit(id){
      this.itemList.forEach(item=>{
        if(item.id===id){
          item.isEdited = !item.isEdited
        }
      })
    },
    //某一条input框失去焦点的时候修改文本数据
    changeText(id,message){
      this.itemList.forEach(item=>{
        if(item.id===id){
          item.message = message
        }
    })
    }
  },
}
</script>

<style>
.app {
  width: 90%;
  max-width: 34em;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
#tasks {
  background-color: #ffffff;
  position: relative;
  padding: 1.8em 1.25em;
  margin-top: 3.8em;
  width: 100%;
  box-shadow: 0 1.25em 1.8em rgba(1, 24, 48, 0.15);
  border-radius: 0.6em;
}
input {
  margin-right: 20px;
}
.isDone {
  text-decoration: line-through;
}
</style>
