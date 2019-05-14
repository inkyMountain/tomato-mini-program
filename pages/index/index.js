// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todolist: [
      {id: 1, text: '今天要做的事情', finished: false},
      { id: 2, text: '明天要做的事情', finished: true },
      { id: 3, text: '后天要做的事情', finished: false },
      { id: 4, text: '大后天要做的事情', finished: false },
      { id: 5, text: '今天要做的事情', finished: false },
      { id: 6, text: '明天要做的事情', finished: true },
      { id: 7, text: '后天要做的事情', finished: false },
      { id: 8, text: '大后天要做的事情', finished: false },
      { id: 9, text: '今天要做的事情', finished: false },
      { id: 10, text: '明天要做的事情', finished: true },
      { id: 11, text: '后天要做的事情', finished: false },
      { id: 12, text: '大后天要做的事情', finished: false },
      { id: 13, text: '今天要做的事情', finished: false },
      { id: 14, text: '明天要做的事情', finished: true },
      { id: 15, text: '后天要做的事情', finished: false },
      { id: 16, text: '大后天要做的事情', finished: false }
      ],
    confirmVisible: false,
    scrollTop: 0,
    scrollHeight: 0
  },

  onScroll(event){
    // console.log(event.detail)
    this.setData({
      scrollTop: event.detail.scrollTop,
      scrollHeight: event.detail.scrollHeight
    })
  },
  log(content){
    console.log(content)
  },

  create(event) {
    console.log(event)
    this.setData({
      confirmVisible: true
    })
  },
  onConfirm(event){
    let todolist = this.data.todolist
    let id = todolist[todolist.length - 1].id + 1
    todolist.push({
      id: id,
      text: event.detail, 
      finished: false
    })
    this.setData({
      confirmVisible: false,
      todolist: todolist,
      scrollTop: this.data.scrollHeight
    })
  },
  onCancel(event){
    this.setData({
      confirmVisible: false
    })
    console.log('cancel', event.detail)
  },
  toTimer(){
    wx.navigateTo({
      url: '../../pages/timer/timer'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('index, onLoad, query:', options)
    this.setData({
      scrollTop: 1
    })
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