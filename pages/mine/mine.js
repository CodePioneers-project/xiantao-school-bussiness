// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isMyself: true,
    currentTab: '1',
    goodsWindowList: [
      {
        id: 1,
        title: '迪士尼星黛露，冬日挂件，不迪士尼星黛露，冬日挂件，不',
        type: '全新｜其他',
        price: 49,
        img: '/img/my/goodsWindow1.png',
        userName: '再也不熬夜',
        userImg: '/img/home/product1-icon.png'
      },
      {
        id: 2,
        title: '迪士尼星黛露，冬日挂件，不',
        type: '全新｜其他',
        price: 49,
        img: '/img/my/goodsWindow1.png',
        userName: '再也不熬夜',
        userImg: '/img/home/product1-icon.png'
      },
      {
        id: 3,
        title: '迪士尼星黛露，冬日挂件，不',
        type: '全新｜其他',
        price: 49,
        img: '/img/my/goodsWindow1.png',
        userName: '再也不熬夜',
        userImg: '/img/home/product1-icon.png'
      }
    ],
    postList: [],
  },

  backView () {
    wx.navigateBack()
  },

  onTabClick(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab,
    });
  },

  // 基本信息点击事件
  toDetailPage() {
    wx.navigateTo({
      url: '/pages/editProfile/editProfile'
    });
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