// components/button/button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    length: {
      type: String,
      value: 'long'
    },
    text: {
      type: String,
      value: '按钮'
    } ,
    background: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    ontap: () => {
      console.log('内部的点击函数')
    }
  },
})
