<template>
  <div class="login-form">
    <div>
      <el-input v-model="phone" placeholder="mobile phone" />
    </div>
    <div>
      <el-input
          v-model="password"
          type="password"
          placeholder="password"
          show-password
      />
    </div>
    <div>
      <el-button type="primary" @click="onSubmit">Login</el-button>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {userLogin} from '@/utils/request'
import { ElMessage } from 'element-plus'
import {setProfile} from '@/utils/profile'

export default {
  setup(){
    const phone = ref('');
    const password = ref('');
    console.log(phone)
    console.log(password)
  },
  data(){
    return {
      phone: '15592165323',
      password: '3988978349'
    }
  },
  created() {
  },
  methods:{
    onSubmit:function() {

      userLogin(this.phone, this.password).then(
          res =>{
            let that = this
            // 登录成功
            if (res.isSuccess){
              ElMessage({
                message: '登录成功',
                type: 'success',
              })
              setProfile(res.data)
              setInterval(function () {
                that.$router.push("/");
              }, 100);
            }else {
              // 登录失败
              ElMessage({
                message: res.message,
                type: 'error',
              })
            }

          }
      ).catch(
          err => {
            console.log(err)
          }
      )
    }
  },
  name: "LoginView.vue"
}
</script>

<style scoped>
.login-form{
  width: 400px;
  height: 500px;
  margin: 150px auto;
}
.login-form div{
  height: auto;
  width: 100%;
  margin: 7px auto;
  line-height: 50px;
}
</style>