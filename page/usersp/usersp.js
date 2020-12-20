// page/usersp/usersp.js
const app=getApp()
Page({

  data: {
    usersp:[]

  },

  deleteList:function(e){
    const index = e.currentTarget.dataset.index; //得到index的值
    console.log(index); 
    const that=this
    var scsplistimg=[]
    // scsplistimg=this.data.scsplistimg.splice(index,1);
    console.log(that.data.usersp[index].goodsId)
    // this.setData({
    //   scsplistimg:scsplistimg
    // })
   
    wx.request({
      url: 'http://101.200.158.165:8082/superadmin/deleteGoodsByGoodsId?id='+that.data.usersp[index].goodsId,
      method:'POST',
      success(res){
        console.log(res.data)
      }
    })
    this.onLoad();
  },
  onLoad: function (options) {
    var user=app.globalData.useraccount
    const that=this
    wx.request({
      url: 'http://101.200.158.165:8082/superadmin/listGoodsByUserAccount?account='+user,
      method:'GET',
      success(res){
        console.log(res.data)
        var sparray=[]
        var sparray1=[]
        sparray1=JSON.stringify(res.data)
        sparray=JSON.parse(sparray1)
        wx.request({
          url:'http://101.200.158.165:8082/superadmin/listImagesInOrder' ,
          method:"GET",
          success(res){
            var nmsl=[]
            nmsl=JSON.stringify(res.data)
            var nmsl1=[]
            nmsl1=JSON.parse(nmsl)
            console.log(nmsl1.success)
            var flag={goodsid:"",
            addr:""}
            flag.goodsid=nmsl1.success[0].goodsId
            flag.addr=nmsl1.success[0].imageAddr
            var array=[]
            var imgs=[]
            var x=1 
            console.log(nmsl1.success.length)
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
            console.log(imgs)
            var arr=sparray.success
            console.log(arr)
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
                  exchange:""
                }
                temp.goodsId=arr[a].goodsId
                temp.goodsName=arr[a].goodsName
                temp.goodsPrice=arr[a].goodsPrice
                temp.goodsTextDesc=arr[a].goodsTextDesc
                temp.goodsTag=arr[a].goodsTag
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
            console.log(123)
            console.log(temparr)
            that.setData({
              usersp:temparr
            })

          }   
        })
      }     
    })
  }
})