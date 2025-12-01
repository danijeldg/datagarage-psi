<template>
  <div
    class="relative min-h-[316px] -mt-4 w-full flex items-center justify-center"
    :class="
      theme === 'light' ? 'bg-custom-color-light' : 'bg-custom-color-dark'
    "
    :attr="attr"
  >
    <div class="py-[52px] container">
      <h2
        class="text-2xl font-bold text-white"
        :class="calculateIsHighlighted() ? 'mb-12' : 'mb-6'"
      >
        {{ title }}
      </h2>
      <!-- Achievements layout - 4.5 itema u redu -->
      <div
        v-if="type === 'achievements'"
        class="flex gap-[18px] overflow-x-auto no-scrollbar"
      >
        <ItemCard
          v-for="(item, index) in items"
          :key="item.id"
          :item="item"
          :is-highlighted="calculateIsHighlighted(index)"
          :type="type"
        />
      </div>

      <!-- Ostali tipovi - 3 kolone grid -->
      <div v-else class="container grid grid-cols-3 gap-[18px] items-end">
        <ItemCard
          v-for="(item, index) in items"
          :key="item.id"
          :item="item"
          :is-highlighted="calculateIsHighlighted(index)"
          :type="type"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemCard from "./ItemCard.vue";
import { type IconName } from "./Icon.vue";
import { type Rarity } from "./RarityChip.vue";

export type { Rarity };

export interface Item {
  id: string | number;
  title: string;
  level: number | string;
  icon: IconName;
  rarity?: Rarity; // Optional for items like chests
}

interface Props {
  title?: string;
  items?: Item[];
  theme: "light" | "dark";
  type: "recent-items" | "eggs" | "challenges" | "achievements" | "chests";
  attr?: string;
}

const props = withDefaults(defineProps<Props>(), {
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

const calculateIsHighlighted = (index?: number): boolean => {
  // If type is "eggs" or "chests", all items are highlighted
  if (props.type === "eggs" || props.type === "chests") {
    return true;
  }
  // For other types, only the middle element (index 1) is highlighted
  return index === 1;
};
</script>

<style scoped>
.bg-custom-color-light {
  background: url("../assets/images/ellipse-bg-light.svg") no-repeat center
    center / 100% 100%;
}

.bg-custom-color-dark {
  background: url("../assets/images/ellipse-bg-dark.svg") no-repeat center
    center / 100% 100%;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
