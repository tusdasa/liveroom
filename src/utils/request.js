import axios from "axios";
import {getToken} from "@/utils/profile"

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL="https://dev1.tusdasa.net"

function heandleData(isSuccess, msg, data){
    return {
        "isSuccess": isSuccess,
        "message": msg,
        "data": data
    }
}

function heandleError(res){
    // 确保业务代码响应正确
    if(res.status === 200){
        // 判断业务逻辑响应码, 非200 未失败
        if(res.data.code === 200){
            // 封装数据
            if (res.data.model != null){
                return heandleData(
                    true,
                    res.data.message,
                    res.data.model
                )
            }
            if (res.data.models != null){
                return  heandleData(
                    true,
                    res.data.message,
                    res.data.models
                )
            }
        }else{
            // 失败
            return heandleData(
                    false,
                    res.data.message,
                    null
                )
        }
    }else{
        // 服务端返回非正确的错误码
        // res.statusText
        return heandleData(
                false,
                res.statusText,
                null
            )
    }
}



/**
 * 登录
 * */
export function userLogin(mobile, password){

    return new Promise((resolve, reject)=>{
    axios.post("/auth/login", {
      "mobile": mobile,
      "password": password
    })
    .then(res => {
        // 确保是正确响应
        resolve(heandleError(res))
    })
    .catch(err => {
        reject(heandleData(false, err,null))
    });
    })
}

export function getRoomList(page, size){
    return new Promise((resolve, reject)=>{
        axios.get("/live/all?page="+page+"&size="+size,{
            headers: {'Authorization': getToken()}
        }).then(res =>{
            resolve(heandleError(res))
        }).catch(err=>{
            reject(heandleData(false, err,null))
        })
    })
}

export function getTop5(){
    return new Promise((resolve, reject)=>{
        axios.get('/live/top',{
            headers: {'Authorization': getToken()}
        }).then(res =>{
            resolve(heandleError(res))
        }).catch(err=>{
            reject(heandleData(false, err,null))
        })
    })
}

export function getLiveRoomProfile(roomId){
    return new Promise((resolve, reject)=>{
        axios.get('/live/profile/'+roomId,{
            headers: {'Authorization': getToken()}
        }).then(res =>{
            resolve(heandleError(res))
        }).catch(err=>{
            reject(heandleData(false, err,null))
        })
    })
}

export function getImUserSig(){
    return new Promise((resolve, reject)=>{
        axios.get('/live/usersig',{
            headers: {'Authorization': getToken()}
        }).then(res =>{
            resolve(heandleError(res))
        }).catch(err=>{
            reject(heandleData(false, err,null))
        })
    })
}