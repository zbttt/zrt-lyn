// page/upsp/upsp.js
const app=getApp()
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
    spinfo:[],
    exchange:"",
    inputvalue:"",
    check:"",
    name:"",
    intro:"",
    text:"",
    kucun:0,
    price:0,
    miaoshu:{
      price:"",
      intro:"",
      type:"",
      name:"",
      spimage:[],
      exchange:""
    }
  },
  // 上传图片
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

  shangchuan:function(){

    var array=[];
    var stru={
      name:"",
      price:0,
      intro:"",
      spimage:[],
      type:"",
      exchange:""
    }
   

var list=this.data.imgs;
console.log(list)
wx.request({
  url: 'http://101.200.158.165:8082/superadmin/addGood',
  method:"POST",
  data:{
    "goodsName":this.data.name,
    "goodsPrice":this.data.price,
    "goodsTextDesc":this.data.intro,
    "goodsTag":this.data.type,
    "goodsCanExchange":this.data.exchange,
    "userAccount":app.globalData.useraccount,
    "goodsStocks":this.data.kucun
  },
  success(res){
    console.log(res.data)
    for(var i=0;i<list.length;i++){
      wx.request({
      url: 'http://101.200.158.165:8082/superadmin/insertImages',
      method:'POST',
      data:{
        "imageAddr":list[i],
        "goodsId":res.data['success']
      },
      success(res){
        console.log(res.data)
      }
    })
  }
    
  }
})
    
    this.setData({
      inputvalue:"",
      check:false,
      imgs:array
    })

    

  },

  radioboxChange:function(e){
    this.setData({
      type:e.detail.value
    })
  },

  checkboxChange:function(e){

   if(e.detail.value=="可交换"){
     this.setData({
       exchange:true
     })
   }else{
    this.setData({
      exchange:false
    })
   }console.log(this.data.exchange)
  },


  introInput:function(e){
    this.setData({
      intro:e.detail.value
    })

  },
  kucunInput:function(e){
    this.setData({
      kucun:e.detail.value
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


  
 
  onLoad: function () {
   


  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
 
  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },
 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
 
  },
 
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
 
  },
 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
 
  },
 
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
 
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
 
  }
})