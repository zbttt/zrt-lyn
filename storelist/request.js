

const network = {
  getspList: function(params){
    wx.request({
      url: 'url',
      success: function(res){
          var splist=res.data;
        if( params && params.success){
          params.success(splist);
        }
      }
    })
  }
}

export {network}