<template>
    <div class="banner-container">
      <div id="banner">
        <!-- 播放器 -->
        <div>
          <div id="banner-live_player" class="banner-left-container"></div>
        </div>
        <!-- 排行 -->
        <div class="banner-right-container">
          <div class="banner-right-shower-container">
            <a v-for="item in list" :key="item" style="display: flex;" href="#" @click="swichLiveRoom(item)">
              <el-image class="banner-shower" :src="item.cover" :fit="fill"></el-image>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {getTop5} from '@/utils/request'
export default {
  name: "LiveRoomBanner",
  data(){
    return {
      Livelayer:null,
      url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      fill:"fill",
      list:[]
    }
  },
  created() {
  },
  mounted() {
    this.getList();
    // this.Livelayer = new this.$DPlayer({
    //   container: document.getElementById('banner-live_player'),
    //   autoplay: true,
    //   lang:'zh-cn',
    //   live: true,
    //   hotkey:false,
    //   mutex: true,
    //   video: {
    //     url: 'https://d1--cn-gotcha204.bilivideo.com/live-bvc/801173/live_8156551_5688965_1500/index.m3u8?expires=1645690020&len=0&oi=3730456748&pt=web&qn=0&trid=100766ed8e24dbb540c7ae1b5c4c206b0534&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha204&sign=c3d8efb29508aa494f7a96eae46dd25e&sk=c9c6154426932efa80d25af02e87a3bd&p2p_type=1&src=5&sl=6&free_type=0&flowtype=1&machinezone=ylf&pp=srt&slot=1&source=onetier&order=1&site=9e4e3aa23f35b1bb84a35482ee8eaf09',
    //     type: 'hls'
    //   }});
  },
  methods:{
    swichLiveRoom:function(item){
      this.Livelayer.video.src=item.playList[0]
      // this.Livelayer.switchVideo({
      //   url:"https://play.sctow.cn/live/live2.flv?txSecret=72bbaf9ca438c063f7fba8654072a56d&txTime=621361E7",
      //   type: 'flv'
      // }, null)
    },
    openLiveRoom:function(){
      this.$router.push({
        name: 'LiveRoom',
        params: {
          roomId: 1000
        }
      });
    },
    getList:function (){
      let that = this
      getTop5().then(
          res => {
            if (res.isSuccess){
              that.list = res.data
              if (that.list.length > 0){
                that.startPlay();
              }

            }
          }
      ).catch(
          err => {
            console.log(err)
          }
      )
    },
    startPlay: function (){
      let that = this
      this.Livelayer = new this.$DPlayer({
        container: document.getElementById('banner-live_player'),
        autoplay: true,
        lang:'zh-cn',
        live: true,
        hotkey: false,
        mutex: true,
        video: {
          url: that.list[0].playList[0],
          type: 'auto'
        }});
    }
  }
}
</script>

<style scoped>
.banner-container{
  padding: 5px 0 5px 0;
  width: 100%;
  min-width: 1600px;
  height: 780px;
  background-image: url("../assets/b3471af04d0b0af5417231c27c800ad64e168fe5.jpg");
  display: flex;
}
#banner{
  width: 1600px;
  height: 760px;
  display: flex;
  margin: 10px auto auto auto;
}
.banner-left-container{
  width: 1200px;
  height: 750px;
  margin: auto;
  display: flex;
  background-color: rgba(0,0,0,.4);
}
.banner-right-container{
  width: 380px;
  height: 755px;
  margin-left: 5px;
  display: flex;
  background-color: rgba(0,0,0,.4);
  overflow: hidden;
}
.banner-right-shower-container{
  margin: auto;
  overflow: scroll;
  height: 755px;
  overflow-x: hidden;
  overflow-y: hidden;
}
.banner-shower{
  border-radius: 5px;
  width: 270px;
  height: 140px;
  margin: 9px auto 0 auto;
}
</style>