// pages/spinfo/spinfo.js

const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    splist:[{}],
    container:{
      name:"",
      price:"",
      intro:"",
      imgs:[]
    },
    array1:{},
    imgs:[],
    name:"",
    price:0,
    kucun:0,
    rate:0,
    intro:"",
    id:"",
    exchange:""
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.data.id=options.index;
    
    if(options.spinfo!=null){ 
      var array={};
      array=JSON.parse(options.spinfo)
      this.data.array1=array
      console.log(array)
      this.setData({
        name:array.goodsName,
        price:array.goodsPrice,
        intro:array.goodsTextDesc,
        imgs:array.imgs,
        exchange:array.goodsCanExchange
      })
      console.log(this.data.name)
    }else{
      var array=JSON.parse(options.flag)
      this.data.array1=array
      console.log(this.data.array1.goodsId)
      this.setData({
        imgs:array.imgs,
    name:array.goodsName,
    price:array.goodsPrice,
    intro:array.goodsTextDesc,
    exchange:array.goodsCanExchange
      })
    }
    

    
    
    
  },

  exchange:function(){
    var array1=JSON.stringify(this.data.array1)
    wx.navigateTo({
      url: '/page/exchange/exchange?exchangeinfo='+array1,
    })
   
  },

  shoucang:function(){
    var container={
      imgs:[],
      name:"",
      price:0,
      intro:""
    }
    container.imgs=this.data.imgs
    container.name=this.data.name
    container.price=this.data.price
    container.intro=this.data.intro
    app.globalData.sclist.push(container);
    wx.request({
      url: 'http://101.200.158.165:8082/superadmin/insertCollection',
      method:'POST',
      data:{
          "goodsId":this.data.array1.goodsId,
          "userAccount":app.globalData.useraccount
      },
      success(res){
        console.log(res.data)
      }
    })
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