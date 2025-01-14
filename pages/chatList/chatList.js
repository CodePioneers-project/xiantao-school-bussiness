// pages/chatList/chatList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  toCollectPage: function () {
    wx.navigateTo({
      url: '/pages/collect/collect',
    })
  },

  toFollowPage: function () {
    wx.navigateTo({
      url: '/pages/follow/follow',
    })
  },

  toReviewPage: function () {
    wx.navigateTo({
      url: '/pages/review/review',
    })
  },

  toChatPage: function () {
    wx.navigateTo({
      url: '/pages/chat/chat',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
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