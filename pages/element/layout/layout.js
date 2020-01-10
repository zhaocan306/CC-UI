Page({
  data: {
    navList: [
      {
        name: 'flex布局'
      },
      {
        name: 'grid布局'
      },
      {
        name: '瀑布流布局'
      }
    ],
    currentTab: 0
  },
  change(e) {
    this.setData({
      currentTab: e.detail.index
    })
  },
  bindchangeSwiper(e) {
    this.setData({
      currentTab: e.detail.current
    })
  }
})