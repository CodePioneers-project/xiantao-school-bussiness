// pages/location/Location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentLocation: null,
    location: [
      {
        id: 1,
        name: '常州信息职业技术学院'
      },
      // 这里是由API获取附近学院进行拼接的。
      {
        id: 2,
        name: '常州机电职业技术学院'
      },
      {
        id: 3,
        name: '常州工程职业技术学院'
      },
      {
        id: 4,
        name: '常州纺织职业技术学院'
      },
      {
        id: 5,
        name: '常州工业职业技术学院'
      },
      {
        id: 6,
        name: '常州大学'
      },
    ],
  },

  locationClick: function (e) {
    console.log(e.target.dataset);
    this.setData({
      currentLocation: e.target.dataset.data,
    })
  },

  submit: function () {
    if (this.data.currentLocation) {
      wx.setStorageSync('location', this.data.currentLocation);
      wx.navigateTo({
        url: '/pages/add/add'
      });
    } else {
      wx.showToast({
        title: '请先选择对应位置',
        icon: 'none',
        duration: 2000
      });
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const storedLocationInfo = wx.getStorageSync('location');
    if (storedLocationInfo) {
      this.setData({
        currentLocation: storedLocationInfo
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