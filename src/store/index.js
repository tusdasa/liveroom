import { defineStore } from 'pinia'

export const userTestStore = defineStore("IM",{
  state:()=>{
    return {
      userid:"user0",
      messageList:[]
    }
  },
  getters:{

  },
  actions:{
    addNewMessage(msg){
      this.messageList.push(msg)
    }
  }
})
