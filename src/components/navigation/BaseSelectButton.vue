<template>
  <SelectButton
    v-model="currentValue"
    :options="options"
    :optionLabel="optionLabel"
    :optionValue="optionValue"
    :allowEmpty="false"
    :class="['select-button-ag', inputClass]"
    >
    <template #option="slotProps">
        <SvgIcon v-if="slotProps.option.icon" :name="slotProps.option.icon" :size="16"/>
        {{ slotProps.option.label }}
    </template>
    </SelectButton>
</template>

<script setup>
import SelectButton from 'primevue/selectbutton'
import SvgIcon from '@/components/icon/SvgIcon.vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '0',
  },
  options: {
    type: Array,
    default: () => []
  },
  optionLabel: {
    type: String,
    default: 'label',
  },
  optionValue: {
    type: String,
    default: 'value',
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
