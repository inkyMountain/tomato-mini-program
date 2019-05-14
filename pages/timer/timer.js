// pages/timer/timer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    texttype: 'number',
    controlButtonText: '暂停',
    time: '25:00', 
    timer: null
  },

  start(){
    // 开始前检查time变量的格式
    if (this.data.time.indexOf(':') < 0){
      this.setData({
        time: '25:00',
        texttype: 'number'
      })
    }

    this.data.timer = setInterval(() => {
      let timeArr = this.data.time.split(':')
      let minute = timeArr[0]
      let second = timeArr[timeArr.length - 1]
      let date = new Date()
      date.setMinutes(minute)
      date.setSeconds(second)
      date.setTime(date.getTime() - 1000)
      let newSecond = ((date.getSeconds() + '').length === 1) ? '0' + date.getSeconds() : date.getSeconds()
      this.setData({
        time: date.getMinutes() + ':' + newSecond
      })

      if (minute === '0' && newSecond === '00') {
        clearInterval(this.data.timer)
        this.setData({
          time: '完成啦~',
          texttype: 'plainText',
          controlButtonText: '再来亿次'
        })
      }
    }, 1000)
  },
  toggleStatus(){
    if (this.data.controlButtonText === '暂停'){
      clearInterval(this.data.timer)
      this.setData({
        controlButtonText: '开始'
      })
    } else{
      this.start()
      this.setData({
        controlButtonText: '暂停'
      })
    }
  },
  giveup(){
    clearInterval(this.data.timer)
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.start()
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