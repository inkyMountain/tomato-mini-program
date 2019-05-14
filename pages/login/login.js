// pages/login/login.js
const app = getApp()
const {http} = require('../../utils/http.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onGetUserInfo(event){
    app.globalData.userInfo = event.userInfo
    app.globalData.auth = event.detail
    console.log(app.globalData)
    const { app_id, app_secret, code } = app.globalData
    const { iv, encryptedData } = app.globalData.auth
    http.post('/sign_in/mini_program_user', { code, iv, encryptedData, app_id, app_secret }).then((res) => {
      console.log('resolve')
    }, (res) => {
      console.log('reject')
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