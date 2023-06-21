<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <v-app>
    <NavBar></NavBar>

    <v-main>
      <v-content>
        <router-view></router-view>
      </v-content>
      
    </v-main>
  </v-app>
</template>