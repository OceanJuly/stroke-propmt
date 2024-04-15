<script setup lang="ts">
import BubbleTip from "./components/bubble-tip.vue";
import {ref} from "vue";

const props = defineProps({
  text: String
})

const top = ref('-999px')
const left = ref('-999px')
const text = ref('')

function handleMouseUp() {
  const sel: Selection | null = window.getSelection()
  if (!sel) return
  const range = sel.getRangeAt(0)
  // 选中文本
  text.value = range.toString()
  // 提示气泡框
  if (!text.value) resetBubble()
  else {
    const span = document.createElement('span')
    range.insertNode(span)
    // 计算绝对定位
    const pos = span.getBoundingClientRect()
    top.value = pos.top - 45/* 提示气泡框的高度 */ + 'px'
    left.value = pos.left + 'px'
    span.remove()
  }
}

function resetBubble() {
  top.value = '-999px'
  left.value = '-999px'
}

function handleMouseDown() {
  console.log(text.value);
}

</script>

<template>
 <div class="container">
   <div class="text-wrap" @mouseup="handleMouseUp" v-click-out-side="resetBubble">
     {{ props.text }}
   </div>
   <BubbleTip :top="top" :left="left" btn-txt="复制" @btnMouseDown="handleMouseDown"></BubbleTip>
 </div>
</template>

<style>
.text-wrap {
  margin: 24px;
  width: 100%;
  line-height: 2;
  white-space: pre;
}
</style>