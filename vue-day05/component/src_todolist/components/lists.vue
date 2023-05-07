<!--
 Copyright (c) 2023 smable<316245279@qq.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <ul class="list">
    <template v-if="itemList.length">
      <Item
        v-for="item in itemList"
        :key="item.id"
        :item="item"
        :delItem="delItem"
        :toggleItemDone="toggleItemDone"
        :toggleIsEdit="toggleIsEdit"
        :changeText="changeText"
      />
    </template>
    <h2 v-else>没有代办事项</h2>
  </ul>
</template>

<script>
import Item from "./item.vue"
export default {
  props: [
    "itemList",
    "delItem",
    "toggleItemDone",
    "toggleIsEdit",
    "changeText",
  ],
  components: {
    Item,
  },
}
</script>

<style>
.list {
  list-style: none;
}
.list li {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.list li span {
  flex: 1;
}
.list button {
  background-color: skyblue;
  border-radius: 0.3em;
  padding: 4px 12px;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
