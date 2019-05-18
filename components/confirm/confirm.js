// components/confirm/confirm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: '我想要做：...'
    },
    value: {
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
    onConfirm(event){
      this.triggerEvent('confirm', this.data.value)
    },
    onCancel(event){ 
      this.triggerEvent('cancel', this.data.value)
    },
    onInput(event){
      this.setData({
        value: event.detail.value
      })
    }
  }
})
