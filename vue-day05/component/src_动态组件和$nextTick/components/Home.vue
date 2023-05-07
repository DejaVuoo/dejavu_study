<!--
 Copyright (c) 2023 smable<316245279@qq.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
    <div>
        <input type="text">
    </div>
</template>

<script>
    export default {
        created(){
            console.log('created---Home')
        },
        // 激活
        activated(){
            console.log('activated--Home')
        },
        //失活
        deactivated(){
            console.log('deactivated--Home')
        },
        destroyed(){
            console.log('destroyed--Home')
        }
    }
</script>

<style scoped>

</style>