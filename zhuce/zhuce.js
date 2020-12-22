// page/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    useraccount:-1,
    password:"",
    inputvalue:"",
    gender:"",
    name:"",
    age:0,
    msg:"",
    status:true,
    flag:""
  },

  toastShow: function(event) {
    console.log("触发了点击事件，弹出toast")
    var status
    status = false
    this.setData({status:status})　　　　//setData方法可以建立新的data属性，从而起到跟视图实时同步的效果
  },
  toastHide:function(event){
      console.log("触发bindchange，隐藏toast")
      var status
      status =true
      this.setData({status:status})
  },

  checkboxChange:function(e){

    if(e.detail.value=="男"){
      this.setData({
        gender:"male"
      })
    }else{
     this.setData({
      gender:"female"
     })
    }console.log(this.data.gender)
   },

  zhuce:function(){
    const that=this
    wx.request({
      url: 'http://101.200.158.165:8082/superadmin/adduser',
      method:'POST',
      data:{
        "userAccount":this.data.useraccount,
        "userPassword":this.data.password,
        "userName":this.data.name,
        "userAge":this.data.age,
        "userGender":this.data.gender
      },
      success(res){
        console.log(res.data)
        if(res.data.errMsg!=null){
          that.setData({
            msg:res.data.errMsg
          })
        }else{
          that.setData({
            flag:true
          })
        }
        console.log(that.data.msg)
        that.setData({
          inputvalue:"",
          check:false,
        })
      },
      
    })
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
  name:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  age:function(e){
    this.setData({
      age:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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