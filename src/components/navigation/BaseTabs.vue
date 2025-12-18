<template>
  <Tabs v-model:value="currentValue">
    <TabList :class="['tabs-ag', inputClass]">
      <Tab
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        :disabled="tab.disabled"
      >
        <span class="u-flex u-alignCenter tabs-ag-content">
          <SvgIcon v-if="tab.icon" :name="tab.icon" :size="20"/>
          <span>{{ tab.label }}</span>
        </span>
      </Tab>
    </TabList>
  </Tabs>
</template>

<script setup>
import { computed } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import SvgIcon from '../icon/SvgIcon.vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '0',
  },
  tabs: {
    type: Array,
    default: () => [],
  },
  inputClass: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'change'])

const currentValue = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
    emit('change', val)
  },
})
</script>
