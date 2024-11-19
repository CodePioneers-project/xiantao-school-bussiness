Component({
  data: {
    color: "#515151",
    selectedColor: "#DAA520",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: "/img/home.png",
        selectedIconPath: "/img/home-select.png"
      },
      {
        pagePath: "/pages/classInfo/classInfo",
        iconPath: "/img/fenxiang.png",
        selectedIconPath: "/img/fenxiang-select.png"
      },
      {
        pagePath: "/pages/publish/publish",
        bulge:true,
        text: "发布",
        iconPath: "/img/add.png",
        selectedIconPath: "/img/add.png"
      },
      {
        pagePath: "/pages/chatList/chatList",
        iconPath: "/img/goods-info.png",
        selectedIconPath: "/img/goods-info-select.png"
      },
      {
        pagePath: "/pages/my/my",
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