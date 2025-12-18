<template>
  <div class="u-flex u-flexColumn u-gap2 u-marginBottom4">

    <label
      v-if="label"
      :for="id"
      class="form-label-ag"
    >
      {{ label }}
    </label>

    <template v-if="icon">

      <IconField>
          
        <InputIcon class="input-text-icon-ag">
          <SvgIcon :name="icon" :size="16"/>
        </InputIcon>
        <Password v-if="type == 'password'"
          :id="id"
          v-model="modelValueLocal"
          :placeholder="placeholder"
          class="u-widthFull"
          :inputClass="['field-ag-icon', 'input-text-ag', 'u-widthFull', inputClass, errorClass]"
          :aria-describedby="id ? `${id}-help` : undefined"
          toggleMask
          :feedback="false"
        />

         <InputText v-else
          :id="id"
          v-model="modelValueLocal"
          :placeholder="placeholder"
          :class="['field-ag-icon', 'input-text-ag', 'u-widthFull', inputClass, errorClass]"
          :aria-describedby="id ? `${id}-help` : undefined"
        />
      </IconField>

    </template>

    <template v-else>

      <Password v-if="type == 'password'"
          :id="id"
          v-model="modelValueLocal"
          :placeholder="placeholder"
          class="u-widthFull"
          :inputClass="['field-ag', 'input-text-ag', 'u-widthFull', inputClass, errorClass]"
          :aria-describedby="id ? `${id}-help` : undefined"
          toggleMask
          :feedback="false"
        />
      <InputText v-else
        :id="id"
        v-model="modelValueLocal"
        :placeholder="placeholder"
        :class="['field-ag', 'input-text-ag', 'u-widthFull',  inputClass, errorClass]"
        :aria-describedby="id ? `${id}-help` : undefined"
      />

    </template>
    
    

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
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import SvgIcon from '../icon/SvgIcon.vue'
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Password from 'primevue/password'

const props = defineProps({
  modelValue: [String, Number],
  label: String,
  placeholder: String,
  id: String,
  error: String,
  inputClass: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
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