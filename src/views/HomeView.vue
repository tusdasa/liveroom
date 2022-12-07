<template>
  <div>
    <LiveBanner></LiveBanner>
    <div class="live-room-list">
      <div v-for="item in list" v-bind:key="item"  class="live-room-list-card" @click="openLiveRoom(item.roomId)">
        <el-card :body-style="{ padding: '0px'}">
          <el-image style="width: 256px; height: 150px" :src="item.cover" fit="fill" />
          <div style="height: 54px;">
            <p style="line-height: 54px;text-align: center;">{{item.title}}</p>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import {getRoomList} from "@/utils/request"
import LiveBanner from "@/components/LiveBanner";
export default {
  name: 'HomeView',
  data(){
    return {
      list:[1,2,3,4,5,6,7,8]
    }
  },
  created() {
    let that = this;
    getRoomList(0,10).then(res=>{
      if (res.isSuccess){
        that.list = res.data
      }else {
        that.list=[]
      }

    }).catch(err=>{
      console.log(err)
    })
  },
  methods:{
    openLiveRoom:function (roomid) {
      this.$router.push({
        name: 'LiveRoom',
        params: {
          id: roomid
        }
      });
    }
  },
  components: {
    LiveBanner
  }
}
</script>
<style>
.live-room-list{
  width: 1380px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
}
.live-room-list-card{
  width: 256px;
  height: 204px;
  display: flex;
  margin: 0 10px 27px 10px;
}
</style>
