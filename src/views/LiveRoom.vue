<template>
  <div class="live-room-container">
    <div class="live-room-main">
      <div class="live-room-left">
        <div class="live-room-left-header">
          <div class="live-room-avater">
            头像
          </div>
          <div class="live-room-description">
            标题
          </div>
        </div>
        <div>
          播放器
        </div>
        <div>
          礼物
        </div>
      </div>
      <div class="live-room-right">
        <div>
          排行榜
        </div>
        <div>
          聊天区
        </div>
        <div>
          消息区
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "LiveRoom",
  components:{
  }
}
</script>

<style scoped>
/* 总容器 背景图 */
.live-room-container {
  width: 100%;
  height: 1000px;
  margin: 20px auto auto auto;
  background-image: url("../assets/636d66a97d5f55099a9d8d6813558d6d4c95fd61.jpg");
  padding: 20px 0;
}
/* 中心区域 */
.live-room-main{
  width: 1600px;
  height: 900px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
}
/* 左浮动区 */
.live-room-left{
  width: 1200px;
  height: 900px;
  float: left;
  background-color: #42b983;
  border-radius: 20px;
}
/* 右浮动区 */
.live-room-right{
  width: 390px;
  height: 900px;
  float: right;
  background-color: aliceblue;
  border-radius: 20px;
}
/* 直播间标题区 */
.live-room-left-header{
  width: 1180px;
  height: 90px;
  margin: 10px 10px 10px 10px;
}
.live-room-avater{
  width: 100px;
  height: 84px;
  background-color: blanchedalmond;
  float: left;
}
.live-room-description{
  width: 1070px;
  height: 84px;
  background-color: rebeccapurple;
  float: right;
}


</style>