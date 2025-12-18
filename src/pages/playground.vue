<template>
  <section class="playground">
    <h1>Playground de Componentes - Botones PrimeVue</h1>
    
    <h2>Botón Primary</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <Button label="Botón" class="btn-primary-ag" @click="onClick" />
      <Button label="Botón" class="btn-primary-ag" disabled />
    </div>

     <h2>Botón Secondary (Outlined)</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <Button label="Botón" class="btn-secondary-ag" />
      <Button label="Botón" class="btn-secondary-ag" disabled />
    </div>

    <h2>Botón Secondary con Icono</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
    <Button label="Botón" class="btn-secondary-icon-ag" style="align-self: flex-start;" @click="onClick">
      <template #icon>
        <SvgIcon 
          name="ver" 
          :size="16"
        />
      </template>
    </Button>
    
    <Button label="Botón" class="btn-secondary-icon-ag" style="align-self: flex-start;" @click="onClick" disabled>
      <template #icon>
        <SvgIcon 
          name="ver" 
          :size="16"
        />
      </template>
    </Button>
    </div>

    <h2>Botón Danger</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
    <Button label="Danger" class="btn-danger-ag" @click="onClick" />
    <Button label="Danger" class="btn-danger-ag" disabled />
    </div>

    <h2>Botón Primary con Icono</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
    <Button label="Botón" class="btn-primary-icon-ag" @click="onClick">
      <template #icon>
        <SvgIcon 
          name="ver" 
          :size="16"
        />
      </template>
    </Button>
    
    <Button label="Botón" class="btn-primary-icon-ag" @click="onClick" disabled>
      <template #icon>
        <SvgIcon 
          name="ver" 
          :size="16"
        />
      </template>
    </Button> 
    </div>

    <h2>Botón Solo Icono</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
    <Button class="btn-icon-only-ag"  @click="onClick">
      <template #icon>
        <SvgIcon 
          name="ver" 
          :size="16"
        />
      </template>
    </Button>
    
    <Button class="btn-icon-only-ag"  @click="onClick" disabled>
      <template #icon>
        <SvgIcon 
          name="ver" 
          :size="16"
        />
      </template>
    </Button>
    </div>

    <h2>Botón Solo Texto</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
    <Button label="Botón" class="btn-text-ag" style="align-self: flex-start;" @click="onClick" />
    </div>

    <h2>Botón Análisis Cultivo</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <Button label="Análisis cultivo" class="btn-primary-icon-ag" @click="onClick">
        <template #icon>
          <SvgIcon 
            name="analisisCultivo" 
            :size="20"
          />
        </template>
      </Button>
    </div>

    <h2>Botón Historial</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <Button label="Historial" class="btn-historial-ag" @click="onClick">
        <template #icon>
          <SvgIcon 
            name="historial" 
            :size="22"
          />
        </template>
      </Button>
    </div>

    <h2>Botón Cerrar Sesión</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <Button label="Botón" class="btn-logout-ag" @click="onClick">
        <template #icon>
          <SvgIcon 
            name="salir" 
            :size="16"
          />
        </template>
      </Button>
      
      <Button label="Botón" class="btn-logout-ag" disabled>
        <template #icon>
          <SvgIcon 
            name="salir" 
            :size="16"
          />
        </template>
      </Button>
    </div>

    <h2>Botón Volver/Back</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <Button class="btn-back-ag" @click="onClick">
        <template #icon>
          <SvgIcon 
            name="flechaIzquierda" 
            :size="24"
          />
        </template>
      </Button>
      
      <Button class="btn-back-ag" @click="onClick" disabled>
        <template #icon>
          <SvgIcon 
            name="flechaIzquierda" 
            :size="24"
          />
        </template>
      </Button>
    </div>

    <h2>Botón Delete (Solo Icono)</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <Button class="btn-delete-ag" @click="onClick">
        <template #icon>
          <SvgIcon 
            name="borrar" 
            :size="20"
          />
        </template>
      </Button>
      
      <Button class="btn-delete-ag" @click="onClick" disabled>
        <template #icon>
          <SvgIcon 
            name="borrar" 
            :size="20"
          />
        </template>
      </Button>
    </div>

    <h2>Botón Ambiente (con Icono)</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <Button label="Ambiente" class="btn-ambiente-ag" @click="onClick">
        <template #icon>
          <SvgIcon 
            name="ambiente" 
            :size="16"
          />
        </template>
      </Button>
    </div>

    <h2>Botón Suelo (con Icono)</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <Button label="Suelo" class="btn-suelo-ag" @click="onClick">
        <template #icon>
          <SvgIcon 
            name="suelo" 
            :size="16"
          />
        </template>
      </Button>
    </div>

    <h2>Botón Planta (con Icono)</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <Button label="Planta" class="btn-planta-ag" @click="onClick">
        <template #icon>
          <SvgIcon 
            name="cultivo" 
            :size="16"
          />
        </template>
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import SvgIcon from '~/components/icon/SvgIcon.vue';
function onClick() {
  alert('¡Has hecho clic!')
}
</script>

