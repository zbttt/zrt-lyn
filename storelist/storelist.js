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
  },

  chundi: function(e){
    var index = e.currentTarget.dataset.index;
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
  },

})