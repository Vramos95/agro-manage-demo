<template>
  <Card
    class="ag-card"
    :class="{
      'ag-card--hoverable': hoverable,
      'ag-card--clickable': clickable,
      'ag-card--plain': plain
    }"
  >
    <template #title><slot name="title" /></template>
    <template #content>
        <slot />
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
const props = defineProps({
  hoverable: {
    type: Boolean,
    default: false
  },
  clickable: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  }
})
</script>
