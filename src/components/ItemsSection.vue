<template>
  <div
    class="relative min-h-[316px] -mt-4 flex items-center justify-center"
    :class="
      theme === 'light' ? 'bg-custom-color-light' : 'bg-custom-color-dark'
    "
  >
    <div class="py-[52px]">
      <div class="container grid grid-cols-3 gap-[18px] items-end">
        <div
          v-for="(item, index) in items"
          :key="item.id"
          class="item-card p-2 flex flex-col items-center gap-1.5 relative"
          :class="[
            index === 1
              ? '!rounded-full !aspect-square justify-end'
              : 'rounded-2xl',
            getRarityClass(item.rarity),
          ]"
        >
          <!-- Title -->
          <div class="text-center">
            <h3 class="text-caption text-center w-full">
              {{ item.title }}
            </h3>

            <!-- Level -->
            <p v-if="index !== 1" class="text-label uppercase text-white/60">
              Level {{ item.level }}
            </p>
          </div>

          <!-- Icon -->
          <div :class="index === 1 ? 'absolute -top-8' : ''">
            <Icon :name="item.icon" :size="index !== 1 ? 48 : 96" />
          </div>

          <!-- Rarity Badge -->
          <div :class="[index === 1 ? 'absolute -bottom-4' : '']">
            <RarityChip :rarity="item.rarity" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon, { type IconName } from "./Icon.vue";
import RarityChip, { type Rarity } from "./RarityChip.vue";

export type { Rarity };

export interface Item {
  id: string | number;
  title: string;
  level: number | string;
  icon: IconName;
  rarity: Rarity;
}

interface Props {
  items?: Item[];
  theme: "light" | "dark";
  type: "recent-items" | "eggs" | "challenges" | "achievements" | "chests";
}

withDefaults(defineProps<Props>(), {
  theme: "light",
  items: () => [
    {
      id: 1,
      title: "Liquid Mix",
      level: 2,
      icon: "liquid-mix",
      rarity: "common",
    },
    {
      id: 2,
      title: "Pepsi Baseball Cap",
      level: 12,
      icon: "pepsi-hat",
      rarity: "rare",
    },
    {
      id: 3,
      title: "Chewy Bar",
      level: 2,
      icon: "chewy-bar",
      rarity: "limited",
    },
  ],
});

const getRarityClass = (rarity: Rarity): string => {
  const rarityClasses: Record<Rarity, string> = {
    common: "rarity-common",
    limited: "rarity-limited",
    rare: "rarity-rare",
    legendary: "rarity-legendary",
  };
  return rarityClasses[rarity];
};
</script>

<style scoped>
.bg-custom-color-light {
  background: url("../assets/images/ellipse-bg-light.svg") no-repeat center
    center / 100% 100%;
  z-index: 1;
}

.bg-custom-color-dark {
  background: url("../assets/images/ellipse-bg-dark.svg") no-repeat center
    center / 100% 100%;
}

.item-card {
  border-radius: 16px;
  border: 1px solid #3e1c4c;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.item-card:active {
  transform: scale(0.95);
}

/* Rarity specific styles */
.rarity-common {
  border-color: rgba(158, 158, 158, 0.3);
}

.rarity-common:active {
  box-shadow: 0 4px 16px rgba(158, 158, 158, 0.2);
}

.rarity-uncommon {
  border-color: rgba(30, 255, 0, 0.3);
}

.rarity-uncommon:active {
  box-shadow: 0 4px 16px rgba(30, 255, 0, 0.2);
}

.rarity-rare {
  border: 1px solid #20529f;
  background: rgba(255, 255, 255, 0.05);
}

.rarity-epic {
  border-color: rgba(163, 53, 238, 0.4);
}

.rarity-epic:active {
  box-shadow: 0 4px 16px rgba(163, 53, 238, 0.3);
}

.rarity-legendary {
  border-color: rgba(255, 128, 0, 0.5);
  background: linear-gradient(
    180deg,
    rgba(255, 128, 0, 0.05) 0%,
    rgba(22, 17, 48, 0.6) 100%
  );
}

.rarity-legendary:active {
  box-shadow: 0 4px 20px rgba(255, 128, 0, 0.4);
}
</style>
