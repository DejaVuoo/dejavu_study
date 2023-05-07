<!--
 Copyright (c) 2023 smable<316245279@qq.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div>
    child组件
    <!-- 子组件中希望渲染插槽里的内容的话 可以通过内置组件slot来实现 -->
    <!-- <slot></slot> -->
    <header>
      <!-- 接受父组件传递过来的头部结构 -->
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 接受父组件传递过来的主体结构  -->
      <slot name="main"></slot>
    </main>
    <footer>
      <!-- 接受父组件传递过来的底部结构  -->
      <slot name="footer"></slot>
    </footer>
    <slot :msg="msg" :info="info"></slot>
    {{ a }}
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this)
  },
  data() {
    return {
      msg: "hello",
      info: "hi",
    }
  },
}
</script>

<style scoped></style>
