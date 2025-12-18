<template>
  <header class="topbar">
    <div class="topbar__logo">
      <div class="topbar__logo-text">
        <h1 class="topbar__title">AgroManage</h1>
        <div class="topbar__subtitle-wrapper">
          <div class="topbar__subtitle-icon">
            <SvgIcon name="hoja" :size="16" />
          </div>
          <p class="topbar__subtitle">Sistema de Gestión Inteligente de Invernaderos</p>
        </div>
      </div>
    </div>

    <Button class="btn-logout-ag" label="Cerrar sesión" @click="handleLogout">
      <template #icon>
        <SvgIcon name="salir" :size="16" />
      </template>
    </Button>
  </header>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import SvgIcon from '~/components/icon/SvgIcon.vue'

const handleLogout = () => {
  // TODO: Implementar lógica de cierre de sesión
  console.log('Cerrando sesión...')
}
</script>


