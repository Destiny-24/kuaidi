Page({
  data:{
    order_id:'',
    detailList:'',
    toastText:'加载中'
  },
  onLoad(options){
    let order_id = options.order_id;
    this.getData(order_id);
  },
  getData(order_id){
    let url = `https://www.kuaidi100.com/query`;
    let company = 'jd';
    wx.request({
      url : url,
      data :{
        type:company,
        postid: order_id
      },
      success:(res)=>{
        console.log(res)
        if(res.data.data.length){
          this.setData({
            detailList:res.data.data,
            order_id: order_id
          })
        }else{
          this.setData({
            toastText: res.data.data
          })
        }
      },
      fail:(erry)=>{
        console.log(erry);
        this.setData({
          toastText:'网络链接失败'
        })
      }
    })
  }
})
