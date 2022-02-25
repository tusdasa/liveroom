<template>
  <div class="h-6"></div>
  <el-menu
      :default-active="this.$routes"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
  >
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/about" >About</el-menu-item>
    <el-menu-item index="/room">Room</el-menu-item>
  </el-menu>
</template>

<script >

export default{
  name:"LiveRoomNav",
  data(){
    return {

    }
  },
  created:function(){
  },
  methods:{
    getPath:()=>{
    }
  }
}



</script>