<template>
  <div class="absolute -top-2 -right-2 flex items-center justify-center">
    <!-- Background Circle -->
    <span
      class="relative rounded-full bg-white/20 z-10 w-[30px] h-[30px] -top-[3px] -right-[3px]"
    >
      <!-- Notification Icon -->
      <Icon name="notification-elipse" class="absolute top-[3px] right-[3px]" />

      <!-- Count Badge -->
      <span
        v-if="count > 0"
        class="absolute top-[7px] right-[11px] text-white text-caption rounded-full z-[2]"
      >
        {{ count }}
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";

interface Props {
  count?: number;
}

withDefaults(defineProps<Props>(), {
  count: 0,
});
</script>
