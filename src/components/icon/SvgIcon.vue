<script setup lang="ts">
import icons from '../../assets/icons';

type IconKeys = keyof typeof icons;

interface Props {
  name?: IconKeys;
  color?: string;
  size?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  name: undefined,
  color: 'currentColor',
  size: 24,
});

function colorMapper(color: string) {
  switch (color) {
    case 'primary':
      return '#f0fdf4'; // green-50
    case 'secondary':
      return '#f9fafb'; // grey-50
    case 'danger':
      return '#de1135'; // red (por definir)
    default:
      return color;
  }
}

const SvgIcon = computed(() => icons[props.name!] || null);
</script>

<template>
  <div
    v-if="SvgIcon"
    class="icon-wrapper"
    :style="{
      width: typeof props.size === 'number' ? `${props.size}px` : props.size,
      height: typeof props.size === 'number' ? `${props.size}px` : props.size,
      color: colorMapper(props.color),
    }">
    <component
      :is="SvgIcon"
      class="svg-icon" />
  </div>
  <span v-else>{{ props.name }}</span>
</template>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.svg-icon {
  width: 100%;
  height: 100%;
}
</style>
