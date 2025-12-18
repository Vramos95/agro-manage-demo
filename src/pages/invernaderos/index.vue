<template>

  <div class="u-grid2Cols">
      <div class="u-columns12">
          <div class="page-header">
              <div class="page-header__text">
                  <h1 class="page-header__title">Mis invernaderos</h1>
                  <p class="page-header__subtitle">Gestiona tus instalaciones</p>
              </div>

              <Button class="btn-primary-icon-ag" label="Nuevo invernadero" @click="handleNewInvernadero">
                  <template #icon>
                      <SvgIcon name="añadir" :size="24" />
                  </template>
              </Button>
          </div> 
      </div>
  </div> 

  <div class="u-grid2Cols">
      <div class="u-columns11">
          <div class="search-bar">
            <BaseInputText 
              v-model="searchQuery"
              placeholder="Busca por título, palabras..."
              icon="buscar"
            />

          </div>
      </div>

      <div class="u-columns1">
          <div class="">
            <BaseSelectButton
              v-model="currentView"
              :options="viewOptions"
              optionLabel="label"
              optionValue="value"
            /> 
          </div>
      </div>
  </div>

  <div class="u-grid2Cols">
    <div class="u-columns12">
      <div v-if="currentView === 'grid'" class="invernaderos-grid">
        <InvernaderoCard 
          v-for="invernadero in filteredInvernaderos" 
          :key="invernadero.id"
          :invernadero="invernadero"
          @ver="handleVer"
          @editar="handleEditar"
          @eliminar="handleEliminar"
        />
      </div>

      <InvernaderoTable
        v-else-if="currentView === 'list'"
        :invernaderos="filteredInvernaderos"
        @ver="handleVer"
        @editar="handleEditar"
        @eliminar="handleEliminar"
      />

      <InvernaderoMap
        v-else-if="currentView === 'map'"
        :invernaderos="filteredInvernaderos"
        :mapbox-token="MAPBOX_TOKEN"
      />
    </div>
  </div>
  
    


  <!-- <div class="page-invernaderos">
    
    <div class="page-content">
      <div class="page-header">
        <div class="page-header__text">
          <h1 class="page-header__title">Mis invernaderos</h1>
          <p class="page-header__subtitle">Gestiona tus instalaciones</p>
        </div>
        
        <Button class="btn-primary-icon-ag" label="Nuevo invernadero" @click="handleNewInvernadero">
          <template #icon>
            <SvgIcon name="añadir" :size="24" />
          </template>
        </Button>
      </div>

      <div class="search-section">
        <BaseInputText 
          v-model="searchQuery"
          placeholder="Busca por título, palabras..."
          icon="buscar"
        />

        
      </div>
      
      <div v-if="currentView === 'grid'" class="invernaderos-grid">
        <InvernaderoCard 
          v-for="invernadero in filteredInvernaderos" 
          :key="invernadero.id"
          :invernadero="invernadero"
          @ver="handleVer"
          @editar="handleEditar"
          @eliminar="handleEliminar"
        />
      </div>

      <InvernaderoTable
        v-else-if="currentView === 'list'"
        :invernaderos="filteredInvernaderos"
        @ver="handleVer"
        @editar="handleEditar"
        @eliminar="handleEliminar"
      />

      <InvernaderoMap
        v-else-if="currentView === 'map'"
        :invernaderos="filteredInvernaderos"
        :mapbox-token="MAPBOX_TOKEN"
      />
    </div>
  </div> -->
</template>

<script setup lang="ts">
import SvgIcon from '~/components/icon/SvgIcon.vue'
import TopBar from '~/components/layout/TopBar.vue'
import InvernaderoCard from '~/components/invernadero/InvernaderoCard.vue'
import InvernaderoTable from '~/components/invernadero/InvernaderoTable.vue'
import BaseInputText from '~/components/forms/BaseInputText.vue'
import InvernaderoMap from '~/components/invernadero/InvernaderoMap.vue'
import BaseCard from '~/components/layout/BaseCard.vue'
import BaseSelectButton from '~/components/navigation/BaseSelectButton.vue'

// import CustomTabMenu from '~/components/navigation/CustomTabMenu.vue'


type ViewType = 'grid' | 'list' | 'map'

const searchQuery = ref('')


const currentView = ref('grid')

const viewOptions = [
  { label: '', value: 'grid', icon: 'cuadricula' },
  { label: '', value: 'list', icon: 'lista' },
  { label: '', value: 'map', icon: 'mapa' }
]


// Datos de prueba
const invernaderos = ref([
  {
    id: '1',
    nombre: 'Invernadero Plaza Mayor',
    descripcion: 'Cerca de la Plaza Mayor de Salamanca',
    coordenadas: '40.965157, -5.663956',
    numCultivos: 2,
    produccionTotal: '700 kg'
  },
  {
    id: '2',
    nombre: 'Invernadero Puente Romano',
    descripcion: 'Zona del Puente Romano',
    coordenadas: '40.963222, -5.669789',
    numCultivos: 2,
    produccionTotal: '550 kg'
  },
  {
    id: '3',
    nombre: 'Invernadero Campus Unamuno',
    descripcion: 'Cerca del campus universitario',
    coordenadas: '40.970800, -5.676111',
    numCultivos: 1,
    produccionTotal: '550 kg'
  }
])

// Computed para filtrar invernaderos
const filteredInvernaderos = computed(() => {
  if (!searchQuery.value.trim()) {
    return invernaderos.value
  }
  
  const query = searchQuery.value.toLowerCase()
  return invernaderos.value.filter(inv => 
    inv.nombre.toLowerCase().includes(query) ||
    inv.descripcion.toLowerCase().includes(query)
  )
})

const handleNewInvernadero = () => {
  console.log('Crear nuevo invernadero')
}

const handleVer = async (id: string) => {
   await navigateTo(`/invernaderos/${id}/cultivos`)
}

const handleEditar = (id: string) => {
  console.log('Editar invernadero:', id)
}

const handleEliminar = (id: string) => {
  console.log('Eliminar invernadero:', id)
}

const config = useRuntimeConfig()
const MAPBOX_TOKEN = config.public.mapboxToken

</script>

<style scoped lang="scss">
@use '~/assets/scss/settings/variables' as *;

.search-bar{
  width: 94%;
}


.invernaderos-grid {
  --gap: 64px;

  display: grid;
  gap: var(--gap);

  /* Mínimo razonable para que la card no se rompa (ajústalo) */
  --min-card: 320px;

  /* Cada columna como mucho ocupa (100% - 2 gaps) / 3  */
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--min-card), calc((100% - (2 * var(--gap))) / 3))
  );

  /* si sobra espacio (pantallas muy grandes), que no estire raro */
  justify-content: center; /* o start si prefieres pegadas a la izquierda */
}


.search-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem; // 24px
  margin-bottom: 2rem; // 32px

  :deep(.u-flex) {
    flex: 1;
    margin-bottom: 0;
    width: auto;
  }

  :deep(.p-icon-field) {
    width: 100%;
  }

  :deep(.input-text-ag) {
    width: 100%;
    height: 2.5rem; // 40px
    border-radius: 2.5rem; // 40px
    padding-left: 3.5rem; // 56px
  }

  :deep(.input-text-icon-ag) {
    left: 1.25rem; // 20px
    color: $gris-40;
  }
}
</style>
