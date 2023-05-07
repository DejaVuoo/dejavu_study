<!--
 Copyright (c) 2023 smable<316245279@qq.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div class="footer">
    <input type="checkbox" v-model="allDone" />
    <span>待办事项共有{{ itemList.length }}项</span>
    <button @click="clearAll">全部删除</button>
  </div>
</template>

<script>
export default {
  props: ["itemList"],
  methods: {
    clearAll() {
      this.$emit("clearList")
    },
  },
  computed: {
    allDone:{
        get(){
            return this.itemList.every(item=>item.isDone === true)
        },
        set(value){
            //点击全选的input框 选中后 所有上面的input都选中 去掉勾选 所有上面的input都去掉勾选
            this.$emit('toggleAll',value)
        }
    }
  },
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
}
.footer button {
  background-color: skyblue;
  border-radius: 0.3em;
  padding: 4px 12px;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
