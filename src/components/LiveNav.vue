<template>
  <div class="h-6">
  </div>
  <el-menu
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :ellipsis="false"
  >
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/about">About</el-menu-item>
    <div class="flex-grow"></div>
    <el-sub-menu index="/user">
      <template #title>用户中心</template>
      <el-menu-item index="/user" >开始直播</el-menu-item>
      <el-menu-item index="#" >个人资料</el-menu-item>
      <el-menu-item index="#" >退出</el-menu-item>
      <div class="flex-grow" style="width: 100%;height: 30px;" @click="logout">
        退出
      </div>
    </el-sub-menu>
  </el-menu>
</template>

<script>
import {clearProfile} from '@/utils/profile'


export default {
  name: "LiveRoomNav",
  data() {
    return {}
  },
  created: function () {
  },
  methods: {
    logout:() =>{
      clearProfile()
      window.location.reload()
    }
  }
}


</script>
<style>
.flex-grow {
  flex-grow: 1;
}
</style>