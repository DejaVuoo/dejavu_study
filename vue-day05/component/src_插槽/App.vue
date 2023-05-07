<!--
 Copyright (c) 2023 smable<316245279@qq.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div>
    <!-- 希望给Child传递 <button>按钮</button> -->
    <!-- 写在组件标签内部的内容(可以是普通值 也可以是HTML结构)传递给了子组件的默认插槽 -->
    <!-- <Child><button>按钮</button></Child> -->
    <Child>
      <!-- 传递头部的内容 -->
      <template #header>
        <button>这是头部的按钮</button>
      </template>
      <template v-slot:main>
        <h1>这是主体内容</h1>
      </template>
      <template #footer>
        <h1>这是底部内容</h1>
      </template>
      <!-- 作用域插槽 -->
      <template v-slot="a">
        <h1>{{ a.msg + a.info }}</h1>
      </template>
    </Child>
    {{a}}
  </div>
</template>

<script>
import Child from "./Child.vue"
export default {
  components: {
    Child,
  },
  data() {
    return {}
  },
}
</script>

<style scoped></style>
