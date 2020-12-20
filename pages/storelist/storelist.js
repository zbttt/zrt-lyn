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
    info:[]
  },

  onsearchinput:function(event){
    console.log(event)
  },

  chundi: function(e){
    var index = e.currentTarget.dataset.index;
    console.log(index);
    console.log(this.data.info[index])
    var info1=JSON.stringify(this.data.info[index])
    console.log(info1)
    wx.navigateTo({
      url: '/pages/spinfo/spinfo?flag='+info1,
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array=[];
    array=JSON.parse(options.info)
    
    this.setData({
      info:array
    })
    console.log(options.info)
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