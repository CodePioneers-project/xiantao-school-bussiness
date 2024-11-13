var util = require('../../utils/util.js');
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    img: null,
    classId: null,
    classification: [{
        id: 1,
        name: '服装'
      },
      {
        id: 2,
        name: '美妆'
      },
      {
        id: 3,
        name: '饮食'
      },
      {
        id: 4,
        name: '饰品'
      },
      {
        id: 5,
        name: '鞋包'
      },
      {
        id: 6,
        name: '生活用品'
      },
      {
        id: 7,
        name: '数码电器'
      },
      {
        id: 8,
        name: '学习用品'
      },
      {
        id: 9,
        name: '交通工具'
      },
      {
        id: 10,
        name: '体育用品'
      },
      {
        id: 11,
        name: '其他'
      },
    ],
    statusId: null,
    status: [{
        id: 1,
        name: '全新'
      },
      {
        id: 2,
        name: '翻新'
      },
      {
        id: 3,
        name: '接近新品'
      },
      {
        id: 4,
        name: '正常模型'
      },
      {
        id: 5,
        name: '略有瑕疵'
      },
    ],
    locationId: null,
    location: [{
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
    classificationIndex: 0, // 当前选中的分类索引,
    statusIndex: 0,
    locationIndex: 0,
    textareaLength: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

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

  changeTextArea(e) {
    this.setData({
      textareaLength: e.detail.value.length
    })
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
      that.data.classId = 0
    } else if (that.data.locationId === null) {
      that.data.locationId = 0
    } else if (that.data.statusId === null) {
      that.data.statusId = 0
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
  },
  bindStatusPickerChange: function (e) {
    var that = this;
    console.log('携带值为', e.detail.value);
    that.setData({
      statusIndex: e.detail.value,
      statusId: that.data.status[e.detail.value].id
    });
  },
  bindLocationPickerChange: function (e) {
    var that = this;
    console.log('携带值为', e.detail.value);
    that.setData({
      locationIndex: e.detail.value,
      locationId: that.data.location[e.detail.value].id
    });
  }
});