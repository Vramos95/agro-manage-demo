<template>
  <div class="u-flex u-flexColumn u-gap2 u-marginBottom4">

    <label
      v-if="label"
      :for="id"
      class="form-label-ag"
    >
      {{ label }}
    </label>

    <Select
      checkmark 
      :id="id"
      v-model="modelValueLocal"
      :options="options"
      :optionLabel="optionLabel"
      :optionValue="optionValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="['field-ag', 'select-ag', 'u-widthFull', inputClass, errorClass]"
      :aria-describedby="`${id}-help`"
    />

    <Message
      v-if="error"
      class="form-error-ag"
      size="small"
      severity="danger"
      variant="simple"
      :id="id ? `${id}-help` : undefined"
    >
      {{ error }}
    </Message>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Select from 'primevue/select'
import Message from 'primevue/message'

const props = defineProps({
  modelValue: {
    type: [String, Number, Object, Array, Boolean, null],
    default: null,
  },
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  helperText: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
  optionLabel: {
    type: String,
    default: 'label',
  },
  optionValue: {
    type: String,
    default: 'value',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  inputClass: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const errorClass = computed({
  get: () => (props.error ? 'error-field-ag' : ''),
})

const modelValueLocal = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>
