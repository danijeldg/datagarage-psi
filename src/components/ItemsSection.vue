<template>
  <div
    class="relative min-h-[316px] -mt-[50px] py-5 w-full flex items-center justify-center"
    :attr="attr"
  >
    <ArchedBackground :variant="props.theme" />
    <div class="py-[52px] container z-0">
      <h2
        class="text-2xl font-bold text-white"
        :class="calculateIsHighlighted() ? 'mb-12' : 'mb-6'"
      >
        {{ title }}
      </h2>
      <!-- Achievements layout  -->
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
import ArchedBackground from "./ArchedBackground.vue";

export type { Rarity };

export interface Item {
  id: string | number;
  title: string;
  level: number | string;
  icon: IconName;
  rarity?: Rarity; // Optional for items like chests
  isNew?: boolean; // Optional flag for NEW badge
  locked?: boolean; // Optional flag for locked items
  unlockCost?: number; // Optional cost to unlock locked items
}

interface Props {
  title?: string;
  items?: Item[];
  theme: "light" | "dark";
  type:
    | "recent-items"
    | "eggs"
    | "challenges"
    | "achievements"
    | "chests"
    | "gears";
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
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
