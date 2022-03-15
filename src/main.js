import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import Hls from "hls.js";
import flvjs from 'flv.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import ImUtils from "@/utils/ImUtils";
import {TcPlayer} from "@/assets/TcPlayer-module-2.4.1.js";
import DPlayer from 'dplayer';
import {createPinia} from "pinia";
//import TIM from 'tim-js-sdk';
//import TIMUploadPlugin from 'tim-upload-plugin';

// 挂载 HLS
window.Hls = Hls

// 挂载 flvjs
window.flvjs = flvjs

// IM @see utils/ImUtils
//let tim = TIM.create(ImUtils.SDKAPPID);
//tim.setLogLevel(0);
//tim.registerPlugin({'tim-upload-plugin': TIMUploadPlugin});

const app = createApp(App)
// 挂载 TCplayer
app.config.globalProperties.$TcPlayer = TcPlayer
// 挂载DPlyaer
app.config.globalProperties.$DPlayer = DPlayer

// 挂载IM
window.tim = ImUtils.tim
window.TIM = ImUtils.TIM
app.config.globalProperties.$TIM = ImUtils.TIM

// 配置插件
const store = createPinia()

app.use(store)
app.use(router)

// element ui
app.use(ElementPlus)

app.mount('#app')
