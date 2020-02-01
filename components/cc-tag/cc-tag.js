Component({
  options: {
    multipleSlots:true,  //启用slot插槽
  },
  properties: {
    // 标签背景颜色 默认紫色
    bgColor: {
      type: String,
      value: '#a88adb'
    },
    // 标签字体颜色 默认白色
    color: {
      type: String,
      value: '#ffffff'
    },
    // 标签字体大小 默认24rpx
    size: {
      type: Number,
      value: 24
    },
    // 标签高度 默认 50rpx
    height: {
      type: Number,
      value: 50
    },
    // 标签上边距 默认0
    top: {
      type: Number,
      value: 0
    },
    // 标签右边距 默认0
    right: {
      type: Number,
      value: 0
    },
    // 标签下边距 默认0
    bottom: {
      type: Number,
      value: 0
    },
    // 标签左边距 默认0
    left: {
      type: Number,
      value: 0
    },
    // 标签圆弧度数 默认0rpx
    radius: {
      type: Number,
      value: 0
    },
    // 是否为镂空标签 默认为实心标签
    type: {
      type: String,
      value: 'solid'
    },
    // 为镂空标签时 边框的宽度 默认1rpx
    borderWidth: {
      type: Number,
      value: 1
    },
    // 为镂空标签时 边框的样式 默认solid
    borderStyle: {
      type: String,
      value: 'solid'
    },
    // 为镂空标签时 边框的颜色 默认黑色
    borderColor: {
      type: String,
      value: '#000'
    }
  },
  data: {

  },
  methods: {

  }
})
