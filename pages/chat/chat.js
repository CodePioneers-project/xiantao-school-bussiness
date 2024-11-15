Page({
  data: {
    messages: [{
        type: 'general',
        sender: 'other', // other表示对方，self表示自己
        avatar: '../../img/other_avatar.png',
        text: '这是对方发来的普通消息',
        time: '2024-10-16 14:20'
      },
      {
        type: 'general',
        sender: 'self',
        avatar: '../../img/self_avatar.png',
        text: '这是我发出的普通消息',
        time: '2024-10-16 14:22'
      },
      {
        type: 'payment',
        text: '我已付款，请确认取货信息',
        details: {
          location: '教学楼B栋',
          time: '2024年10月24日 16:20',
        },
        time: '2024-10-16 15:20'
      },
      {
        type: 'confirmation',
        title: '我已确认',
        text: '请按时交接',
        sender: 'other',
        avatar: '../../img/seller_avatar.png',
        time: '2024-10-16 15:22'
      },
      {
        type: 'completion',
        text: '你已确认收货，交易成功',
        time: '2024-10-24 16:22'
      }
    ],
    messageInput: '',
    emojiList: [],
    groupedEmojiList: [],
    showEmojiPicker: false,
    showMoreOptions: false
  },


  onLoad() {
    // 生成 emojiList
    const emojiList = Array.from({ length: 20 }, (_, index) => `${Math.floor(index / 5) + 1}-${(index % 5) + 1}`);
    this.setData({
      emojiList,
      groupedEmojiList: this.groupByRows(emojiList, 5), // 分组
    });
  },
  // 分组方法：将数组按每行 5 个分组
  groupByRows(list, rowSize) {
    const grouped = [];
    for (let i = 0; i < list.length; i += rowSize) {
      grouped.push(list.slice(i, i + rowSize));
    }
    return grouped;
  },

  openEmoji() {
    if (this.data.showMoreOptions) {
      this.setData({
        showMoreOptions: !this.data.showMoreOptions
      })
    }
    this.setData({
      showEmojiPicker: !this.data.showEmojiPicker
    });
  },

  // 选择 Emoji 表情
  selectEmoji(e) {

  },
  // 输入框变化事件
  handleInput(e) {
    this.setData({
      messageInput: e.detail.value
    });
  },

  // 发送消息
  send() {
    const {
      messageInput,
      messages
    } = this.data;
    if (messageInput.trim()) {
      this.setData({
        messages: [...messages, {
          type: 'general',
          sender: 'self',
          text: messageInput,
          time: new Date().toLocaleString()
        }],
        messageInput: ''
      });
    }
  },

  handlePay() {
    wx.showToast({
      title: '跳转到付款页面',
      icon: 'success',
    });
  },

  moreOptions() {
    if (this.data.showEmojiPicker) {
      this.setData({
        showEmojiPicker: !this.data.showEmojiPicker
      })
    }
    this.setData({
      showMoreOptions: !this.data.showMoreOptions
    });
  },

  // 拍照事件
  takePhoto() {
    wx.showToast({
      title: '打开相机',
      icon: 'none'
    });
    this.setData({
      showMoreOptions: false
    }); // 关闭弹出层
  },

  // 选择相册事件
  chooseAlbum() {
    wx.showToast({
      title: '打开相册',
      icon: 'none'
    });
    this.setData({
      showMoreOptions: false
    }); // 关闭弹出层
  }
});