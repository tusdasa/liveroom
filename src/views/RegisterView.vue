<template>
  <div class="rigster-form">
    <div>
      <el-input v-model="phone" placeholder="mobile phone" />
    </div>
    <div>
      <el-input type="number" v-model="code" placeholder="code" />
    </div>
    <div>
      <el-button type="primary" @click="onSubmit">Register</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      phone:"",
      code:''
    }
  },
  name: "RegisterView"
}
</script>

<style scoped>
.rigster-form{
  width: 400px;
  height: 500px;
  margin: 150px auto;
}
.rigster-form div{
  height: auto;
  width: 100%;
  margin: 7px auto;
  line-height: 50px;
}
</style>