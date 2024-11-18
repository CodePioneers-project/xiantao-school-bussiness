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
    locationName: '',
    classificationIndex: 0, // 当前选中的分类索引,
    statusIndex: null,
    textareaLength: 0,
    isStatusPickerViewVisible: false,
    isCategoryPickerViewVisible: false,
    addModalIsShow: false,
    form: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const storedLocationInfo = wx.getStorageSync('location');
    if (storedLocationInfo) {
      this.setData({
        locationId: storedLocationInfo.id,
        locationName: storedLocationInfo.name
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
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
      wx.showToast({
        title: '请添加分类',
        icon: "none"
      });
    } else if (that.data.locationId === null) {
      wx.showToast({
        title: '请添加发布地址',
        icon: "none"
      });
    } else if (that.data.statusId === null) {
      wx.showToast({
        title: '请添加发布状态',
        icon: "none"
      });
    } else {
      this.setData({
        addModalIsShow: true,
        form: value,
      });
    }
  },

  submitConfim: function () {
    wx.showToast({
      title: '发布中',
      icon: 'loading',
      duration: 3000
    });

    // 将表单数据存储到本地存储中
    let postedItems = wx.getStorageSync('info') || [];
    postedItems.push({
      id: new Date().getTime(), // 使用时间戳作为唯一ID
      title: this.data.form.name,
      description: this.data.form.describle,
      price: this.data.form.price,
      classification: this.data.classification[this.data.index].name,
      images: this.data.img
    });
    wx.setStorageSync('info', postedItems);

    this.setData({
      addModalIsShow: false,
      form: null,
    });
    // 跳转到首页并刷新数据
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  cancel: function () {
    this.setData({
      addModalIsShow: false,
    });
  },

  toSelectLocationPage: function () {
    wx.navigateTo({
      url: '/pages/location/location',
    })
  },
  toggCategoryPickerView: function () {
    this.setData({
      isCategoryPickerViewVisible: true,
    });
  },
  bindPickerChange: function (e) {
    var that = this;
    console.log('携带值为', e.detail.value);
    that.setData({
      index: e.detail.value,
      classId: that.data.classification[e.detail.value].id
    });
  },
  cancelCategory: function () {
    var that = this;
    that.setData({
      index: null,
      classId: null,
      isCategoryPickerViewVisible: false,
    });
  },
  confirmCategory: function () {
    var that = this;
    that.setData({
      isCategoryPickerViewVisible: false,
    });
  },
  toggStatusPickerView: function () {
    this.setData({
      isStatusPickerViewVisible: true,
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
  cancelStatus: function () {
    var that = this;
    that.setData({
      statusIndex: null,
      statusId: null,
      isStatusPickerViewVisible: false,
    });
  },
  confirmStatus: function () {
    var that = this;
    that.setData({
      isStatusPickerViewVisible: false,
    });
  },
});