var util = require('../../utils/util.js');
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    img: null,
    classId: null,
    classification: [
      { id: 1, name: '手机' },
      { id: 2, name: '二手书' },
      { id: 3, name: '电脑' },
      { id: 4, name: '更多' }
    ],
    index: 0 // 当前选中的分类索引
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  updataimg: function () {
    var that = this;
    wx.chooseImage({
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          img: tempFilePaths
        });
        console.log(res.tempFiles);
      }
    });
  },

  formSubmit: function (e) {
    var that = this;
    var value = e.detail.value;

    if (value.name === "") {
      wx.showToast({
        title: '商品标题不能为空',
        icon: "none"
      });
    } else if (value.describle === "") {
      wx.showToast({
        title: '商品描述不能为空',
        icon: "none"
      });
    } else if (value.price < 0 || value.price === "" || value.price > 99999999) {
      wx.showToast({
        title: '价格不能小于零',
        icon: "none"
      });
    } else if (that.data.img === null) {
      wx.showToast({
        title: '你最好能添加几张图片',
        icon: "none"
      });
    } else if (that.data.classId === null) {
      wx.showToast({
        title: '你是不是没选分类啊',
        icon: "none"
      });
    } else {
      wx.showToast({
        title: '发布中',
        icon: 'loading',
        duration: 30000
      });

      // 将表单数据存储到本地存储中
      let postedItems = wx.getStorageSync('info') || [];
      postedItems.push({
        title: value.name,
        description: value.describle,
        price: value.price,
        classification: that.data.classification[that.data.index].name,
        images: that.data.img
      });
      wx.setStorageSync('info', postedItems);

      // 跳转到首页并刷新数据
      wx.switchTab({
        url: '/pages/index/index'
      });
    }
  },

  bindPickerChange: function (e) {
    var that = this;
    console.log('携带值为', e.detail.value);
    that.setData({
      index: e.detail.value,
      classId: that.data.classification[e.detail.value].id
    });
  }
});