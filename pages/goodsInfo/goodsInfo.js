// goodsInfo.js
Page({
  data: {
    imageUrl: '',
    wantStatus: false,  // 初始状态为未想要
    wantButtonText: '我想要',  // 初始按钮文字
    currentSelectImg: 0,
    liuyanModalIsShow: false,
  },

  back () {
    wx.navigateBack()
  },

  setCurrentSelectImg (e) {
    this.setData({
      currentSelectImg: e.target.dataset.id,
    })
  },

  openLiuyanModal () {
    this.setData({
      'liuyanModalIsShow': !this.data.liuyanModalIsShow,
    });
  },

  cancelClick() {
    this.setData({
      'liuyanModalIsShow': false,
    });
  },

  onLoad: function(options) {
    // 接收从 index 页面传递过来的图片 URL
    this.setData({
      imageUrl: decodeURIComponent(options.imageUrl)
    });
  },

  // 点击按钮切换状态
  toggleWant: function() {
    this.setData({
      wantStatus: !this.data.wantStatus,
      wantButtonText: this.data.wantStatus ? '已想要' : '已想要'
    });
  }
});