<!--
 Copyright (c) 2023 smable<316245279@qq.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div>
    Child组件--这是父组件传递过来的数据{{msg}}
    <SubChild />
  </div>
</template>

<script>
import SubChild from "./SubChild.vue"
export default {
    components:{
        SubChild
    },
    inject:['msg']
}
</script>

<style scoped></style>
