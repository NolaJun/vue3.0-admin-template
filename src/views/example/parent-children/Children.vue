<template>
  <div>{{ name }}</div>
  <el-button @click="emitFather">emitFather</el-button>
</template>

<script setup>
import { onMounted, getCurrentInstance, watch, ref, toRefs, reactive, computed } from 'vue'
let { proxy } = getCurrentInstance()
const props = defineProps({
  fatherName: {
    require: true,
    default: '',
    type: String
  }
})
let state = ref({
  name: 'Children'
})
//导出给refs使用
let childRef = ref('childRef')
let childMethod = () => {
  return 'childMethod'
}
//emit
// 定义emit事件
const emit = defineEmits(['emitParent'])
const emitFather = () => {
  emit('emitParent', { val: '子组件传递的信息' })
}
onMounted(() => {
  console.log('得到父元素的prop', props.fatherName)
})
defineExpose({ childRef, childMethod })
//导出属性到页面中使用
let { name } = toRefs(state)
</script>

<style scoped lang="scss"></style>
