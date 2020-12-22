// pages/sclist/sclist.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scsplist:[],
    scsplistimg:[]

  },

  jump:function(e){
    const index = e.currentTarget.dataset.index;
    var a={};
    a=JSON.stringify(this.data.scsplistimg[e.currentTarget.dataset.index]);
    console.log(a);
    wx.navigateTo({
      url: '/pages/spinfo/spinfo?spinfo='+a,
    })
  },

  deleteList: function (e) {

    const index = e.currentTarget.dataset.index; //得到index的值
    const that=this
    var scsplistimg=[]
    console.log(that.data.scsplistimg[index].goodsId)
    wx.request({
      url: 'http://101.200.158.165:8082/superadmin/cancelCollection?account='+app.globalData.useraccount+'&id='+that.data.scsplistimg[index].goodsId,
      method:'POST',
      success(res){
      }
    })
    this.onLoad()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that=this
    wx.request({
      url: 'http://101.200.158.165:8082/superadmin/listAllCollections',
      method:'GET',
      success(res){
        console.log(res.data.success[0])
        var scarray=[]
        scarray=res.data.success
        wx.request({
          url: 'http://101.200.158.165:8082/superadmin/listGood',
          method:'GET',
          success(res){
            var sparray=[]
            sparray=res.data.success
            var sclist=[]
            for(var i=0;i<=scarray.length-1;i++){
              for(var x=0;x<=sparray.length-1;x++)
              if(scarray[i].goodsId==sparray[x].goodsId){
                sclist.push(sparray[x])
                break
              }
            }
            console.log(sclist)
            that.setData({
            scsplist:sclist
             })
            console.log(that.data.scsplist)
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
                for(var i=0;i<=nmsl1.success.length-1;i++){
                    if(flag.goodsid==nmsl1.success[x].goodsId){
                      var stru={goodsid:0,addr:""}
                    stru.goodsid=nmsl1.success[x].goodsId;
                    stru.addr=nmsl1.success[x].imageAddr;
                    array.push(stru)
                    x=x+1
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
                var arr=sparray      
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
                      exchange:"",
                      goodsStocks:""
                    }
                    temp.goodsId=arr[a].goodsId
                    temp.goodsName=arr[a].goodsName
                    temp.goodsPrice=arr[a].goodsPrice
                    temp.goodsTextDesc=arr[a].goodsTextDesc
                    temp.goodsTag=arr[a].goodsTag
                    temp.goodsStocks=arr[a].goodsStocks
                    temp.imgs=imgs[b]
                    temp.exchange=arr[a].goodsCanExchange
                    temparr.push(temp)
                    break
                  }
                  if((b==imgs.length-1)&&arr[a].goodsId!=imgs[b][0].goodsid){
                    temparr.push(arr[a])
                  }
                }
                  
                 
                }
                var b=[]
                for(var i=0;i<=that.data.scsplist.length-1;i++){
                  for(var x=0;x<=temparr.length-1;x++){
                    if(that.data.scsplist[i].goodsId==temparr[x].goodsId){
                      var temp={
                        goodsId:"",
                        goodsName:"",
                        goodsPrice:"",
                        goodsTextDesc:"",
                        goodsTag:"",
                        imgs:[],
                        goodsCanExchange:false
                      }
                      temp.goodsId=temparr[x].goodsId
                      temp.goodsName=temparr[x].goodsName
                      temp.goodsPrice=temparr[x].goodsPrice
                      temp.goodsTextDesc=temparr[x].goodsTextDesc
                      temp.goodsTag=temparr[x].goodsTag
                      temp.imgs=temparr[x].imgs
                      temp.goodsCanExchange=temparr[x].exchange
                      temp.goodsStocks=temparr[x].goodsStocks
                      b.push(temp)
                      break
                    }
                  }
                }
                wx.request({
                  url: 'http://101.200.158.165:8082/superadmin/listAllCollectionsByAccount?account='+app.globalData.useraccount,
                  method:'GET',
                  success(res){
                    var userarr=[]
                    var a=[]
                    var c=[]
                    a=JSON.stringify(res.data)
                    c=JSON.parse(a)
                    for(var i=0;i<c.success.length;i++){
                      for(var x=0;x<b.length;x++){
                        if(c==null){
                          break
                        }
                        if(c.success[i].goodsId==b[x].goodsId){
                          userarr.push(b[x])
                        }
                    }
                  }
                    that.setData({
                      scsplistimg:userarr
                    })
                  }
                })
              }   
            })
            
          }
        })
      }
    })
  },

})