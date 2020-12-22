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
    exchange:"",
    spuseraccount:""
    

  },

  onLoad: function (options) {
    this.data.id=options.index;
    if(options.spinfo!=null){ 
      var array={};
      array=JSON.parse(options.spinfo)
      this.data.array1=array
      this.setData({
        name:array.goodsName,
        price:array.goodsPrice,
        intro:array.goodsTextDesc,
        imgs:array.imgs,
        exchange:array.goodsCanExchange,
        kucun:array.goodsStocks,
        spuseraccount:array.userAccount
      })
    }else{
      var array=JSON.parse(options.flag)
      this.data.array1=array
      this.setData({
        imgs:array.imgs,
    name:array.goodsName,
    price:array.goodsPrice,
    intro:array.goodsTextDesc,
    exchange:array.goodsCanExchange,
    kucun:array.goodsStocks,
    spuseraccount:array.userAccount
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

})