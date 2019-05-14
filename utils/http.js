let app = getApp()
let request = (method, url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      header: {
        // Authorization: `Bearer ${}`,

      },
      method,
      dataType: 'json',
      responseType: 'text',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  })
}
let http = {
  get: () => {

  },
  delete: () => {

  },
  put: () => {

  },
  post: () => {

  },
}
module.exports = {
  http
}

