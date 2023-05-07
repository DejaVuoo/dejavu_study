<!--
 Copyright (c) 2023 smable<316245279@qq.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
    <div>  
        SubChild -- 这是祖先组件传递过来的数据{{ msg }}
    </div>
</template>

<script>
    export default {
        //注入
        inject:['msg']
    }
</script>

<style scoped>

</style>