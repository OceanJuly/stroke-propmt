<script setup lang="ts">
const props = defineProps({
  top: String,
  left: String,
  btnTxt: String
})
const emit = defineEmits(['btnClick'])

function handleMouseDown() {
  emit('btnMouseDown')
}
</script>

<template>
  <div
      :class="$style.bubble"
      :style="{top: props.top, left: props.left}"
      @mousedown="handleMouseDown"
  >{{ btnTxt }}</div>
</template>

<style module>
.bubble {
  width: 64px;
  height: 30px;
  background-color: #448844;
  border-radius: 8px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
}
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
</style>