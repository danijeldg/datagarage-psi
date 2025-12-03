<template>
  <div class="container pb-safe">
    <div class="rounded-2xl p-4 flex items-center justify-between gap-3">
      <div class="flex-1 bg-white/10 rounded-lg p-3">
        <div class="flex items-center gap-3 -translate-x-1">
          <div class="flex items-center justify-center">
            <Icon name="character-level-2" :size="30" />
          </div>
          <div class="flex flex-col flex-1">
            <span class="text-callout text-white">Level {{ level }}</span>
          </div>
          <span class="text-callout text-white">{{ xp }} XP</span>
        </div>

        <div class="w-full h-2 bg-black/40 rounded-full mt-1 overflow-hidden">
          <div
            class="h-full level-progress rounded-full"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>

      <div
        class="rarity-badge rounded-xl px-3 py-2 flex flex-col items-center justify-center min-w-[60px]"
      >
        <span class="text-headline font-semibold text-white"
          >{{ progress }}%</span
        >
        <span class="text-callout text-white/80 uppercase">{{ rarity }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";

interface Props {
  level?: number;
  xp?: number;
  progress?: number;
  rarity?: string;
}

withDefaults(defineProps<Props>(), {
  level: 2,
  xp: 400,
  progress: 85,
  rarity: "Rare",
});
</script>

<style scoped lang="css">
.level-progress {
  background: linear-gradient(90deg, #837bd9 0%, #a89ff5 100%);
  box-shadow: 0 0 8px rgba(131, 123, 217, 0.6);
}

.rarity-badge {
  background: linear-gradient(
    135deg,
    rgba(231, 133, 97, 0.9) 0%,
    rgba(222, 67, 52, 0.9) 100%
  );
  border: 1px solid rgba(240, 160, 110, 0.5);
  box-shadow: 0 2px 8px rgba(231, 133, 97, 0.4);
}
</style>
