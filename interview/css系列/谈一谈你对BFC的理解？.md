## 参考

[MDN-块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

> BFC（块格式化上下文）是 W3C CSS2.1 规范中的一个概念。它是页面中的一块独立的渲染区域，并且拥有一套渲染规则，它决定了其子元素将如何定位，以及与其他元素的相互关系和作用。具有 BFC 特性的元素可以看作是一个隔离了的独立容器，容器里面的子元素不会影响到外面元素。

## 触发 BFC 的条件

- 根元素
- display 值为 `flow-root` 的元素
- 浮动元素（`float 值不为 none`）
- 绝对定位元素（`position 值为 absolute 或 fixed`）
- overflow 值 `不为 visiable、clip` 的块元素
- 弹性元素（display 值为 flex 或 inline-flex 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
- ...

## 利用 BFC 能解决的问题

- 解决 margin 重叠问题
- 解决元素高度塌陷问题
- 阻止元素被浮动元素覆盖

## 解决 margin 重叠问题

![图 1](../assets/%E8%B0%88%E4%B8%80%E8%B0%88%E4%BD%A0%E5%AF%B9BFC%E7%9A%84%E7%90%86%E8%A7%A3%EF%BC%9F_pic_1661482221112.png)

![图 2](../assets/%E8%B0%88%E4%B8%80%E8%B0%88%E4%BD%A0%E5%AF%B9BFC%E7%9A%84%E7%90%86%E8%A7%A3%EF%BC%9F_pic_1661482615043.png)

## 解决元素高度塌陷问题

![图 3](../assets/%E8%B0%88%E4%B8%80%E8%B0%88%E4%BD%A0%E5%AF%B9BFC%E7%9A%84%E7%90%86%E8%A7%A3%EF%BC%9F_pic_1661482921610.png)

![图 4](../assets/%E8%B0%88%E4%B8%80%E8%B0%88%E4%BD%A0%E5%AF%B9BFC%E7%9A%84%E7%90%86%E8%A7%A3%EF%BC%9F_pic_1661483096712.png)

## 阻止元素被浮动元素覆盖

![图 5](../assets/%E8%B0%88%E4%B8%80%E8%B0%88%E4%BD%A0%E5%AF%B9BFC%E7%9A%84%E7%90%86%E8%A7%A3%EF%BC%9F_pic_1661483326707.png)

![图 6](../assets/%E8%B0%88%E4%B8%80%E8%B0%88%E4%BD%A0%E5%AF%B9BFC%E7%9A%84%E7%90%86%E8%A7%A3%EF%BC%9F_pic_1661484604615.png)
