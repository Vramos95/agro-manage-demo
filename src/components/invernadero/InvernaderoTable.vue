<template>  
    <DataTable :value="invernaderos" class="ag-table">
    
        <Column field="name" header="Invernadero" :style="{ width: '25%' }" headerClass="col-left" bodyClass="col-left">
            <template #body="slotProps">
                <div class="ag-cell-icon">
                  <div class="ag-cell-icon__icon">
                      <SvgIcon name="invernadero" :size="24" />
                  </div>
                  <span class="ag-cell-icon__text">{{ slotProps.data.nombre }}</span>
              </div>
            </template>
        </Column>

        <Column field="coordenadas" header="Ubicación" :style="{ width: '15%' }"  headerClass="col-left" bodyClass="col-left"></Column>

        <Column field="descripcion" header="Descripción"  headerClass="col-left" bodyClass="col-left"></Column>


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

interface Invernadero {
    id: string
    nombre: string
    descripcion: string
    coordenadas: string
    numCultivos: number
    produccionTotal: string
}

interface Props {
  invernaderos: Invernadero[]
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
