// pages/index/index.js
let {http} = require('../../utils/http.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    todolist: [],
    createForm: {
      visible: false
    },
    editForm: {
      visible: false,
      content: '',
      target: {
        index: undefined,
        id: undefined
      }
    },
    scrollTop: 0,
    scrollHeight: 0
  },

  // todo组件左侧按钮  效果：发送put请求，修改后台及界面中todo的完成状态。
  changeStatus(event){
    let index = event.currentTarget.dataset.index
    http.put(`/todos/${event.currentTarget.id}`, {
      completed: true
    }).then((res) => {
      let attr = 'todolist[' + index + ']completed'
      this.setData({
        [attr]: true
      })
    })
  },
  

  // 创建任务按钮 | 效果：显示创建任务form。
  create(event) {
    this.setData({
      'createForm.visible': true
    })
  },
  // 创建任务form的确认按钮 | 效果: post请求新增后端todo，成功后更新本地todolist。
  onCreateConfirm(event){
    // event.detail 是用户输入的内容。来源于confirm组件，与textarea绑定的value属性。
    let todolist = this.data.todolist
    if (!event.detail){
      wx.showToast({
        title: '内容不能为空',
        icon: 'none'
      })
      return
    }
    http.post('/todos', {
      description: event.detail
    }).then((res) => {
      todolist.unshift({
        id: res.data.resource.id,
        description: event.detail,
        finished: false
      })
      this.setData({
        'createForm.visible': false,
        todolist,
        scrollTop: 0
      })
    }).catch((res) => {
      wx.showToast({
        title: '提交失败'
      })
      console.log('新建todo失败', res.data.errors)
    })
  },
  // 创建任务form的取消按钮 | 效果: 隐藏创建form。
  onCreateCancel(event){
    this.setData({
      'createForm.visible': false,
    })
  },


  // todo组件右侧文字 | 效果：显示编辑form，修改target属性为当前todo的index和id。
  editContent(event) {
    // event.detail 是todo组件中的text
    let todoId = event.currentTarget.id
    let index = event.currentTarget.dataset.index
    this.setData({
      'editForm.content': event.detail,
      'editForm.visible': true,
      'editForm.target.index': index,
      'editForm.target.id': todoId
    })
  },
  // 编辑任务form的确认按钮 | 效果: 保存编辑目标的index和id，put请求修改内容，成功后更新本地视图。
  onEditConfirm(event){
    let target = this.data.editForm.target
    let attr = `todolist[${target.index}].description`
    if (!(target.index && target.id)){
      wx.showToast({
      // 这个一般不发生。为防止瞎点、卡顿等造成的不明错误而提示。
        title: '未知错误', 
        icon: 'none'
      })
      return
    }
    http.put(`/todos/${target.id}`, {
      description: `${event.detail}`,
      completed: false
    }).then((res) => {
      this.setData({
        [attr]: res.data.resource.description,
        'editForm.visible': false,
        'editForm.target.index': 0,
        'editForm.target.id': 0
      })
    }).catch((res) => {
      wx.showToast({
        title: '修改失败，请重试',
        icon: 'none'
      })
      console.log(res)
    })
  },
  onEditCancel(event){
    this.setData({
      'editForm.visible': false,
      'editForm.target.index': 0,
      'editForm.target.id': 0
    })
    
  },

  // 滑动时获取scrollTop和scrollHeight
  onScroll(event) {
    // console.log(event.detail)
    this.setData({
      scrollTop: event.detail.scrollTop,
      scrollHeight: event.detail.scrollHeight
    })
  },



  navigateToTimer(){
    wx.vibrateLong()
    wx.navigateTo({
      url: '../../pages/timer/timer'
    })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      scrollTop: 1
    })
    // 获取未完成的todo，赋值到todolist
    http.get('/todos?completed=false').then((res) => {
      this.setData({
        'todolist': res.data.resources
      })
    })
    http.get('/tomatoes?is_group=yes')
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