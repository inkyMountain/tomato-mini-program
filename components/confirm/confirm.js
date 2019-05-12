// components/confirm/confirm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: {
      type: String,
      value: '我想要做：...'
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
      // console.log('onConfirmTrigger')
      this.triggerEvent('confirm', event)
    },
    onCancel(event){ 
      // console.log('onConfirmCancel')
      this.triggerEvent('cancel', event)
    }
  }
})
