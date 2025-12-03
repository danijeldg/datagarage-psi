<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'

const route = useRoute()

// Pages that should not use MainLayout (no header/footer)
const fullScreenPages = ['dna', 'gear']
const useLayout = computed(() => !fullScreenPages.includes(route.name as string))
</script>

<template>
  <MainLayout v-if="useLayout">
    <router-view />
  </MainLayout>
  <router-view v-else />
</template>
