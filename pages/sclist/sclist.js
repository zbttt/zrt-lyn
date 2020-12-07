// pages/sclist/sclist.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scsplist:[],

  },

  jump:function(e){
    const index = e.currentTarget.dataset.index;
    var a={};
    a=JSON.stringify(this.data.scsplist[e.currentTarget.dataset.index]);
    
    console.log(a);
    wx.navigateTo({
      url: '/pages/spinfo/spinfo?spinfo='+a,
    })
  },

  deleteList: function (e) {

    const index = e.currentTarget.dataset.index; //得到index的值
    console.log(index);
    app.globalData.sclist.splice(index,1);
    this.onLoad();
    




  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var sc1=options.sctext;
    // var sc2=options.scimage;
    // this.data.array1.sctext=sc1;
    // this.data.array1.scimage=sc2;
    // var id = e.currentTarget.dataset.id;
    // console.log(id);
    this.setData({
      scsplist:app.globalData.sclist
    })
    // this.data.scsplist.push(this.data.array);
    // arraylist=this.data.scsplist;
    // this.setData({
    //   scsplist:arraylist
    // })


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