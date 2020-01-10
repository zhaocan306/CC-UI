Page({
  data: {
    bgColor: "linear-gradient(90deg, #ff512f, #dd2476)",
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
    nav2 :[
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
      },
      {
        name: 'nav5',
        disabled: true
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