<template>
  <div :class="['arched-background', variantClass]">
    <svg width="0" height="0" style="position: absolute">
      <defs>
        <clipPath id="arched-shape" clipPathUnits="objectBoundingBox">
          <path d="M 0,0 Q 0.5,0.15 1,0 L 1,0.85 Q 0.5,1.0 0,0.85 Z" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?: "light" | "dark";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "light",
});

const variantClass = computed(() => `arched-background--${props.variant}`);
</script>

<style scoped>
.arched-background {
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: url(#arched-shape);
}

.arched-background--light {
  background: linear-gradient(90deg, #1d1a32 -150%, #574f98 250%);
}

.arched-background--dark {
  background: linear-gradient(90deg, #0a0817 -150%, #3a3756 250%);
}
</style>
