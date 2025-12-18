<template>
  <Breadcrumb :class="['breadcrumb-ag',inputClass]" :model="items">
        <template #item="{ item }">
            <NuxtLink v-if="item.route" :to="item.route" class="breadcrumb-ag-link">
            {{ item.label }}
            </NuxtLink>
            <NuxtLink v-else class="breadcrumb-ag-link active">
            {{ item.label }}
            </NuxtLink>
        </template>
        <template #separator> / </template>
    </Breadcrumb>
</template>

<script setup>
import Breadcrumb from 'primevue/breadcrumb';

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  inputClass: {
    type: String,
    default: '',
  },
})
</script>
