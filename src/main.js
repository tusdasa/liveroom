import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {TcPlayer} from "@/assets/TcPlayer-module-2.4.1.js";
import DPlayer from 'dplayer';
import TIM from 'tim-js-sdk';
import TIMUploadPlugin from 'tim-upload-plugin';


let tim = TIM.create({SDKAppID: 1400537309}); 
tim.setLogLevel(0);
tim.registerPlugin({'tim-upload-plugin': TIMUploadPlugin});

const app = createApp(App)
// 挂载 TCplayer
app.config.globalProperties.$TcPlayer = TcPlayer
// 挂载DPlyaer
app.config.globalProperties.$DPlayer = DPlayer

// 挂载IM
app.config.globalProperties.$TIM = tim

// 配置插件
app.use(store)
app.use(router)
app.mount('#app')
