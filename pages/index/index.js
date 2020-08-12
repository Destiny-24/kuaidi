//index.js
//获取应用实例
const app = getApp()

Page({
  data(){
    value = ""
  },
  handleChange(event){
    let value = event.detail.value;
    this.setData({value})
  },
  handleSubmit(){
    let value = this.data.value;
    if(!value){
      wx.showToast({
        icon:'none',
        title:'请输入快递单号'
      })
    }else{
      let url = `/pages/detail/detail?order_id=${value}`
      wx.navigateTo({url});
    }
  },
  handleScancode(){
    wx.scanCode({
      success(res){
        let order_id = res.result.trim();
        let url = `/pages/detail/detail?order_id=${order_id}`
        wx.navigateTo({url})
      }
    })
  }
})
