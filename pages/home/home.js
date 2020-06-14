// pages/home/home.js
import api from '../../utils/request.js'
import {draws} from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc1: '../../img/头图@2x.png',//图片链接
    imageSrc2:'../../img/抽奖转盘@2x.png',
    imageSrc3:'../../img/btn_关闭@2x_gaitubao_35x35.png',
    imageSrc4:'../../img/btn_关闭备份@2x_gaitubao_64x16.png',
    imageSrc5:'../../img/btn_关闭备份 2@2x_gaitubao_64x16.png',
    showModal: false,
    showRecord:false

  },
  submit: function() {
    this.setData({
    showModal: true
    })
},

record:function(){
  this.setData({
    showRecord:true
    })
},

draw:function(){

  api.get(draws).then(res=>{
    console.log(res.data)
   
  })

  
},
 preventTouchMove: function() {

},


go: function() { 
    this.setData({
    showModal: false
    })
},

go1: function() { 
  this.setData({
  showRecord: false
  })
},

jump:function(){

  wx.navigateTo({

    url: '../address/address'

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