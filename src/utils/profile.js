export function getToken(){
    let profile = getProfile();
    if (profile != null){
        return "Bearer "+profile.token
    }else {
        return null
    }
}

export function getProfile(){
    let profile = localStorage.getItem("profile");
    if (profile == null){
        profile =  sessionStorage.getItem("profile");
    }

    if (profile == null){
        return null
    }

    let obj = JSON.parse(profile);

    if (new Date().getTime() - obj.created >= obj.expires){
        return null
    }else {
        return obj.value
    }

}

export function setProfile(profile){
    /*
    {
        "uid": 1,
        "accountId": "user_lSc6tDPCRj",
        "profile": {
            "profileId": 1,
            "nickname": "user_47925275",
            "avatar": "https://xiaozhibo-1257166515.cos.ap-guangzhou.myqcloud.com/0001/1.jpg"
        },
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJhdWQiOiJ1c2VyX2xTYzZ0RFBDUmoiLCJpc3MiOiJBdXRoZW50aWNhdGlvbiIsImlkIjoxLCJleHAiOjE2NTc5OTM3NDgsImlhdCI6MTY1Nzk5MDE0OH0.PbzNKnLkycCRVdJ2u7Yc3iLJ_Vdso5WlsdiNcL8ajWNfPEC5qRUN3cpG2quDm7RG"
    }
     */

    let obj = {
        value: profile,
        expires: 604800,//7*24*3600
        created: new Date().getTime()
    }

    localStorage.setItem("profile", JSON.stringify(obj));
    sessionStorage.setItem("profile",JSON.stringify(obj));

}

export function clearProfile(){
    localStorage.setItem("profile", null);
    sessionStorage.setItem("profile",null);
    localStorage.clear();
    sessionStorage.clear();
}