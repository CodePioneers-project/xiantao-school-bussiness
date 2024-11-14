// index.js
Page({
  checkStorage: function() {
    try {
      const storedData = wx.getStorageSync('info');
      console.log('Stored data:', storedData);
      wx.showToast({
        title: '查看成功',
        icon: 'success'
      });
    } catch (e) {
      console.error('Error reading storage:', e);
      wx.showToast({
        title: '查看失败',
        icon: 'none'
      });
    }
  }
});