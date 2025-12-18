<template>
  <article class="invernadero-card">
    <div class="invernadero-card__header">
      <div class="invernadero-card__icon">
        <SvgIcon name="invernadero" :size="24" />
      </div>

      <h3 class="invernadero-card__title">
        {{ invernadero.nombre }}
      </h3>
    </div>

    <p class="invernadero-card__description">
      {{ invernadero.descripcion }}
    </p>

    <div class="invernadero-card__info">
      <div class="invernadero-card__info-item">
        <SvgIcon name="lugar" :size="16" />
        <span>{{ invernadero.coordenadas }}</span>
      </div>

      <div class="invernadero-card__info-item">
        <SvgIcon name="cultivo" :size="16" />
        <span>Cultivos: 
          <span class="invernadero-card__colored">
            {{ invernadero.numCultivos }}
          </span>
        </span>
      </div>

      <div class="invernadero-card__info-item">
        <SvgIcon name="predicciones" :size="16" />
        <span>
          Producción total:
          <span class="invernadero-card__colored">
            {{ invernadero.produccionTotal }}
          </span>
        </span>
      </div>
    </div>

    <div class="invernadero-card__actions">
      <Button
        class="btn-primary-icon-ag "
        label="Ver"
        @click="handleVer"
      >
        <template #icon>
          <SvgIcon name="ver" :size="20" />
        </template>
      </Button>

      <div class="invernadero-card__action-icons">
        <Button class="btn-icon-only-ag" @click="handleEditar">
          <template #icon>
            <SvgIcon name="editar" :size="20" />
          </template>
        </Button>

        <Button class="btn-delete-ag" @click="handleEliminar">
          <template #icon>
            <SvgIcon name="borrar" :size="20" />
          </template>
        </Button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import SvgIcon from '~/components/icon/SvgIcon.vue'

interface Invernadero {
  id: string
  nombre: string
  descripcion: string
  coordenadas: string
  numCultivos: number
  produccionTotal: string
}

const props = defineProps<{
  invernadero: Invernadero
}>()

const emit = defineEmits<{
  ver: [id: string]
  editar: [id: string]
  eliminar: [id: string]
}>()

const handleVer = () => emit('ver', props.invernadero.id)
const handleEditar = () => emit('editar', props.invernadero.id)
const handleEliminar = () => emit('eliminar', props.invernadero.id)
</script>

<style scoped lang="scss">
@use '~/assets/scss/settings/variables' as *;
@use '~/assets/scss/settings/fonts' as *;

.invernadero-card {
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__icon {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: $verde-20;
    color: $verde-50;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    :deep(svg) {
      stroke: currentColor;
      fill: none;
    }
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    color: $gris-100;
    line-height: 24px;
  }

  &__description {
    font-weight: 400;
    font-size: $font-size-md;
    line-height: 21px;
    letter-spacing: 0px;
    color: $gris-70
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__info-item {
    display: flex;
    align-items: center;
    font-size: $font-size-md;
    gap: 0.5rem;
    color: $gris-70;

    :deep(svg) {
      color: $verde-50;
      stroke: currentColor;
      fill: none;
      flex-shrink: 0;
    }
  }

  &__colored {
    color: $verde-60;
    font-weight: 400;
  }

  &__actions {
    margin-top: auto;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__action-icons {
    display: flex;
    gap: 0.5rem;
  }
}

</style>
