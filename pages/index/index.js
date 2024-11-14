var app = getApp();

Page({
  data: {
    barList: [
      {
        id: 1,
        title: '推荐',
        label: '服饰',
        img:  '/img/home/bar1.png',
        select: true
      },
      {
        id: 2,
        title: '服饰',
        label: '饮食',
        img:  '/img/home/bar2.png',
      },
      {
        id: 3,
        title: '美妆',
        label: '鞋包',
        img:  '/img/home/bar3.png',
      },
      {
        id: 4,
        title: '饮食',
        label: '生活用品',
        img:  '/img/home/bar4.png',
      },
      {
        id: 5,
        title: '鞋包',
        label: '数码用品',
        img:  '/img/home/bar5.png',
      },
      {
        id: 6,
        label: '饰品',
        icon:  '/img/home/bar-icon.png',
        img:  '/img/home/bar6.png',
      }
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
  },



  navigateToGoodsInfo: function(e) {
    const productId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/goodsInfo/goodsInfo?id=${productId}`
    });
  },

  toggleWant: function(e) {
    const productId = e.currentTarget.dataset.id;
    const want = e.currentTarget.dataset.want;
    const updatedItems = this.data.postedItems.map(item => {
      if (item.id === productId) {
        item.want = want === '我想要';
      }
      return item;
    });
    this.setData({
      postedItems: updatedItems
    });
  },

    navigateToGoodsInfo: function (e) {
      // 获取传递的商品ID
      const goodsId = e.currentTarget.dataset.id;
      // 使用wx.navigateTo跳转到goodsInfo页面，并传递商品ID
      wx.navigateTo({
        url: '/pages/goodsInfo/goodsInfo?id=' + goodsId
      });
    }
});



