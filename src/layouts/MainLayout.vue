<template>
  <div
    class="min-h-screen max-w-screen overflow-hidden flex flex-col bg-gradient-to-b from-dark to-dark-secondary"
  >
    <AppHeader />

    <main class="flex-1 pb-[120px] w-full max-w-[600px] mx-auto">
      <slot></slot>
    </main>

    <BottomNavigation :activeItem="activeNav" @navigate="handleNavigate" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppHeader from "../components/AppHeader.vue";
import BottomNavigation from "../components/BottomNavigation.vue";

const activeNav = ref("home");

const handleNavigate = (id: string) => {
  activeNav.value = id;
  console.log("Navigate to:", id);
};
</script>
