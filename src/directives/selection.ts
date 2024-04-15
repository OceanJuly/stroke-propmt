import '@/assets/css/bubble-tip.less'

let bubbleDiv: HTMLDivElement | null = null
const bubbleOffset = 45 // 提示气泡框的高度
let text = ''
let bodyClickListenerAdded = false // 标记是否已添加 body 的点击事件监听器

function createBubbleDiv() {
    const bubbleDiv: HTMLDivElement = document.createElement('div')
    bubbleDiv.classList.add('bubble')
    bubbleDiv.style.top = '-999px'
    bubbleDiv.style.left = '-999px'
    bubbleDiv.innerText = '复制'
    bubbleDiv.addEventListener('click', bubbleDivClick)
    return bubbleDiv
}

function bubbleDivClick() {
    console.log(text);
}

function checkClickArea(target, selectionDom) {
    if (bubbleDiv.contains(target)) {
        console.log(text);
    }
    if (selectionDom.contains(target)) return
    hideBubble()
}

function hideBubble() {
    if (!bubbleDiv) return
    bubbleDiv.style.top = '-999px'
    bubbleDiv.style.left = '-999px'
    text = ''
}

function handleMouseUp() {
    const sel: Selection | null = window.getSelection()
    if (!sel) return
    const range = sel.getRangeAt(0)
    // 选中文本
    text = range.toString()
    // 提示气泡框
    if (!text) hideBubble()
    else {
        const span = document.createElement('span')
        range.insertNode(span)
        // 计算绝对定位
        const { top, left} = span.getBoundingClientRect()
        bubbleDiv.style.top = top - bubbleOffset < 0 ? '0' : top - bubbleOffset + 'px'
        bubbleDiv.style.left = left < 0 ? '0' : left + 'px'
        span.remove()
    }
}

export default function directiveSelection(app: any) {
    app.directive('selection', {
        mounted(el: any) {
            if (!bubbleDiv) bubbleDiv = createBubbleDiv()
            el.appendChild(bubbleDiv)
            el.addEventListener('mouseup', handleMouseUp)
            if (!bodyClickListenerAdded) {
                document.addEventListener('mousedown', (e) => checkClickArea(e.target, el))
                bodyClickListenerAdded = true
            }
        },
        beforeUnmount(el: any) {
            bubbleDiv?.remove()
            el.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('mouseup', checkClickArea)
            bodyClickListenerAdded = false
        }
    })
}