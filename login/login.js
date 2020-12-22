// page/login/login.js
const app=getApp()
var status = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    useraccount:"",
    password:"",
    inputvalue:"",
    status:status,
    flag:""
  },
  toastShow: function(event) {
    status = false
    this.setData({status:status})　　　　//setData方法可以建立新的data属性，从而起到跟视图实时同步的效果
  },
  toastHide:function(event){
      status =true
      this.setData({status:status})
  },

  login:function(e){
    this.setData({
      useraccount:e.detail.value
    })
  },
  password:function(e){
    this.setData({
      password:e.detail.value
    })
  },
  dengru:function(){
    const that=this
    wx.request({
      url: 'http://101.200.158.165:8082/superadmin/listallusers',
      method:'GET',
      
      success(res){
        for(var i=0;i<res.data.success.length;i++){
          if(that.data.useraccount==res.data.success[i].userAccount&&that.data.password==res.data.success[i].userPassword){
            wx.showToast({
              title: '登陆成功',
              duration: 1000,
              icon:"success"
            })
            app.globalData.useraccount=that.data.useraccount
            wx.switchTab({
              url: '/pages/store/store',
            })
            break
          }  
   
        }
        if(i==res.data.success.length){
          wx.showToast({
            title: '用户信息有误',
            duration:1500
          })
          }
        
        
      }
    })
   
    
  },

})
 