export function getToken(){
    let profile = getProfile();
    if (profile){
        return "Bearer "+profile.token
    }else {
        return null
    }
}

export function getProfile(){
    let profile = localStorage.getItem("profile");
    if (profile == null || profile === ''){
        profile =  sessionStorage.getItem("profile");
    }

    if (profile == null || profile === ''){
        return  null
    }

    let obj = JSON.parse(profile);

    if (new Date().getTime() - obj.created >= obj.expires){
        return null
    }else {
        return obj.value
    }

}

export function setProfile(profile){
    let obj = {
        value: profile,
        expires: 604800,//7*24*3600
        created: new Date().getTime()
    }
    /*
    {
    "uid": 1,
    "accountId": "user_lSc6tDPCRj",
    "profile": {
        "profileId": 1,
        "nickname": "user_47925275",
        "avatar": "https://xiaozhibo-1257166515.cos.ap-guangzhou.myqcloud.com/0001/1.jpg"
    },
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJhdWQiOiJ1c2VyX2xTYzZ0RFBDUmoiLCJpc3MiOiJBdXRoZW50aWNhdGlvbiIsImlkIjoxLCJleHAiOjE2NTQzNjI3OTYsImlhdCI6MTY1NDM1OTE5Nn0.eM-yerBzM2Rz8ezhmwWBT8Dd0qphT8Lh-tdM1V7P0qqzDHKGNVZvDtzTFx9fionC"
}

     */
    localStorage.setItem("profile", JSON.stringify(obj));
    sessionStorage.setItem("profile",JSON.stringify(obj));

}