//app.js

App({

  data:{
      openid:null,
      // apiUrl:'http://localhost:8080/api',
      apiUrl:'https://2.fanfpy.top/xianyu/api',
      userInfo:null
  },
  onLaunch: function () {
    const fs = wx.getFileSystemManager();
    const filePath = wx.env.USER_DATA_PATH + '/info.json';

    try {
      // 检查文件是否存在
      fs.accessSync(filePath);
    } catch (e) {
      // 如果文件不存在，创建一个空文件
      fs.writeFileSync(filePath, '[]', 'utf-8');
    }

        // 读取 info.json 文件
        wx.request({
          url: '/path/to/info.json', // 替换为 info.json 文件的路径
          success: (res) => {
            const postedItems = res.data;
            wx.setStorageSync('info', postedItems);
          },
          fail: (err) => {
            console.error('Failed to load info.json', err);
          }
        });
  },


    getOpenid:function(){
      var that = this
      wx.login({
        success: function (res) {
          // console.log(res.code);
          if (res.code) {
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session',
              data: {
                appid: "wx070997be3de9f5a3",
                secret: "fa81eea44e8cb001b8e6d75bb5fb82a8",
                js_code: res.code,
                grant_type: "authorization_code",
              },
              success: function (res) {
                that.data.openid = res.data.openid;
                console.log("openid= "+that.data.openid)
              }
            })
          }
        }
      });
    },
})








