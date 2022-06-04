import TIM from 'tim-js-sdk/tim-js-friendship.js'
import TIMUploadPlugin from 'tim-upload-plugin'
import {userTestStore} from "@/store"

let SDKINFO = {
    SDKAppID: 1400537309
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

tim.login({userID: 'user0', userSig: 'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwqXFqUUwieKU7MSCgswUJStDEwMDU2NzYwNLiExqRUFmUSpQ3NTU1MjAwAAiWpKZCxIzMzE3NbIwMzeGmpKZDjQ30rUqIyjHs9go39XE0Su0KNetstDf1DRG3yvYzTvSI0Y-pNTfpMzMI9sxs8rXVqkWAHxtMbY_'}).then(function(imResponse) {
    console.log(imResponse.data); // 登录成功
    if (imResponse.data.repeatLogin === true) {
        console.log(imResponse.data.errorInfo);
    }
}).catch(function(imError) {
    console.warn('login error:', imError); // 登录失败的相关信息
});

const ImUtils = {
    tim:tim,
    TIM:TIM
}

export default ImUtils;