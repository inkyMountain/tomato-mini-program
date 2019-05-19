
//app.js
App({
  onLaunch: function () {
    wx.login({
      success: (res) => {
        // res {code:... , errMsg:...}
        this.globalData.code = res.code
      }
    })
    Object.assign(this.globalData, require('conf'))
  },
  globalData: {
    host: 'https://gp-server.hunger-valley.com',
    // host: 'https://blog-server.hunger-valley.com',
    code: undefined
  }
})

let {http} = require('utils/http.js')
http.post('/tomatoes')
http.get('/tomatoes').then((res) => {
  console.log('tomatoes: ', res)
})
