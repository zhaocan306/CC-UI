Component({
  properties: {
    // 导航栏 默认80rpx
    height: {
      type: Number,
      value: 80
    },
    // 导航栏左右间距 只对左右padding起作用，上下为0
    padding: {
      type: Number,
      value: 30
    },
    // 背景颜色 默认白色
    bgColor: {
      type: String,
      value: "#FFFFFF"
    },
    // 是否固定 默认不固定
    isFixed: {
      type: Boolean,
      value: false
    },
    // 距离顶部的距离 isFixed为true生效
    top: {
      type: Number,
      value: 0
    },
    // 导航栏数据
    list: {
      type: Array,
      value: []
    },
    // 当前选项卡 默认选择中第一个
    currentTab: {
      type: Number,
      value: 0,
      observer(val) {
        this.checkCor();
      }
    },
    // 导航栏下边框粗细 默认1rpx
    borderSize: {
      type: Number,
      value: 1
    },
    // 导航栏下边框颜色
    borderColor: {
      type: String,
      value: '#eaeef1'
    },
    // 字体大小 默认28rpx
    size: {
      type: Number,
      value: 28
    },
    // 选中后 是否加粗 默认加粗
    bold: {
      type: Boolean,
      value: true
    },
    // 未选中字体颜色
    color: {
      type: String,
      value: "#666"
    },
    // 选中后字体颜色
    selectedColor: {
      type: String,
      value: "#5CA3E1"
    },
    // 滑块宽度 默认68rpx
    sliderWidth: {
      type: Number,
      value: 68
    },
    // 滑块高度 默认6rpx
    sliderHeight: {
      type: Number,
      value: 6
    },
    // 滑块颜色
    sliderBgColor: {
      type: String,
      value: "#5CA3E1"
    },
    // 滑块bottom
    bottom: {
      type: String,
      value: "0"
    }
  },
  lifetimes: {
    ready() {
      setTimeout(() => {
        wx.getSystemInfo({
          success: (res) => {
            this.setData({
              winWidth: res.windowWidth
            }, () => {
              this.checkCor()
            })
          }
        });
      }, 20);
    }
  },
  data: {
    winWidth: 0,
    scrollLeft: 0
  },
  methods: {
    // 计算滑动距离
    checkCor() {
      let tabsNum = this.data.list.length // 当前list数组的长度
      let currentTab = this.data.currentTab; // 当前选中的块
      // 每个nav选项卡的宽度
      let tabsWidth = (this.data.winWidth - this.data.padding) / tabsNum;
      // 每个nav左移的距离
      let left = (tabsWidth - this.data.sliderWidth/2)/2; 
      let scrollLeft = this.data.padding / 2 + left + (tabsWidth * this.data.currentTab);
      this.setData({
        scrollLeft: scrollLeft
      })
    },
    // 点击选项卡
    swichTabs(e) {
      let index = Number(e.currentTarget.dataset.index)
      let item = this.data.list[index]
      if (item && item.disabled) return;
      if (this.data.currentTab == index) {
        return false;
      } else {
        this.triggerEvent("change", {
          index: Number(index)
        })
      }
    }
  }
})
