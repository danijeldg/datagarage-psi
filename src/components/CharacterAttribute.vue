<template>
  <div
    class="flex flex-col items-center text-center gap-3 flex-1 attribute-card cursor-pointer transition-transform hover:scale-105 active:scale-95"
    :class="{ 'should-translate': shouldTranslate }"
    @click="$emit('click')"
  >
    <!-- Title -->
    <span class="text-caption font-semibold text-white uppercase tracking-wide">
      {{ label }}
    </span>

    <!-- Icon with octagonal frame -->
    <div class="attribute-icon-frame flex items-center justify-center">
      <Icon :name="iconName" :size="iconSize" />
    </div>

    <!-- Name -->
    <span class="text-caption text-white font-medium line-clamp-1">
      {{ name }}
    </span>

    <!-- Rarity Chip -->
    <RarityChip :rarity="rarity" />
  </div>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";
import RarityChip from "./RarityChip.vue";
import type { IconName } from "./Icon.vue";
import type { Rarity } from "./RarityChip.vue";

interface Props {
  label: string;
  iconName: IconName;
  name: string;
  rarity: Rarity;
  iconSize?: number;
  shouldTranslate?: boolean;
}

withDefaults(defineProps<Props>(), {
  iconSize: 60,
  shouldTranslate: false,
});

defineEmits<{
  click: [];
}>();
</script>

<style scoped lang="css">
.attribute-icon-frame {
  width: 70px;
  height: 70px;
}

.should-translate {
  transform: translateY(30px);
}
</style>
