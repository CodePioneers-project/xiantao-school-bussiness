Page({
  data: {
    userInfo: {
      nickname: '',
      phone: '',
      age: '',
      birthday: '',
      constellation: '',
      gender: 0,
      education: '',
      signature: ''
    },
    genderArray: ['男', '女', '其他']
  },

  onLoad: function (options) {
    // 加载页面时，可以从本地存储或服务器获取用户信息
    const storedUserInfo = wx.getStorageSync('userInfo');
    if (storedUserInfo) {
      this.setData({
        userInfo: storedUserInfo
      });
    }
  },

  // 输入框变化事件
  inputChange(e) {
    const field = e.currentTarget.dataset.field;
    const value = e.detail.value;
    this.setData({
      [`userInfo.${field}`]: value
    });
  },

  // 性别选择器变化事件
  bindGenderChange(e) {
    const gender = e.detail.value;
    this.setData({
      'userInfo.gender': gender
    });
  },

  // 保存用户信息
  saveUserInfo() {
    const userInfo = this.data.userInfo;
    if (!userInfo.nickname || !userInfo.phone || !userInfo.age || !userInfo.birthday || !userInfo.education || !userInfo.signature) {
      wx.showToast({
        title: '请填完信息后保存',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    // 保存到本地存储
    wx.setStorageSync('userInfo', userInfo);

    // 保存到服务器（这里可以添加你的服务器请求代码）
    // wx.request({
    //   url: '你的服务器地址',
    //   method: 'POST',
    //   data: userInfo,
    //   success: function (res) {
    //     if (res.data.success) {
    //       wx.showToast({
    //         title: '保存成功',
    //         icon: 'success',
    //         duration: 2000
    //       });
    //     } else {
    //       wx.showToast({
    //         title: '保存失败',
    //         icon: 'none',
    //         duration: 2000
    //       });
    //     }
    //   },
    //   fail: function (err) {
    //     wx.showToast({
    //       title: '保存失败',
    //       icon: 'none',
    //       duration: 2000
    //     });
    //   }
    // });

    // 显示保存成功的提示
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000
    });

    // 返回上一页
    wx.navigateBack();
  }
});