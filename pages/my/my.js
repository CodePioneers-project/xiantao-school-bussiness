Page({
  data: {
    userInfo: {}
  },

  toMinePage() {
    if (Object.keys(this.data.userInfo).length !== 0) {
      wx.navigateTo({
        url: '/pages/mine/mine'
      });
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 2000
      });
    }
  },

  // 获取用户信息
  getUserProfile() {
    wx.getUserProfile({
      desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res.userInfo);
        this.setData({
          userInfo: res.userInfo
        });
      },
      fail: (err) => {
        console.error('获取用户信息失败', err);
      }
    });
  }
});