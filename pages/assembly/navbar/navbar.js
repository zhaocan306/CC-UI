Page({
  data: {
    nav1: [
      {
        name: 'nav1'
      },
      {
        name: 'nav2'
      },
      {
        name: 'nav3'
      },
      {
        name: 'nav4'
      }
    ],
    currentTab: 0
  },
  change(e) {
    this.setData({
      currentTab: e.detail.index
    })
  }
})