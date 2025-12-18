<template>
  <div class="login-page">
    <div class="login-image">
      <img src="~/assets/images/Invernadero.png" alt="Invernadero" />
    </div>

    <div class="login-form-container">
      <h1 class="login-title">AgroManage</h1>

      <form class="login-form" @submit.prevent="onLogin">
        <BaseInputText
          v-model="email"
          label="Email"
          placeholder="Introduce tu email"
          icon="email"
          type="email"
        />

        <BaseInputText
          v-model="password"
          label="Contraseña"
          placeholder="Introduce tu contraseña"
          icon="lock_line"
          type="password"
        />

        <div class="login-button-container">
          <Button
            label="Iniciar Sesión"
            class="btn-primary-ag"
            type="submit"
            @click="onLogin"
          />
          <NuxtLink to="#" class="login-forgot">
            ¿Olvidaste tu contraseña?
          </NuxtLink >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInputText from '~/components/forms/BaseInputText.vue'

definePageMeta({
  layout: 'blank'
})

const email = ref('')
const password = ref('')
let router
if (typeof useRouter === 'function') {
  router = useRouter()
} else {
  // fallback para Nuxt 3
  router = useNuxtApp().$router
}
const onLogin = async () => {
  if (email.value.trim() && password.value.trim()) {
     await navigateTo('/invernaderos')
  }
}

</script>

<style lang="scss" scoped>
@use '~/assets/scss/settings/variables' as *;
@use '~/assets/scss/settings/fonts' as *;

/* Layout principal */
.login-page {
  display: flex;
  max-height: 100vh;
}

.login-title {
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0px;
  text-align: center;
}

/* Imagen */
.login-image {
  flex: 1;
  position: relative;
  overflow: hidden;
  width: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* Contenedor formulario */
.login-form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  gap: 52px;
}

/* Título */
.login-title-gradient {
  font-family: $font-base;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(90deg, $verde-70 0%, $verde-40 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Formulario */
.login-form {
  min-width: 31.3125rem; // 501px
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Botón */
.login-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.btn-primary-ag {
  width: 22.3125rem; // 357px
}

/* Link */
.login-forgot {
  font-size: 0.95rem;
  color: $verde-50;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
}
</style>
