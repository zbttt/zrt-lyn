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
    this.data.id=options.index;
   
    if(options.spinfo!=null){ 
      var array={};
      array=JSON.parse(options.spinfo)
      this.setData({
        name:array.name,
        price:array.price,
        intro:array.intro,
        imgs:array.imgs
      })
      console.log(this.data.name)
    }else{
      if(options.flag=="食品"){
      this.setData({
        name:app.globalData.food[options.index].name,
        price:app.globalData.food[options.index].price,
        intro:app.globalData.food[options.index].intro,
        imgs:app.globalData.food[options.index].spimage
      })
    }else if(options.flag=="学习"){
      this.setData({
        name:app.globalData.study[options.index].name,
        price:app.globalData.study[options.index].price,
        intro:app.globalData.study[options.index].intro,
        imgs:app.globalData.study[options.index].spimage
      })
   }else if(options.flag=="化妆"){
    this.setData({
      name:app.globalData.makeup[options.index].name,
        price:app.globalData.makeup[options.index].price,
        intro:app.globalData.makeup[options.index].intro,
        imgs:app.globalData.makeup[options.index].spimage
    })
 }else if(options.flag=="鞋子"){
  this.setData({
    name:app.globalData.shoe[options.index].name,
        price:app.globalData.shoe[options.index].price,
        intro:app.globalData.shoe[options.index].intro,
        imgs:app.globalData.shoe[options.index].spimage
  })
}else if(options.flag=="运动用品"){
  this.setData({
    name:app.globalData.sport[options.index].name,
        price:app.globalData.sport[options.index].price,
        intro:app.globalData.sport[options.index].intro,
        imgs:app.globalData.sport[options.index].spimage
  })
}else if(options.flag=="服饰"){
  this.setData({
    name:app.globalData.clothes[options.index].name,
        price:app.globalData.clothes[options.index].price,
        intro:app.globalData.clothes[options.index].intro,
        imgs:app.globalData.clothes[options.index].spimage
  })
}else if(options.flag=="数码"){
  this.setData({
    name:app.globalData.tech[options.index].name,
        price:app.globalData.tech[options.index].price,
        intro:app.globalData.tech[options.index].intro,
        imgs:app.globalData.tech[options.index].spimage
  })
}else{
  this.setData({
    name:app.globalData.life[options.index].name,
        price:app.globalData.life[options.index].price,
        intro:app.globalData.life[options.index].intro,
        imgs:app.globalData.life[options.index].spimage
  })
}
    this.data.container.name=this.data.name;
    this.data.container.price=this.data.price;
    this.data.container.intro=this.data.intro;
    this.data.container.imgs=this.data.imgs;
    }
    

    
  //   if(id){
  //     this.setData({intro:app.globalData.sclist[id].intro,
  //     name:app.globalData.sclist[id].name,
  //      price:app.globalData.sclist[id].price,
  //      imgs:app.globalData.sclist[id].spimage})
      
  //   }else{
  //     this.data.id=app.globalData.id;
  //     this.setData({
  //     intro:app.globalData.storelist[this.data.id].intro,
  //  name:app.globalData.storelist[this.data.id].name,
  //   price:app.globalData.storelist[this.data.id].price,
  //   imgs:app.globalData.storelist[this.data.id].spimage
  //   })}
    
    
  },

  shoucang:function(){
    app.globalData.sclist.push(this.data.container);
    // wx.navigateTo({
    //   url: '/pages/sclist/sclist?scimage='+that.data.splist.spimage+"&sctext="+that.data.splist.sptext,
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