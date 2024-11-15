Component({
  data: {
    color: "#515151",
    selectedColor: "#DAA520",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: "/img/home.png",
        selectedIconPath: "/img/home-select.png"
      },
      {
        pagePath: "/pages/classInfo/classInfo",
        text: "分享",
        iconPath: "/img/fenxiang.png",
        selectedIconPath: "/img/fenxiang.png"
      },
      {
        pagePath: "/pages/add/add",
        bulge:true,
        text: "发布",
        iconPath: "/img/add.png",
        selectedIconPath: "/img/add.png"
      },
      {
        pagePath: "/pages/chat/chat",
        text: "聊天",
        iconPath: "/img/goods-info.png",
        selectedIconPath: "/img/goods-info.png"
      },
      {
        pagePath: "/pages/my/my",
        text: "我的",
        iconPath: "/img/user.png",
        selectedIconPath: "/img/user-select.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url}) 
    }
  }
})