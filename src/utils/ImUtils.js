import TIM from 'tim-js-sdk/tim-js-friendship.js'
import TIMUploadPlugin from 'tim-upload-plugin'

let SDKINFO = {
    SDKAppID: 1400537309
}

const tim = TIM.create(SDKINFO)

window.setLogLevel = tim.setLogLevel

// 无日志级别
tim.setLogLevel(0)

// 注册 cos
tim.registerPlugin({ 'tim-upload-plugin':TIMUploadPlugin })

const ImUtils = {
    tim:tim,
    TIM:TIM
}

export default ImUtils;