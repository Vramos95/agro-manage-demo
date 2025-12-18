<template>
  <div ref="mapContainer" class="mapbox-map"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css' // CSS de Mapbox

interface Invernadero {
  id: string
  nombre: string
  coordenadas: string 
  color?: string
}

const props = defineProps<{
  invernaderos: Invernadero[]
  mapboxToken: string
}>()

const mapContainer = ref<HTMLElement | null>(null)
let map: mapboxgl.Map | null = null
let markers: mapboxgl.Marker[] = []

// Parsear string de coordenadas a [lng, lat]
function parseCoords(coordenadas: string): [number, number] | null {
  if (!coordenadas) return null
  const normalized = coordenadas.replace(';', ',').replace(/\s+/g, '')
  const parts = normalized.split(',')
  if (parts.length !== 2) return null

  const lat = Number(parts[0].replace(',', '.'))
  const lng = Number(parts[1].replace(',', '.'))

  if (!isFinite(lat) || !isFinite(lng)) return null
  return [lng, lat] // Mapbox usa [lng, lat]
}

// Añadir los marcadores de invernaderos al mapa
function addMarkers() {
  if (!map) return

  // Eliminar markers antiguos
  markers.forEach(m => m.remove())
  markers = []

  props.invernaderos.forEach(inv => {
    const coords = parseCoords(inv.coordenadas)
    if (!coords) return

    const el = document.createElement('div')
    el.className = 'mapbox-marker'
    el.style.background = inv.color || '#6CB33F' // verde por defecto

    const marker = new mapboxgl.Marker(el)
      .setLngLat(coords)
      .addTo(map)

    markers.push(marker)
  })
}

// Ajustar el viewport del mapa para mostrar todos los marcadores
function fitToMarkers() {
  if (!map || !props.invernaderos.length) return

  const bounds = new mapboxgl.LngLatBounds()
  let valid = false

  props.invernaderos.forEach(inv => {
    const coords = parseCoords(inv.coordenadas)
    if (!coords) return
    bounds.extend(coords)
    valid = true
  })

  if (!valid) return

  map.fitBounds(bounds, {
    padding: 80,
    maxZoom: 14,
    animate: false
  })
  map.setBearing(0)
  map.setPitch(0)
}

// Inicializar el mapa y añade marcadores al montar
onMounted(() => {
  if (!mapContainer.value) return

  mapboxgl.accessToken = props.mapboxToken

  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-5.663956, 40.965157], // Salamanca por defecto
    zoom: 12,
    bearing: 0,
    pitch: 0
  })

  map.on('load', () => {
    map.resize()        // importante si el contenedor cambia de tamaño
    addMarkers()
    fitToMarkers()
  })

  map.on('error', e => console.error('Mapbox error:', e))
})

// Actualiza marcadores y vista al cambiar los invernaderos
watch(
  () => props.invernaderos,
  () => {
    if (!map) return
    map.resize()
    addMarkers()
    fitToMarkers()
  },
  { deep: true }
)
</script>

<style lang="scss">
.mapbox-map {
  width: 100%;
  height: 500px;
  border-radius: 16px;
  overflow: hidden;
}

.mapbox-marker {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}
</style>
