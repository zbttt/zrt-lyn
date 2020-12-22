// page/exchange/exchange.js
import GoEasyIM from '../../goeasy-im-1.5.0'
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exchangearray:[],
    spuseraccount:"",
    imgs:[],
    intro:"",
    name:"",
    price:"",
    inputvalue:"",
    content:"",
    im:""
  },

  chooseImg: function (e) {
    var that = this;
    var imgs = this.data.imgs;
    if (imgs.length >= 9) {
      this.setData({
        lenMore: 1
      });
      setTimeout(function () {
        that.setData({
          lenMore: 0
        });
      }, 2500);
      return false;
    }
    wx.chooseImage({
      // count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var imgs = that.data.imgs;
        // console.log(tempFilePaths + '----');
        for (var i = 0; i < tempFilePaths.length; i++) {
          if (imgs.length >= 9) {
            that.setData({
              imgs: imgs
            });
            return false;
          } else {
            imgs.push(tempFilePaths[i]);
          }
        }
        // console.log(imgs);
        that.setData({
          imgs: imgs
        });
      }
    });
  },
  // 删除图片
  deleteImg: function (e) {
    var imgs = this.data.imgs;
    var index = e.currentTarget.dataset.index;
    imgs.splice(index, 1);
    this.setData({
      imgs: imgs
    });
  },
  // 预览图片
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var imgs = this.data.imgs;
    wx.previewImage({
      //当前显示图片
      current: imgs[index],
      //所有图片
      urls: imgs
    })
  },

  jiaohuan:function(){
    
  
  var user = {
    id:app.globalData.useraccount,
    data:'{"avatar":"/www/xxx.png","nickname":"Neo"}' //用于上下线提醒和查询在线用户列表时，扩展更多的属性
}   
 //建立连接
var promise = this.data.im.connect(user)
promise.then(function() {
    console.log("Connection successful.");
}).catch(function(error) {
    console.log("Failed to connect GoEasy, code:"+error.code+ ",error:"+error.content);
});

let textMessage = this.data.im.createTextMessage({
  text:'Hello, GoEasyIM', //消息内容
  to : {
      type : GoEasyIM.SCENE.PRIVATE,   //私聊还是群聊，群聊为GoEasyIM.SCENE.GROUP
      id : '002',
      data:'{"avatar":"/www/xxx.png","nickname":"Neo"}' //好友扩展数据, 任意格式的字符串或者对象，用于更新会话列表conversation.data
  }
});

//发送消息
var promise = this.data.im.sendMessage(textMessage);

promise.then(function(message) {
 console.log("Private message sent successfully.", message);
}).catch(function(error) {
  console.log("Failed to send private message，code:" + error.code +",error"+error.content);
});

    var array=[]
    // console.log(this.data.name)
    // console.log(this.data.intro)
    // console.log(this.data.price)
    // console.log(this.data.imgs)
    console.log(this.data.exchangearray.userAccount)
    // console.log(app.globalData.useraccount)
    this.setData({
      inputvalue:"",
      check:false,
      imgs:array
    })
    app.globalData.exchangearray=this.data.exchangearray
    console.log(app.globalData.exchangearray)
    var content=app.globalData.useraccount+"向你发起物物交换申请"
    console.log(content)
//     getApp().globalData.goEasy.connect({
//       onSuccess: function () {  //连接成功
//           console.log("GoEasy connect successfully.") //连接成功
//       },
//       onFailed: function (error) { //连接失败
//           console.log("Failed to connect GoEasy, code:"+error.code+ ",error:"+error.content);
//       },
//       onProgress:function(attempts) { //连接或自动重连中
//           console.log("GoEasy is connecting", attempts);
//       }
//   });

//   getApp().globalData.goEasy.publish({
//     channel: "zrt",//替换为您自己的channel
//     message: "Hello GoEasy!",//替换为您想要发送的消息内容
//     onSuccess:function(){
//         console.log("消息发布成功。");
//     },
//     onFailed: function (error) {
//         console.log("消息发送失败，错误编码："+error.code+" 错误信息："+error.content);
//     }
//  });

//   getApp().globalData.goEasy.subscribe({
//     channel: "zrt",//替换为您自己的channel
//     onMessage: function (message) {
//         console.log("Channel:" + message.channel + " content:" + message.content);
//     },
//     onSuccess: function () {
//         console.log("Channel订阅成功。");
//     },
//     onFailed: function (error) {
//         console.log("Channel订阅失败, 错误编码：" + error.code + " 错误信息：" + error.content)
//     }
// });


    
  },



  introInput:function(e){
    this.setData({
      intro:e.detail.value
    })
  },
  nameInput:function(e){
    this.setData({
      name:e.detail.value
    })

  },
  price:function(e){
    this.setData({
      price:e.detail.value
    })

  },

  onLoad: function (options) {
    var options = {
      host:"hangzhou.goeasy.io",//应用所在的区域地址: [hangzhou.goeasy.io, 新加坡暂不支持IM，敬请期待]
      appkey:"BC-1e71462384dd4379a9a8a68849957b0a"
    };
    var im  = GoEasyIM.getInstance(options);
    this.setData(
      {
        im:im
      }
    )
    var a=JSON.parse(options.exchangeinfo)
    this.setData({
      exchangearray:a
    })
     console.log(a)
  },

  
})