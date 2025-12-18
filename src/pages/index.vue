<template>
  <div>
    <h1>{{ $t('welcome') }}</h1>
    
    <div class="mt-4">
      <Button label="Mostrar notificación" @click="showNotification" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { showSuccess } = useNotification()

const showNotification = () => {
  showSuccess('¡Bienvenido a AgroManage!')
}
</script>
