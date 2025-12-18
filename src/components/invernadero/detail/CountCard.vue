<template>
  <BaseCard>
    <div class="ag-count-card">

        <div class="ag-count-card__heading">
            <div v-if="icon" class="ag-count-card__icon">
                <SvgIcon :name="icon" :size="20" />
            </div>
            <h3>{{ title }}</h3>
        </div>
        
        <div class="ag-count-card__value">
        {{ value }}
        </div>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/layout/BaseCard.vue';
import SvgIcon from '@/components/icon/SvgIcon.vue';   
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  value: {
    type: Number || String,
    default: 0
  },
  icon: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="scss">
@use '~/assets/scss/settings/variables' as *;



.ag-count-card {
    display: flex;
    flex-direction: column;
    gap: 3px;

    &__heading {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__icon {
        display: flex;
        background-color: $verde-20;
        padding: 10px;
        border-radius: 20px; 
        align-items: center;
        justify-content: center;
    }

    &__value {
        color: $gris-100;
        font-size: 24px;
        font-weight: 400;
    }
}
</style>
