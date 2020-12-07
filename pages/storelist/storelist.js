// pages/storelist/storelist.js

import {network} from "request.js"
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    splist:[],
    text:"",
    flag:""
  },

  chundi: function(e){
    var index = e.currentTarget.dataset.index;
    console.log(index);
    wx.navigateTo({
      url: '/pages/spinfo/spinfo?index='+index+'&flag='+this.data.flag,
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      flag:options.id
    })
    if(options.id=="食品"){
      this.setData({
        splist:app.globalData.food,
      })
    }else if(options.id=="学习"){
      this.setData({
        splist:app.globalData.study,
      })
   }else if(options.id=="化妆"){
    this.setData({
      splist:app.globalData.makeup,
    })
 }else if(options.id=="鞋子"){
  this.setData({
    splist:app.globalData.shoe,
  })
}else if(options.id=="运动用品"){
  this.setData({
    splist:app.globalData.sport,
  })
}else if(options.id=="服饰"){
  this.setData({
    splist:app.globalData.clothes,
  })
}else if(options.id=="数码"){
  this.setData({
    splist:app.globalData.tech,
  })
}else{
  this.setData({
    splist:app.globalData.life,
  })
}
    

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