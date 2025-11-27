<template>
  <div class="relative inline-flex items-center justify-center">
    <svg :width="size" :height="size" viewBox="0 0 100 100">
      <circle
        class="stroke-purple/20"
        cx="50"
        cy="50"
        :r="radius"
        fill="none"
        :stroke-width="strokeWidth"
      />
      <circle
        class="stroke-purple stroke-[round] transition-[stroke-dashoffset] duration-300 ease-in-out"
        style="transform: rotate(-90deg); transform-origin: 50% 50%;"
        cx="50"
        cy="50"
        :r="radius"
        fill="none"
        :stroke-width="strokeWidth"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
      />
    </svg>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  progress?: number
  size?: number
  strokeWidth?: number
}

const props = withDefaults(defineProps<Props>(), {
  progress: 0,
  size: 80,
  strokeWidth: 6
})

const radius = computed(() => (100 - props.strokeWidth) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const dashOffset = computed(() => {
  const progress = Math.min(100, Math.max(0, props.progress))
  return circumference.value - (progress / 100) * circumference.value
})
</script>
