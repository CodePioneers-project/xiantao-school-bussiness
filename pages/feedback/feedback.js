Page({
    data: {
      feedback: '',
      response: ''
    },
  
    onReady() {
      // 初始化页面
    },
  
    // 提交反馈
    submitFeedback() {
      const { feedback } = this.data;
      if (!feedback) {
        wx.showToast({
          title: '反馈内容不能为空',
          icon: 'none',
          duration: 2000
        });
        return;
      }
  
      // 模拟提交反馈
      setTimeout(() => {
        this.setData({
          response: '感谢您的反馈，我们会尽快处理！'
        });
      }, 1000);
    },
  
    // 输入框绑定
    inputChange(e) {
      this.setData({
        feedback: e.detail.value
      });
    }
  });