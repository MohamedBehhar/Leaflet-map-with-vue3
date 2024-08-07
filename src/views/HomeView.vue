<script setup lang="ts"></script>

<template>
  <main>
    <h1 class="text-3xl font-bold text-center">Home</h1>
    <p>
      A small project simulating a moving marker on a map using
      <span class="font-bold text-cyan-700"> Leaflet </span> .
    </p>
    <RouterLink to="/map" class="">
      <button class="btn">Go to the map</button>
    </RouterLink>
  </main>
</template>
