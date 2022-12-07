<template>
  <div class="about">
    <div class="about-text" style="border: 1px solid var(--el-border-color);">
      <p style="line-height: 120px;">
        如果我们选择了最能为人类而工作的职业，那么，重担就不能把我们压倒，因为这是为大家做出的牺牲;
        那时我们所享受的就是不是可怜的、有限的、自私的的乐趣，我们的幸福将属于千百万人。
      </p>
    </div>
    <div class="tcplayer">
      <video id="tcplayer_video" preload="auto" playsinline webkit-playsinline></video>
    </div>
  </div>
</template>
<script>
//import { TcPlayer } from "@/assets/TcPlayer-module-2.4.1";
export default {
  name: "AboutView",
  data() {
    return {
      palyer: null,
    };
  },
  setup() {
    console.log("setup");
  },
  created() {
    console.log("created");
  },
  mounted() {
    // if (this.palyer == null) {
    //   this.palyer = new TcPlayer("id_test_video", {
    //     mp4: "https://1400329073.vod2.myqcloud.com/ff439affvodcq1400329073/7a9b2b565285890804459281865/jlm6QRPE4WUA.mp4",
    //     autoplay: false,
    //     width: "640",
    //     height: "480",
    //     live: true,
    //     listener: function (e) {
    //       console.log(e);
    //     },
    //   });
    // }

    this.loadJs("https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/TXLivePlayer-1.2.3.min.js")

    this.loadJs("https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/hls.min.1.1.5.js")

    this.loadJs("https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/flv.min.1.6.3.js")

    this.loadJs("https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/dash.all.min.4.4.1.js")

    this.loadJs("https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.2/tcplayer.v4.5.2.min.js").then(() =>{
      // eslint-disable-next-line
      let player = TCPlayer('tcplayer_video', {})
      // eslint-disable-next-line
      player.src('https://1400329073.vod2.myqcloud.com/ff439affvodcq1400329073/7a9b2b565285890804459281865/jlm6QRPE4WUA.mp4')
    })
      
  },
  beforeMount() {},
  methods: {
    loadJs: function(src) {
      return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);

        script.onload = () => {
          resolve();
        };
        script.onerror = () => {
          reject();
        };
      });
    },
  },
  components: {},
};
</script>
<style scoped>
@import 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.min.css';
.tcplayer{
  width: 1280px;
  height: 720px;
  margin: auto;
}
.about-text{
  width: 100%;
  height: 120px;
  margin: auto;
}
</style>
