<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl font-bold text-center">The Map</h1>
    <p>Press the button to start moving</p>
    <button @click="move" class="btn">Let's Move</button>

    <div id="map" className="map w-[800px] max-w-full aspect-square"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import L from 'leaflet'
let latitud = ref(0)
let longitud = ref(0)
const map = ref(null)
const mapContainer = ref(null)
const marker = ref(null)

const move = () => {
  setInterval(() => {
    latitud.value += 0.0001
    longitud.value += 0.0001
  }, 200)
}

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      latitud.value = position.coords.latitude
      longitud.value = position.coords.longitude
    })
  } else {
    alert('Geolocation is not supported by this browser.')
  }
}

watch([latitud, longitud], () => {
  map.value.setView([latitud.value, longitud.value], 15)
  if (marker.value) {
    marker.value.setLatLng([latitud.value, longitud.value])
  } else {
    marker.value = L.marker([latitud.value, longitud.value]).addTo(map.value)
  }
})

onMounted(() => {
  getLocation()
  map.value = L.map('map').setView([latitud.value, longitud.value], 4)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map.value)
})
</script>

<style scoped></style>
