<template>
    <div class="u-grid2Cols">
        <div class="u-columns12">
            <BaseBreadCrumb :items="items" />
        </div>
    </div> 
    
    <div class="u-grid2Cols">
        <div class="u-columns12">
            <div class="page-header">
                <BaseCard>
                    <div class="page-header">
                        <div class="page-header__text">
                            <h1 class="page-header__title">Invernadero Norte A</h1>
                            <p class="page-header__subtitle">Principal invernadero con cultivos de tomate y pimiento</p>
                            <p class="page-header__subtitle">Lat: 36,821650, Lon: -2.459700</p>
                        </div>
                    </div>
                </BaseCard>
            </div> 
        </div>
    </div> 
    
    <div class="u-grid2Cols">
        <div class="u-columns12">
            <BaseTabs
            v-model="activeTab"
            :tabs="tabs"
            />
        </div>
    </div>
    
    <div class="u-grid2Cols">
        <div class="u-columns12">
            <BaseCard>
                <div v-if="activeTab === 'cultivo'">

                    <div class="page-header">
                        <div class="page-header__text">
                            <h2 class="page-header__title">Cultivos Activos</h2>
                            <p class="page-header__subtitle">Gestione los cultivos del invernadero</p>
                        </div>
                        
                        <Button class="btn-primary-icon-ag" label="+ Nuevo cultivo" @click="handleNewInvernadero">
                            <template #icon>
                                <SvgIcon name="añadir" :size="24" />
                            </template>
                        </Button>
                    </div>
                    
                    
                    <div class="u-grid2Cols">
                        <div class="u-columns3">
                            <CountCard 
                            title="Total Cultivos" 
                            :value="2" 
                            icon="cultivo"
                            />
                        </div>
                        <div class="u-columns3">
                            <CountCard 
                            title="Superficie Total" 
                            :value="2300" 
                            icon="superficie"
                            />
                        </div>
                        <div class="u-columns3">
                            <CountCard 
                            title="Producción Total" 
                            :value="'6400' + ' kg'" 
                            icon="predicciones"
                            />
                        </div>
                        <div class="u-columns3">
                            <CountCard 
                            title="Ingresos Totales" 
                            :value="'17.620' + ' €'" 
                            icon="euros"
                            />
                        </div>
                    </div>

                    <div class="u-grid2Cols">
                        <div class="u-columns12">
                            <CultivoTable :cultivos="cultivos" />
                        </div>
                    </div>
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
            </BaseCard>
        </div>
    </div>
    
    

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import BaseBreadCrumb from '@/components/navigation/BaseBreadCrumb.vue'
import BaseCard from '@/components/layout/BaseCard.vue';
import BaseTabs from '@/components/navigation/BaseTabs.vue';
import CountCard from '@/components/invernadero/detail/CountCard.vue';
import CultivoTable from '@/components/invernadero/detail/CultivoTable.vue';
import Card from 'primevue/card';

const items = ref([
    { label: 'Invernaderos', route: '/invernaderos' },
    { label: 'Invernadero Norte A' }
]);

const viewMode = ref('cards')

const options = [
  { label: '', value: 'cards', icon: 'cuadricula' },
  { label: '', value: 'table', icon: 'lista' },
  { label: '', value: 'map', icon: 'mapa' }
]

const activeTab = ref('cultivo')

const tabs = [
  { label: 'Cultivos',  value: 'cultivo', icon: 'cultivo' },
  { label: 'Métricas', value: 'metrics',    icon: 'metricas2' },
  { label: 'Predicciones',  value: 'predictions', icon: 'predicciones' },
  { label: 'Simulaciones',  value: 'simulations', icon: 'simulaciones' },
]


// Datos de prueba
const cultivos = ref([
    {
        id: '1',
        name: 'Tomate',
        descripcion: 'Variedad de tomate',
        surface: '800',
        production: 2400,
        price: '3.50',
        water: '12.500',
        date: '15/09/2025',
    },
    {
        id: '2',
        name: 'Pimiento',
        descripcion: 'Pimiento rojo',
        surface: '900',
        production: 1800,
        price: '2.50',
        water: '14.500',
        date: '20/08/2025',
    }

  
])


</script>

<style scoped lang="scss">
@use '~/assets/scss/settings/variables' as *;
</style>
