// pages/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    

  },

  judge:function(e){

    if(e.currentTarget.id=="食品"){
      wx.navigateTo({
        url: '/pages/storelist/storelist?id=食品',
      })
    }else if(e.currentTarget.id=="学习"){
      wx.navigateTo({
        url: '/pages/storelist/storelist?id=学习',
      })
   }else if(e.currentTarget.id=="化妆"){
    wx.navigateTo({
      url: '/pages/storelist/storelist?id=化妆',
    })
 }else if(e.currentTarget.id=="鞋子"){
  wx.navigateTo({
    url: '/pages/storelist/storelist?id=鞋子',
  })
}else if(e.currentTarget.id=="运动用品"){
  wx.navigateTo({
    url: '/pages/storelist/storelist?id=运动用品',
  })
}else if(e.currentTarget.id=="服饰"){
  wx.navigateTo({
    url: '/pages/storelist/storelist?id=服饰',
  })
}else if(e.currentTarget.id=="数码"){
  wx.navigateTo({
    url: '/pages/storelist/storelist?id=数码',
  })
}else{
  wx.navigateTo({
    url: '/pages/storelist/storelist?id=日用品',
  })
}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }

  
})