import api from '../../utils/request.js'
import {register} from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    name:"",
    phone:"",
    code:""
    
  },

  
  
  getName: function (e) {
    var val = e.detail.value;
    this.setData({
      name: val
    });
  },  



  getPhone: function (e) {
    var val = e.detail.value;
    this.setData({
      phone: val
    });
  },  

  getCode: function (e) {
    var val = e.detail.value;
    this.setData({
     code: val
    });
  },



  submit: function () {
   
    api.post(register,{
      username:this.data.name,
      phoneNumber:this.data.phone,
      password:this.data.code
    }).then(res=>{
      console.log(res.data)
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