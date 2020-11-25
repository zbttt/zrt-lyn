Component({
  properties:{
    rate:{
      type:Number,
      value:0
    },

    fontsize:{
      type:Number,
      value:20
    },
    starsize:{
      type:Number,
      value:20
    },
    fontcolor:{
      type:String,
      value:"#ccc"
    },

  },

  data:{

  },

  lifetimes:{
    attached:function(){
      var that=this;
      var rate=that.properties.rate;
      var intpoint=parseInt(rate);
      var light=parseInt(intpoint/2);
      var half=intpoint%2;
      var gray=(5-light-half);
      var lights=[];
      var halfs=[];
      var grays=[];

      for(var index1=1;index1 <= light;index1++){
        lights.push(index1);
      }

      for(var index2=1;index2 <= half;index2++){
        halfs.push(index2);
      }

      for(var index3=1;index3 <= gray;index3++){
        grays.push(index3);
      }

      var ratepoint=rate && rate>0 ? rate.toFixed(1) : "未评分";
      

      that.setData({
        halfs: halfs,
        lights:lights,
        grays:grays,
        ratepoint:ratepoint
      });

    }
  }

})
