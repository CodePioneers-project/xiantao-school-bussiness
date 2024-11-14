Page({
  data: {
    goods: {
      title: '',
      description: '',
      price: '',
      classification: '',
      images: []
    }
  },

  onLoad: function(options) {
    const goodsId = options.id; // 假设通过商品ID来查找商品
    this.getGoodsInfoFromStorage(goodsId);
  },

  getGoodsInfoFromStorage: function(goodsId) {
    try {
      const postedItems = wx.getStorageSync('info') || [];
      console.log('Stored items:', postedItems); // 调试输出

      if (postedItems.length > 0) {
        // 找到对应商品的详细信息
        const goods = postedItems.find(item => item.id === parseInt(goodsId));
        console.log('Found goods:', goods); // 调试输出

        if (goods) {
          this.setData({
            goods: goods
          });
        } else {
          wx.showToast({
            title: '商品不存在',
            icon: 'none'
          });
        }
      } else {
        wx.showToast({
          title: '商品信息未找到',
          icon: 'none'
        });
      }
    } catch (e) {
      wx.showToast({
        title: '读取商品信息失败',
        icon: 'none'
      });
      console.error('Error reading goods info:', e); // 调试输出
    }
  },

  // 其他函数，如联系卖家、立即购买等
});