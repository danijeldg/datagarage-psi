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
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import BottomNavigation from "../components/BottomNavigation.vue";

const router = useRouter();
const route = useRoute();
const activeNav = ref("home");

// Update active nav based on route
watch(
  () => route.name,
  (newRouteName) => {
    if (newRouteName) {
      activeNav.value = newRouteName as string;
    }
  },
  { immediate: true }
);

const handleNavigate = (id: string) => {
  activeNav.value = id;
  
  // Navigate based on id
  if (id === "dna") {
    router.push({ name: "dna" });
  } else if (id === "home" || id === "scan") {
    router.push({ name: "home" });
  } else if (id === "explore") {
    console.log("Explore navigation - to be implemented");
  }
};
</script>
