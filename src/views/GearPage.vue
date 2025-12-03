<template>
  <div class="gear-page relative w-full min-h-screen overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        src="../assets/backgrounds/lab-background.png"
        alt="Lab Background"
        class="w-full h-full object-cover"
      />
      <img
        src="../assets/characters/lab-character.png"
        alt="Lab Character"
        class="absolute top-0 left-0 w-full h-auto drop-shadow-2xl"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col h-full min-h-screen">
      <!-- Header -->
      <div class="flex items-center justify-between px-4 pt-4 pb-6">
        <button
          class="w-10 h-10 flex items-center justify-center text-white"
          @click="$router.push({ name: 'home' })"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <h1 class="text-title2 font-semibold text-white">Gear</h1>

        <PointsBadge :points="points" />
      </div>

      <div class="fixed bottom-0 left-0 right-0 custom-gradient-bg">
        <!-- Gear Configurator Section -->
        <GearConfiguratorSection />

        <!-- Level Progress Section -->
        <LevelProgressCard :level="level" :xp="xp" :progress="progress" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PointsBadge from "../components/PointsBadge.vue";
import GearConfiguratorSection from "../components/GearConfiguratorSection.vue";
import LevelProgressCard from "../components/LevelProgressCard.vue";
import { useDisableBodyScroll } from "../composables/useDisableBodyScroll";

interface Props {
  points?: number;
  level?: number;
  xp?: number;
  progress?: number;
}

withDefaults(defineProps<Props>(), {
  points: 344,
  level: 2,
  xp: 400,
  progress: 85,
});

useDisableBodyScroll();
</script>

<style scoped lang="css">
.custom-gradient-bg {
  background: linear-gradient(180deg, #0a0817 0%, #3a3756 100%);
}

.character-glow {
  background: radial-gradient(
    ellipse at center,
    rgba(79, 209, 197, 0.6) 0%,
    rgba(79, 209, 197, 0.3) 30%,
    rgba(79, 209, 197, 0.1) 60%,
    transparent 100%
  );
  filter: blur(30px);
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.8;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) scale(1.05);
  }
}

.trait-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.trait-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(79, 209, 197, 0.3);
  transform: translateY(-2px);
}
</style>
