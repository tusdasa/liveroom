<template>
  <div class="about">
    <div id="id_test_video"></div>
    <div id="id_test_1"></div>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  data(){
    return{
      palyer:null
    }
  },
  setup(){
    console.log("0")
  },
  created() {
    console.log("1")
  },
  mounted() {
    this.palyer = new this.$TcPlayer('id_test_video', {
      "mp4":"https://1400329073.vod2.myqcloud.com/ff439affvodcq1400329073/7a9b2b565285890804459281865/jlm6QRPE4WUA.mp4",
      "autoplay" : true,
      "width" :  '640',
      "height" : '480',
      live:true,
      listener: function (e) {
        console.log(e)
      }
    });

    new this.$DPlayer({
    container: document.getElementById('id_test_1'),
    autoplay: true,
    lang:'zh-cn',
    
    video: {
        url: 'https://1400329073.vod2.myqcloud.com/ff439affvodcq1400329073/7a9b2b565285890804459281865/jlm6QRPE4WUA.mp4'
    }});
  },
  beforeMount() {
  },
  methods(){
  },
  components: {
  }
}
</script>
