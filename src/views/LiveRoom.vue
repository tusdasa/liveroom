<template>
  <div class="live-room-container">
    <div class="live-room-main">
      <div class="live-room-left">
        <div>
          <div class="live-room-left-header">
            <div class="live-room-avater">
              <el-image :src="roominfo.avatar" fit="cover" style="border-radius: 100%;"></el-image>
            </div>
            <div class="live-room-description">
              <h2 style="line-height: 80px; margin-left: 30px;">{{ roominfo.title }}</h2>
            </div>
          </div>
        </div>
        <div class="live-room-left-body">
          <div id="live-room-player"></div>
        </div>
        <div class="live-room-left-footer">

        </div>
      </div>
      <div class="live-room-right">
        <div class="live-room-right-header">
          排行榜
        </div>
        <div class="live-room-right-body">
          <MessageItem v-for="item in messageList" :key="item" :msg="item" />
        </div>
        <div class="live-room-right-footer">
          <div>
            表情
          </div>
          <div>
            <textarea style="width: 290px; height: 95px;" v-model="msg"></textarea>
          </div>
          <div style="width: 100%; height: 30px; margin: auto;">
            <button style="display: flex; margin-left: 250px;" @click="sendTextMessage">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {userTestStore} from "@/store"
import MessageItem from "@/components/MessageItem"
import ImUtils from "@/utils/ImUtils"
import TIM from "tim-js-sdk/tim-js-friendship.js";

//https://1400329073.vod2.myqcloud.com/ff439affvodcq1400329073/7a9b2b565285890804459281865/jlm6QRPE4WUA.mp4
export default {
  name: "LiveRoom",
  data(){
    return {
      msg:"",
      Livelayer:null,
      messageList:[],
      url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      roominfo:{
        "playerUriList":{
          "mp4":"https://1400329073.vod2.myqcloud.com/ff439affvodcq1400329073/7a9b2b565285890804459281865/jlm6QRPE4WUA.mp4"
        },
        "title":"111",
        "avatar":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      },
    }
  },
  created() {
    console.log(userTestStore().userid)
    this.roominfo.title = userTestStore().userid
    userTestStore().$onAction(this.msgpros)
  },
  mounted() {
    this.Livelayer = new this.$DPlayer({
      container: document.getElementById('live-room-player'),
      autoplay: true,
      lang:'zh-cn',
      live: true,
      hotkey:false,
      mutex: true,
      video: {
        url: this.roominfo.playerUriList.mp4,
        type: 'mp4'
      }});
  },
  methods:{
    msgpros: function(args){
      console.log(args.args[0][0]);
      this.messageList.push(args.args[0][0])
      this.messageList.unshift()
    },
    sendTextMessage: function () {
      console.log(this.msg)
      if (this.msg.length >0){

        let message = ImUtils.tim.createTextMessage({
          to: '@TGS#2INLQS5HE',
          conversationType: TIM.TYPES.CONV_GROUP,
          payload: {
            text: this.msg
          }
        });

        let that = this
        ImUtils.tim.sendMessage(message).then(function(imResponse) {
          console.log(imResponse);
          that.msg = ""
          that.messageList.push(imResponse.data.message)
          that.messageList.unshift()
        }).catch(function(imError) {
          console.warn('sendMessage error:', imError);
        });

      }


      }
  },
  components:{
    MessageItem
  }
}
</script>

<style scoped>
/* 总容器 背景图 */
.live-room-container {
  width: 100%;
  height: 1000px;
  margin: 0 auto auto auto;
  background-image: url("../assets/636d66a97d5f55099a9d8d6813558d6d4c95fd61.jpg");
  padding: 20px 0;
}
/* 中心区域 */
.live-room-main{
  width: 1300px;
  height: 900px;
  margin-left: auto;
  margin-right: auto;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  display: flex;
  background-color: #F0F0F0;
}
/* 左浮动区 */
.live-room-left{
  width: 990px;
  height: 900px;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
}
/* 右浮动区 */
.live-room-right{
  width: 310px;
  height: 900px;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  margin-left: 10px;
}
/* 直播间标题区 */
.live-room-left-header{
  width: 980px;
  height: 85px;
  margin: 10px 10px 10px 10px;
  display: flex;
}
.live-room-avater{
  width: 100px;
  height: 84px;
  display: flex;
}
.live-room-description{
  width: 860px;
  height: 84px;
  display: flex;
  margin-left: 10px;
}

.live-room-left-body{
  width: 980px;
  height: 700px;
  display: flex;
  margin: auto;
}

.live-room-left-footer{
  width: 980px;
  height: 85px;
  background-color: #2c3e50;
  display: flex;
  margin: 5px auto;
}

.live-room-right-header{
  width: 300px;
  height: 120px;
  margin-top: 11px;
  background-color: antiquewhite;
}

.live-room-right-body{
  width: 300px;
  height: 600px;
  overflow: scroll;
  overflow-x: hidden;
}

.live-room-right-footer{
  width: 300px;
  height: 150px;
  background-color: aquamarine;
}
#live-room-player{
  width: 100%;
  height: 100%;
  margin:auto;
}

</style>