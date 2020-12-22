// pages/store/store.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[],

  },

  onsearchinput:function(event){
    console.log(event)
  },

  judge:function(e){
      wx.request({
        url: 'http://101.200.158.165:8082/superadmin/listGoodsByTag?tag='+e.currentTarget.id,
        method:"GET",
        success(res){
          var arrayup=[]
          arrayup= JSON.stringify(res.data.success) 
          wx.request({
            url:'http://101.200.158.165:8082/superadmin/listImagesInOrder' ,
            method:"GET",
            success(res){
              var nmsl=[]
              nmsl=JSON.stringify(res.data)
              var nmsl1=[]
              nmsl1=JSON.parse(nmsl)
              var flag={goodsid:"",
              addr:""}
              flag.goodsid=nmsl1.success[0].goodsId
              flag.addr=nmsl1.success[0].imageAddr
              var array=[]
              var imgs=[]
              var x=0
              console.log(nmsl1.success.length)
              for(var i=0;i<=nmsl1.success.length-1;i++){
                  if(flag.goodsid==nmsl1.success[x].goodsId){
                    var stru={goodsid:0,addr:""}
                  stru.goodsid=nmsl1.success[x].goodsId;
                  stru.addr=nmsl1.success[x].imageAddr;
                  array.push(stru)
                  x=x+1
                  console.log(x)
                  if(x==nmsl1.success.length){
                    array.push(flag)
                    imgs.push(array)
                    break;
                  }
                  }else{
                    var stru={goodsid:0,addr:""}
                    stru.goodsid=flag.goodsid;
                  stru.addr=flag.addr;
                  array.push(stru);
                  imgs.push(array);
                  var array=[]
                  flag.goodsid=nmsl1.success[x].goodsId
                  flag.addr=nmsl1.success[x].imageAddr
                  x=x+1;
                  if(x==nmsl1.success.length){
                    array.push(flag)
                    imgs.push(array)
                    break;
                  }
              }
              }
              var arr=JSON.parse(arrayup)
              var temparr=[]
              for(var a=0;a<=arr.length-1;a++){
                for(var b=0;b<=imgs.length-1;b++){
                  if(arr[a].goodsId==imgs[b][0].goodsid){
                  var temp={
                    goodsId:"",
                    goodsName:"",
                    goodsPrice:"",
                    goodsTextDesc:"",
                    goodsTag:"",
                    imgs:[],
                    goodsStocks:0,
                    spuseraccount:""
                  }
                  temp.goodsId=arr[a].goodsId
                  temp.goodsName=arr[a].goodsName
                  temp.goodsPrice=arr[a].goodsPrice
                  temp.goodsTextDesc=arr[a].goodsTextDesc
                  temp.goodsTag=arr[a].goodsTag
                  temp.userAccount=arr[a].userAccount
                  temp.imgs=imgs[b]
                  temp.goodsStocks=arr[a].goodsStocks
                  temparr.push(temp)
                  break
                }
                if((b==imgs.length-1)&&arr[a].goodsId!=imgs[b][0].goodsid){
                  temparr.push(arr[a])
                }
              }            
              }
              var temparr1=[]
              temparr1=JSON.stringify(temparr)
              wx.navigateTo({
                url: '/pages/storelist/storelist?info='+temparr1,
              })
              
            }   
          })
        }
      })
      
  }
  
  
  ,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  }

  
})