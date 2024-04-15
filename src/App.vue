<script setup lang="ts">
import StrokePrompt from '@/components/stroke-prompt'

const text = '床前明月光，\n疑是地上霜。\n举头望明月，\n低头思故乡。'
</script>

<template>
  <div class="text-wrap">
    <h4 class="title">自定义指令1</h4>
    <div v-selection>
      床前明月光，<br>
      疑是地上霜。<br>
      举头望明月，<br>
      低头思故乡。
    </div>
  </div>
  <div class="text-wrap">
    <h4 class="title">自定义指令2</h4>
    <div v-selection>
      我能从哪里获取？<br>
      如今互联网提供各种各样版本的Lorem Ipsum段落，但是大多数都多多少少出于刻意幽默或者其他随<br>
      机插入的荒谬单词而被篡改过了。如果你想取用一段Lorem Ipsum，请确保段落中不含有令人尴尬的<br>
      不 恰当内容。所有网上的Lorem Ipsum生成器都倾向于在必要时重复预先准备的部分，然而这个生<br>
      成器则 是互联网上首个确切的生成器。它使用由超过200个拉丁单词所构造的词典，结合了几个模范<br>
      句子结构，来生成看起来恰当的Lorem Ipsum。因此，生成出的结果无一例外免于重复，刻意的幽默<br>
      ，以及非典型的词汇等等。
    </div>
  </div>
  <div>
    <h4>组件化</h4>
    <StrokePrompt :text="text"></StrokePrompt>
  </div>
</template>

<style scoped>
.text-wrap {
  margin: 24px;
}
</style>
