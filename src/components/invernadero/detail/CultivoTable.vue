<template>  
    <DataTable :value="cultivos" class="ag-table">
    
        <Column field="name" header="Cultivo" :style="{ width: '40%' }" headerClass="col-left" bodyClass="col-left">
            <template #body="slotProps">
                
                <div class="ag-cell-title">{{ slotProps.data.name }}</div>
                <div class="ag-cell-subtitle">{{ slotProps.data.descripcion }}</div>
                
            </template>
        </Column>
        <Column field="surface" header="Superficie (m²)"  headerClass="col-center" bodyClass="col-center"></Column>
        <Column field="production" header="Producción(kg)"headerClass="col-center" bodyClass="col-center"></Column>
        <Column field="price" header="Precio/kg" headerClass="col-center" bodyClass="col-center"></Column>
        <Column field="water" header="Agua (L)" headerClass="col-center" bodyClass="col-center"></Column>
        <Column field="date" header="Fecha Cultivo" headerClass="col-center" bodyClass="col-center"></Column>
        <Column header="Acciones" headerClass="col-center" bodyClass="col-center">
            <template #body="slotProps">
                <div class="acciones-group">
                    <Button class="btn-icon-only-ag" @click="emit('ver', slotProps.data.id)">
                        <template #icon>
                            <SvgIcon name="ver" :size="20" />
                        </template>
                    </Button>

                    <Button class="btn-icon-only-ag" @click="emit('editar', slotProps.data.id)">
                        <template #icon>
                            <SvgIcon name="editar" :size="20" />
                        </template>
                    </Button>

                    <Button class="btn-delete-ag" @click="emit('eliminar', slotProps.data.id)">
                        <template #icon>
                            <SvgIcon name="borrar" :size="20" />
                        </template>
                    </Button>
                </div>
            </template>
        </Column>
    </DataTable>
</template>

<script setup lang="ts">

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import SvgIcon from '~/components/icon/SvgIcon.vue'

interface Cultivo {
    id: string
    name: string
    descripcion: string
    surface: string
    production: number
    price: string
    water: string
    date: string
}

interface Props {
  cultivos: Cultivo[]
}

defineProps<Props>()


const emit = defineEmits<{
  ver: [id: string]
  editar: [id: string]
  eliminar: [id: string]
}>()
</script>

<style scoped lang="scss">
@use '~/assets/scss/settings/variables' as *;
@use '~/assets/scss/settings/fonts' as *;


</style>
