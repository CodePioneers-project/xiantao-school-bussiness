// pages/nickname/nickname.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    richTextContent: '请设置4-12个字，不含@<>,等无效字符哦',
    nickname: '',
  },

  // 输入框变化事件
  inputChange(e) {
    const field = e.currentTarget.dataset.field;
    const value = e.detail.value;
    this.setData({
      [`${field}`]: value
    });
  },

  // 保存用户信息
  saveUserNickName() {
    const nickname = this.data.nickname;
    if (!nickname) {
      wx.showToast({
        title: '请填完信息后保存',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    // 保存到本地存储
    wx.setStorageSync('nickname', nickname);

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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载页面时，可以从本地存储或服务器获取用户信息
    const storedNickname = wx.getStorageSync('nickname');
    if (storedNickname) {
      this.setData({
        nickname: storedNickname
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})