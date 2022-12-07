<template>
  <div style="width: 1200px;height: 300px;margin: 150px auto; display: flex;flex-wrap: wrap;">
    <div style="width: 200px;">
      <div>
        <el-button type="danger" @click="destoryRoomHandle">关闭直播</el-button>
      </div>
    </div>
    <div style="height: 1000px;">
      <el-card>
        <div>
          <p v-if="pushurl[0]">
            {{pushurl[0]}}
          </p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {getPushInfo,destoryRoom} from '@/utils/request'

export default {
  name: 'UserCentralView',
  data(){
    return {
      title:'',
      cover:'',
      category:1,
      pushurl:['1','2']
    }
  },
  created() {
    getPushInfo().then(res=>{
      console.log('getPushInfo success',res.data)
      this.pushurl = res.data
    })
  },
  methods:{
    destoryRoomHandle:()=>{
      //let that = this
      destoryRoom().then(res=>{
        console.log('destoryRoom res',res)
      }).catch(err=>{
        console.log('destoryRoom err',err)
      })
    }
  },
  components: {
  },
}
</script>
