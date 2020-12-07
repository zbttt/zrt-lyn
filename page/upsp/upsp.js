// page/upsp/upsp.js
const app=getApp()
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
    spinfo:[],
    inputvalue:"",
    check:"",
    name:"",
    intro:"",
    text:"",
    price:"",
    miaoshu:{
      price:"",
      intro:"",
      type:"",
      name:"",
      spimage:[]
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

  shangchuan:function(){console.log( app.globalData.storelist)
    var array=[];
    var stru={
      name:"",
      price:"",
      intro:"",
      spimage:[],
      type:""
    }
    this.data.miaoshu.name=this.data.name;
    this.data.miaoshu.price=this.data.price;
    this.data.miaoshu.intro=this.data.intro;
    this.data.miaoshu.spimage=this.data.imgs;
    this.data.miaoshu.type=this.data.type;
    stru.name=this.data.miaoshu.name;
    stru.price=this.data.miaoshu.price;
    stru.intro=this.data.miaoshu.intro;
    stru.spimage=this.data.miaoshu.spimage;
    stru.type=this.data.miaoshu.type;
    if(stru.type=="食品"){
      app.globalData.food.push(stru)
    }else if(stru.type=="学习"){
      app.globalData.study.push(stru)
   }else if(stru.type=="化妆"){
    app.globalData.makeup.push(stru)
 }else if(stru.type=="鞋子"){
  app.globalData.shoe.push(stru)
}else if(stru.type=="运动用品"){
  app.globalData.sport.push(stru)
}else if(stru.type=="服饰"){
  app.globalData.clothes.push(stru)
}else if(stru.type=="数码"){
  app.globalData.tech.push(stru)
}else{
  app.globalData.life.push(stru)
}


    app.globalData.storelist.push(stru);
    
    this.setData({
      inputvalue:"",
      check:false,
      imgs:array
    })

  },

  checkboxChange:function(e){
    this.setData({
      type:e.detail.value
    })
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