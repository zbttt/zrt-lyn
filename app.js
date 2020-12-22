//app.js

import GoEasy from './goeasy-1.2.0';
import GoEasyIM from './goeasy-im-1.5.0'

App({

  globalData:{
    sclist:[],
    storelist:[],
    id:"",
    food:[],
    study:[],
    makeup:[],
    tech:[],
    shoe:[],
    sport:[],
    clothes:[],
    life:[],
    useraccount:"",
    imService: null,
    exchangearray:{},
    goEasy: GoEasy.getInstance({
      host:'hangzhou.goeasy.io', //应用所在的区域地址: 【hangzhou.goeasy.io |singapore.goeasy.io】
      appkey: "BC-1e71462384dd4379a9a8a68849957b0a"
  })
  

  },
  onLaunch: function () {
  //   wx.im = GoEasyIM.getInstance({
  //     host: 'hangzhou.goeasy.io',
  //     appkey: 'BC-1e71462384dd4379a9a8a68849957b0a'
  // });
  //   wx.GoEasyIM = GoEasyIM;
  }

  
})


