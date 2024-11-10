Page({
  data: {
    id: null,
    messages: [],
    messageInput: ''
  },

  onLoad: function(options) {
    this.setData({ id: options.id });
  },

  // 发送消息
  send: function(e) {
    const message = this.data.messageInput.trim();
    if (message !== '') {
      this.setData({
        messages: [...this.data.messages, { type: 'user', text: message }],
        messageInput: '' // 清空输入框
      });
      // 发送消息到服务器（示例）
      wx.request({
        url: '/sendMessage',
        method: 'POST',
        data: { id: this.data.id, message: message },
        success: (res) => {
          console.log(res.data);
        }
      });
    }
  },

  // 监听输入框内容变化
  handleInput: function(e) {
    this.setData({
      messageInput: e.detail.value
    });
  }
});