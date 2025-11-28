<template>
  <div
    class="relative z-20 flex gap-4 container py-8 backdrop-blur-sm action-buttons-blur"
  >
    <!-- DNA Lab Button -->
    <button
      class="glass-button text-headline relative flex items-center gap-3 rounded-xl px-4 py-3 flex-1 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-98 group overflow-visible"
      @click="$emit('dnaLabClick')"
    >
      <!-- NEW Badge -->
      <span
        v-if="showNewBadge"
        class="absolute -top-1.5 -left-1.5 new-badge-bg text-label"
      >
        NEW
      </span>

      <!-- Notification Badge -->
      <NotificationBadge
        v-if="notificationCount > 0"
        :count="notificationCount"
      />

      <!-- DNA Icon -->
      <Icon name="dna-3d" :size="24" />

      <!-- Label -->
      <span class="text-white text-callout font-medium"> DNA Lab </span>
    </button>

    <!-- Gear Button -->
    <button
      class="glass-button relative flex items-center gap-3 rounded-xl px-4 py-3 flex-1 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-98 overflow-visible"
      @click="$emit('gearClick')"
    >
      <!-- Gear Icon -->
      <Icon name="shirt" :size="24" />

      <!-- Label -->
      <span class="text-white text-callout font-medium"> Gear </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";
import NotificationBadge from "./NotificationBadge.vue";

interface Props {
  showNewBadge?: boolean;
  notificationCount?: number;
}

withDefaults(defineProps<Props>(), {
  showNewBadge: true,
  notificationCount: 2,
});

defineEmits<{
  dnaLabClick: [];
  gearClick: [];
}>();
</script>

<style lang="css" scoped>
.action-buttons-blur {
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 30%,
    black 100%
  );
  mask-image: linear-gradient(to bottom, transparent 0%, black 30%, black 100%);
}

.new-badge-bg {
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(270deg, #6832dc 0%, #e38071 100%);
  box-shadow: 0 0.5px 2px 0 rgba(255, 255, 255, 0.46) inset;
  height: 18px;
  padding: 1px 8px;
  justify-content: center;
  align-items: center;
}
</style>
