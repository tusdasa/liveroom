<template>
  <div class="message-item">
    <span class="message-item-nick">{{ nickName }}</span>
    <span class="message-item-spec">:</span>
    <span class="message-item-text">{{ message }}</span>
  </div>
</template>

<script>
import TIM from 'tim-js-sdk'
export default {
  data(){
    return {
      nickName:"昵称",
      message:"3333333333333333333333"
    }
  },
  created() {
    if (this.msg.conversationType === TIM.TYPES.CONV_GROUP){
      this.nickName=this.msg.nick
      if (this.msg.type === TIM.TYPES.MSG_TEXT){
        this.message = this.msg.payload.text
      }
    }

  },
  props: {
    msg:Object
  },
  name: "MessageItem"
}
</script>

<style scoped>
.message-item{
  width: 280px;
  height: auto;
  display: flex;
  font-size: 12px;
  margin: 10px 5px 10px 5px;
}
.message-item-nick{
  color: #999;
  line-height: 20px;
}
.message-item-spec{
  padding-left: 3px;
  padding-right: 3px;
  line-height: 20px;
}
.message-item-text{
  color: #646c7a;
  line-height: 20px;
}
</style>