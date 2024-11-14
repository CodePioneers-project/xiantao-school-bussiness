Page({
  data: {
    userInfo: {}
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