---
title: 'Ellipsis 文本显示'
group:
  title: 数据展示
  path: /data-presentation
nav:
  title: 组件
  path: /components
---

# Ellipsis

文本超出父容器宽度显示省略号,否则不显示<br />
需要在父容器中设置`overflow: hidden`并且设置宽度<br />
文本内容 / 屏幕宽度改变时,会自动重新计算

## 基本使用

<code src="./demos/base.tsx"></code>

## 参数说明

| 参数 |    说明    |  类型  | 是否必填 | 默认值 |
| :--: | :--------: | :----: | :------: | :----: |
| text | 显示的文本 | string |    是    |   -    |
