<!--
 Copyright (c) 2023 smable<316245279@qq.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div id="app">
    <!-- <div class="title">
      <span @click="fn1">Home</span>
      <span @click="fn2">Post</span>
      <span @click="fn3">Archive</span>
    </div> -->
    <!-- <Child ref="child"/> -->
    <!-- <Home v-show="isHome"/>
    <Post v-show="isPost"/>
    <Archive v-show="isArchive"/> -->
    <!-- 动态渲染指定的组件 通过is属性来指定 -->
    <!-- keep-alive这个内置组件一般都是和动态组件结合使用 它可以保持住组件的状态 -->
    <!-- <keep-alive>
        <component :is="cur"></component>
    </keep-alive> -->
    <!-- <h2 ref="x">这是一个h2标题</h2>
    <p ref="p">这是p段落</p> -->
    <div class="left">
      <div v-if="!isEdit" class="t1">
        {{ msg }}
      </div>
      <div v-else class="t2">
        <input ref="ref1" v-model="msg" type="text" />
      </div>
    </div>
    <div class="right">
      <button @click="edit">
        {{ isEdit ? "确定" : "编辑" }}
      </button>
    </div>
  </div>
</template>

<script>
import Home from "@/components/Home.vue"
import Post from "./components/Post.vue"
import Archive from "./components/Archive.vue"
import Child from "./components/Child.vue"
export default {
//   methods: {
//     fn1() {
//       this.cur = Home
//     },
//     fn2() {
//       this.cur = Post
//     },
//     fn3() {
//       this.cur = Archive
//     },
//   },
//   data() {
//     return {
//       cur: "",
//     }
//   },
//   components: {
//     Child,
//   },
//   //提供
//   provide: {
//     msg: "父组件中的数据",
//   },
//   mounted() {
//     console.log(this.$refs)
//   },
name: "App",
  data() {
    return {
      msg: 'hello',
      isEdit: false,
    }
  },
  methods: {
    //vue中修改数据 视图并不是立刻改变的 是遵循一个批量更新的机制
    //如果希望修改了某个数据后视图立刻改变 可以调用this.$nextTick()实现
    edit() {
      this.isEdit = !this.isEdit
      this.$nextTick(function(){
        if(this.isEdit){
            this.$refs.ref1.focus()
        }
      })
    },
  },
}
</script>

<style scoped>
/* .title span {
  padding: 8px;
  background-color: #ccc;
  border: 1px solid #ccc;
} */
.app {
  background-color: #ddd;
  padding: 8px;
  display: flex;
}
.left {
  width: 30%;
  margin-right: 20px;
}
.t1 {
  border: 1px solid #000;
}
.t2 input {
  width: 100%;
}
</style>
