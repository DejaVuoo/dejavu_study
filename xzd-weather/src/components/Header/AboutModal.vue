<template>
  <div class="about">
    <h2>关于:</h2>
    <p class="text-xs mb-4">这个应用可以用来追踪你选择城市的当前天气</p>
    <h2>如何使用:</h2>
    <p class="text-xs mb-4">
      1.点击搜索框输入你希望追踪的城市
      <br />
      2.在搜索结果中选中一个城市，你将获取当地最新的天气
      <br />
      3.点击右侧的＋号可以将追踪城市的天气情况保存在首页
    </p>
    <h2>移除城市:</h2>
    <p class="text-xs">
      如果你不想在首页关注某个城市,可以通过底部的按钮删
      <br />
      除它
    </p>
    <!-- <el-button type="primary">关闭</el-button> -->
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.about {
  opacity: 1;
  position: absolute;
  top: -4%;
  left: 65%;
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
  padding-left: 2rem;
  padding-right: 2rem;
  --tw-bg-opacity: 0.3;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 20;
  margin: 100px auto;
  transition: opacity 0.3s ease;
  padding: 20px;
  p{
    font-size: 1em;
  }
}
</style>
