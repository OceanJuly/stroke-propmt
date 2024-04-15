# 基于 Vue 3 + TypeScript + Vite 的划词提示

![Alt](https://github.com/OceanJuly/stroke-propmt/blob/master/public/effect-pic.png)

### 两种实现方式
- 基于组件实现
- 基于自定义指令实现

### 关键实现
> 如何把显示到光标选中的文本位置

主要是通过`window.getSelection API`和`Range API`实现：
```ts
const sel: Selection | null = window.getSelection()
if (!sel) return
const range = sel.getRangeAt(0)
// 获取文本
const text = range.toString()

const span = document.createElement('span')
// 插入空 span 到选中文本最后然后计算绝对定位来获取位置
range.insertNode(span)
// 计算绝对定位
const pos = span.getBoundingClientRect()
```
当然，还有气泡框边界条件下的兼容和选中多行文本气泡提示框的位置调整等。

> 鼠标点击空白处会导致选中文本取消，如何监听到这一动作？（dom外点击监听）

原理就是监听document的点击，然后通过dom.contains方法判断点击事件是否是dom元素外面
代码我用两种方式实现：[v-click-out-side自定义指令](https://github.com/OceanJuly/stroke-propmt/blob/master/src/directives/click-out-side.ts)和手写判断实现

> 如何实现气泡框左下角的小三角？

可以通过`css`实现：
```css
.bubble::before {
    content: '';
    position: absolute;
    top: 33px;
    left: -13px;
    /* 实现三角形的关键 */
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 25px solid #448844;
    border-left: 25px solid transparent;
    /* 调整角度 */
    transform: rotate(-31deg);
}
```
想要什么三角形直接调就行