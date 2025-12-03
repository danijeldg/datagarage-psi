<template>
  <SelectionModal
    :is-open="isOpen"
    :title="title"
    search-placeholder="Search Textures"
    :categories="categories"
    :items="items"
    item-type="recent-items"
    @close="$emit('close')"
    @select="$emit('select', $event)"
  />
</template>

<script setup lang="ts">
import SelectionModal from "./SelectionModal.vue";
import type { Item } from "./ItemsSection.vue";

interface Props {
  isOpen: boolean;
  title?: string;
  categories?: string[];
  items?: Item[];
}

withDefaults(defineProps<Props>(), {
  title: "Select Texture",
  categories: () => ["Hair", "Scales", "Liquid", "Glass", "Horns"],
  items: () => [
    {
      id: 1,
      title: "Magenta Fur",
      level: 1,
      icon: "magenta-fur",
      rarity: "common",
      isNew: true,
    },
    {
      id: 2,
      title: "Icy Cool Fur",
      level: 2,
      icon: "magenta-fur",
      rarity: "limited",
      isNew: true,
    },
    {
      id: 3,
      title: "Cheetos Fur",
      level: 3,
      icon: "magenta-fur",
      rarity: "rare",
    },
    {
      id: 4,
      title: "Golden Hair",
      level: 1,
      icon: "magenta-fur",
      rarity: "common",
    },
    {
      id: 5,
      title: "Cap'n Crunch",
      level: 2,
      icon: "magenta-fur",
      rarity: "limited",
    },
    {
      id: 6,
      title: "Dragon Scales",
      level: 3,
      icon: "magenta-fur",
      rarity: "rare",
    },
    {
      id: 7,
      title: "Liquid Gold",
      level: 1,
      icon: "liquid-mix",
      rarity: "legendary",
    },
    {
      id: 8,
      title: "Crystal Glass",
      level: 2,
      icon: "magenta-fur",
      rarity: "limited",
    },
    {
      id: 9,
      title: "Fire Horns",
      level: 3,
      icon: "horns",
      rarity: "rare",
    },
  ],
});

defineEmits<{
  close: [];
  select: [item: Item];
}>();
</script>
