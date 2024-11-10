var app = getApp();

Page({
  data: {

    carouselImages: [  // 这里修改图片路径
      '/img/lunbo3.jpg',
      '/img/lunbo2.png',
      '/img/lunbo1.jpg',
      '/img/lunbo4.jpg'  // 新增的图片路径
    ]
  },

  onLoad: function () {
    this.loadPostedItems();
  },

  loadPostedItems: function () {
    const postedItems = wx.getStorageSync('info') || [];
    this.setData({
      postedItems: postedItems
    });
  },

  onShow: function () {
    this.loadPostedItems();
  },

  // 处理“我想要”按钮的点击事件
  toggleWant: function(e) {
    const id = e.currentTarget.dataset.id;
    const items = this.data.postedItems;
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      items[itemIndex].want = !items[itemIndex].want;
      this.setData({ postedItems: items });
    }
  },

  // 处理“不喜欢”按钮的点击事件
  dislikeItem: function(e) {
    const id = e.currentTarget.dataset.id;
    const items = this.data.postedItems;
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      items.splice(itemIndex, 1);
      this.setData({ postedItems: items });
      wx.setStorageSync('postedItems', items);
    }
  },

  // 导航到商品详情页面
  navigateToGoodsInfo: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/goodsInfo/goodsInfo?id=${id}`
    });
  }


  
});