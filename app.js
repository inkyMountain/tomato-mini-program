//app.js
App({
  onLaunch: function () {
    wx.login({
      success: (res) => {
        // res {code:... , errMsg:...}
        this.globalData.code = res.code
      }
    })
    wx.showToast({
      title: '哈哈'
    })
    console.log(this.globalData.app_id)
    Object.assign(this.globalData, require('conf'))
    console.log(this.globalData.app_id)
  },
  globalData: {
    host: 'https://gp-server.hunger-valley.com',
    // host: 'https://blog-server.hunger-valley.com',
    code: undefined
  }
})

// let {http} = require('utils/http.js')
// console.log(http)
// http.get('').then((res) => {
//   console.log('成功', res)
// })
