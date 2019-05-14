//app.js
App({
  onLaunch: function () {
    wx.login({
      success: (res) => {
        // res {code:... , errMsg:...}
        this.globalData.code = res.code
      }
    })
  },
  globalData: {
    host: 'https://gp-server.hunger-valley.com',
    app_id: 'wxf2e4c3aad8a71c5a',
    app_secret: '29392ad1a5317abcb4d4bb1122fa3d4b',
    t_app_id: 'HxUp71ptAmo4FLbAwsfgYJGT',
    t_app_secret: 'WeuT83Rv58kHM3vXLEmfeAvD',
    code: undefined
  }
})