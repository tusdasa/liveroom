import TIM from 'tim-js-sdk/tim-js-friendship.js'
import TIMUploadPlugin from 'tim-upload-plugin'
import {userTestStore} from "@/store"

import {getImUserSig} from '@/utils/request'
import {getProfile} from '@/utils/profile'

let SDKINFO = {
    SDKAppID: 1400591282
}

const tim = TIM.create(SDKINFO)

window.setLogLevel = tim.setLogLevel

// 无日志级别
tim.setLogLevel(0)

// 注册 cos
tim.registerPlugin({ 'tim-upload-plugin':TIMUploadPlugin })

tim.on(TIM.EVENT.SDK_READY, function(event) {
    console.log(event)
});

tim.on(TIM.EVENT.MESSAGE_RECEIVED, function(event) {
    console.log(event)
    userTestStore().addNewMessage(event.data)
});




//profile.accountId;

getImUserSig().then(res => {
    let profile = getProfile();
    console.log(profile.accountId);
    tim.login({userID: profile.accountId, userSig: res.data}).then(function(imResponse) {
        console.log(imResponse.data); // 登录成功
        if (imResponse.data.repeatLogin === true) {
            console.log(imResponse.data.errorInfo);
        }
    }).catch(function(imError) {
        console.warn('login error:', imError); // 登录失败的相关信息
    });

}).catch(err=>{
    console.log(err)
})




const ImUtils = {
    tim:tim,
    TIM:TIM
}

export default ImUtils;