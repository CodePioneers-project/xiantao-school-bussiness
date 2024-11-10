Page({
  data: {
    login: {
      show: false,
      line: false,
      avatar: ''
    }
  },

  // 选择头像并模拟登录成功
  chooseAvatar(e) {
    const { avatarUrl } = e.detail;
    this.setData({
      'login.avatar': avatarUrl,
      'login.show': true,
      'login.line': true
    });
    wx.showToast({
      title: '登录成功',
      icon: 'success',
      duration: 2000
    });
  },

  // 基本信息点击事件
  basicClick() {
    if (this.data.login.show) {
      wx.navigateTo({
        url: '/pages/editProfile/editProfile'
      });
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 2000
      });
    }
  },

  // 反馈点击事件
  feedbackClick() {
    wx.navigateTo({
      url: '/pages/feedback/feedback'
    });
  },

  // 退出登录
  exitClick() {
    this.setData({
      'login.show': false,
      'login.line': false,
      'login.avatar': ''
    });
    wx.showToast({
      title: '退出登录成功',
      icon: 'success',
      duration: 2000
    });
  },


  // 处理“清除缓存”按钮的点击事件
  clearCache: function() {
    wx.showModal({
      title: '提示',
      content: '确定要清除所有缓存吗？',
      confirmText: '确定',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          // 清除所有本地存储数据
          wx.clearStorageSync();
          // 重置商品列表
          this.setData({
            postedItems: []
          });
          // 重置登录状态
          this.setData({
            login: {
              avatar: '',
              show: false,
              line: false
            }
          });
          // 提示用户缓存已清除
          wx.showToast({
            title: '缓存已清除',
            icon: 'success',
            duration: 2000
          });
        }
      }
    });
  }
});