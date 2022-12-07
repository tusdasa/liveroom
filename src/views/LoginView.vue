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
import {userLogin,getImUserSig} from '@/utils/request'
import { ElMessage } from 'element-plus'
import {setProfile} from '@/utils/profile'
import ImUtils from '@/utils/ImUtils'

export default {
  setup(){
  },
  data(){
    return {
      phone: '',
      password: ''
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
              console.log("登录",res.data)
              const accountId =  res.data.accountId
              getImUserSig().then(async res => {
                console.log("usersign",res.data)
                ImUtils.tim.login({userID: accountId, userSig: res.data}).then(function (imResponse) {
                  if (imResponse.data.repeatLogin === true) {
                    console.log(imResponse.data.errorInfo);
                  }
                }).catch(function (imError) {
                  console.warn('login error:', imError); // 登录失败的相关信息
                });

              }).catch(err=>{
                console.log(err)
              })

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