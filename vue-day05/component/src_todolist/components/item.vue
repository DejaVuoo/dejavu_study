<!--
 Copyright (c) 2023 smable<316245279@qq.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
    <li>
      <input type="checkbox" :checked="item.isDone" @change="changeDone(item.id)"/>
      <span v-if="!item.isEdited" @click="changeIsEdit(item.id)" :class='{line:item.isDone}'>{{item.message }} </span>
      <input v-else type="text" class="text" v-focus :value="item.message" @blur="blur(item.id,$event)"/>
      <button @click="delOne(item.id)" v-if="!item.isEdited">删除</button>
    </li>
</template>

<script>
    export default {
        props:['item','delItem','toggleItemDone','toggleIsEdit','changeText'],
        directives:{
            focus:{
                //表示添加指令的的DOM元素重新插入页面时候执行的函数
                inserted(el){
                    el.focus()
                }
            }
        },
        methods:{
            delOne(id){
                this.delItem(id)
            },
            changeDone(id){
                this.toggleItemDone(id)
            },
            changeIsEdit(id){
                this.toggleIsEdit(id)
            },
            blur(id,event){
                console.log(event.value)
                this.changeText(id,event.target.value)//修改文本
                this.toggleIsEdit(id)//修改编辑状态
            }
        }
    }
</script>

<style scoped>
    .line{
        text-decoration: line-through;
    }
</style>