Component({
  options:{
    // 启动插槽
    multipleSlots: true
  },
  properties: {
    // 头像框是否圆角 默认不是圆角
    isRadius: {
      type: Boolean,
      value: false
    },
    // 头像框圆角幅度 只有设置为圆角才生效 默认圆
    radius: {
      type: Number,
      value: 5000
    },
    // 头像显示的图片地址
    imageUrl: {
      type: String,
      value: ''
    },
    // 头像框大小
    size: {
      type: String,
      value: ''
    },
    // 上边距
    top: {
      type: Number,
      value: 0
    },
    // 右边距
    right: {
      type: Number,
      value: 0
    },
    // 下边距
    bottom: {
      type: Number,
      value: 0
    },
    // 左边距
    left: {
      type: Number,
      value: 0
    },
    // 头像背景颜色 默认#ccc
    bgColor: {
      type: String,
      value: '#ccc'
    },
    // 是否为头像组 默认不是
    isGroup: {
      type: Boolean,
      type: false
    }
  },
  data: {

  },
  methods: {

  }
})
