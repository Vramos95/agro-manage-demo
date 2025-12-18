<template>
  <section class="playground">
    <h1>Playground de Formularios</h1>

  
    <div class="u-grid2Cols">
      <div class="u-columns2">

        <h3>
          Input text primary 
        </h3>
        <div class="component-container">
          <BaseInputText
            id="form-input"
            placeholder="Placeholder"
            label="Form label"
            type="password"
          />
        </div>

        <h3>
          Input text primary - Error
        </h3>
        <div class="component-container">
          <BaseInputText
            id="form-input"
            placeholder="Placeholder"
            label="Form label"
            type="text"
            error="Error message"
          />
        </div>

        <h3>
          Buscador
        </h3>
         <div class="component-container">
          <BaseInputText
            id="form-input-icon"
            placeholder="Busca por título, palabras..."
            type="text"
            icon="buscar"
          />
         </div>
        
      </div>
      <div class="u-columns10">
        <h3>
          Base select
        </h3>
        <div class="component-container">
          <BaseSelect
            v-model="form.role"
            id="role"
            label="Form label"
            :options="roles"
            optionLabel="label"
            optionValue="value"
            placeholder="Seleccionar"
          />
        </div>

        <h3>
          Base select - Error
        </h3>
        <div class="component-container">
          <BaseSelect
            v-model="form.role"
            id="role"
            label="Form label"
            :options="roles"
            optionLabel="label"
            optionValue="value"
            placeholder="Seleccionar"
            error="Error message"
          />
        </div>

        <h3>
          Base tabs
        </h3>
        <div class="component-container">
          <BaseTabs
            v-model="activeTab"
            :tabs="tabs"
            class="u-marginBottom2"
          />

          <!-- Contenidos controlados por el padre -->
          <div v-if="activeTab === 'cultivo'">
            Contenido de cultivo
          </div>

          <div v-else-if="activeTab === 'metrics'">
            Contenido de Métricas
          </div>

          <div v-else-if="activeTab === 'predictions'">
            Contenido de Predicciones
          </div>

          <div v-else-if="activeTab === 'simulations'">
            Contenido de Simulaciones
          </div>
        </div>
      </div>
    </div>

    
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import BaseInputText from '@/components/forms/BaseInputText.vue'
import BaseSelect from '@/components/forms/BaseSelect.vue'
import BaseTabs from '@/components/navigation/BaseTabs.vue'

const activeTab = ref('cultivo')

const tabs = [
  { label: 'Cultivos',  value: 'cultivo', icon: 'cultivo' },
  { label: 'Métricas', value: 'metrics',    icon: 'metricas2' },
  { label: 'Predicciones',  value: 'predictions', icon: 'predicciones' },
  { label: 'Simulaciones',  value: 'simulations', icon: 'simulaciones' },
]

const form = reactive({
  role: null,
})

const errors = reactive({
  role: '',
})

const roles = [
  { label: 'Tomate', value: 'tomatoe' },
  { label: 'Berenjena', value: 'eggplant' },
  { label: 'Pimiento', value: 'pepper' },
]


</script>

<style scoped>
.component-container {
  padding: 20px;
  border: 1px dashed blue;
}
</style>
