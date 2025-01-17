---
title: Popover
---

# Popover 气泡卡片

> 点击元素，弹出气泡式的确认框。

### Click 触发

```
<g-popover>
  <g-button>Top</g-button>
  <template slot="content">
    这是 popover 弹出的内容
  </template>
</g-popover>
<g-popover position="bottom">
  <g-button>Bottom</g-button>
  <template slot="content">
    这是 popover 弹出的内容
  </template>
</g-popover>
<g-popover position="left">
  <g-button>Left</g-button>
  <template slot="content">
    这是 popover 弹出的内容
  </template>
</g-popover>
<g-popover position="right">
  <g-button>Right</g-button>
  <template slot="content">
    这是 popover 弹出的内容
  </template>
</g-popover>
```

### Hover 触发

```
<g-popover trigger="hover">
  <g-button>Top</g-button>
  <template slot="content">
    这是 popover 弹出的内容
  </template>
</g-popover>
<g-popover position="bottom" trigger="hover">
  <g-button>Bottom</g-button>
  <template slot="content">
    这是 popover 弹出的内容
  </template>
</g-popover>
<g-popover position="left" trigger="hover">
  <g-button>Left</g-button>
  <template slot="content">
    这是 popover 弹出的内容
  </template>
</g-popover>
<g-popover position="right" trigger="hover">
  <g-button>Right</g-button>
  <template slot="content">
    这是 popover 弹出的内容
  </template>
</g-popover>
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- | 
| position | Popover 定位 | String | top / bottom / left / right | top | 
| trigger | 触发 Popover 事件 | String | click / hover | click | 
