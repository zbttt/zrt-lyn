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
    imgs:[],
    name:"",
    price:0,
    kucun:0,
    rate:0,
    intro:"",
    id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.data.container.name=this.data.name;
    this.data.container.price=this.data.price;
    this.data.container.intro=this.data.intro;
    this.data.container.imgs=this.data.imgs;
  },

  shoucang:function(){
    app.globalData.sclist.push(this.data.container);

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