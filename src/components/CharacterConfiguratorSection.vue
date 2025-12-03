<template>
  <div class="w-full py-7 relative overflow-hidden -mt-5">
    <ArchedBackground variant="dark"></ArchedBackground>
    <div class="relative container z-10">
      <div class="grid grid-cols-4 gap-4 px-4 mb-4 hexagon-grid">
        <CharacterAttribute
          v-for="(attr, index) in attributes"
          :key="index"
          :label="attr.label"
          :icon-name="attr.iconName"
          :name="attr.name"
          :rarity="attr.rarity"
          :icon-size="attr.iconSize"
          :should-translate="index % 2 === 1"
          @click="openModal(attr)"
        />
      </div>
    </div>

    <!-- Texture Selection Modal -->
    <TextureSelectionModal
      :is-open="isModalOpen"
      :title="modalTitle"
      :categories="getCategoriesForAttribute(selectedAttribute?.label)"
      :items="getItemsForAttribute(selectedAttribute?.label)"
      @close="closeModal"
      @select="handleItemSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CharacterAttribute from "./CharacterAttribute.vue";
import TextureSelectionModal from "./TextureSelectionModal.vue";
import type { IconName } from "./Icon.vue";
import type { Rarity } from "./RarityChip.vue";
import type { Item } from "./ItemsSection.vue";
import ArchedBackground from "./ArchedBackground.vue";

export interface CharacterAttributeData {
  label: string;
  iconName: IconName;
  name: string;
  rarity: Rarity;
  iconSize?: number;
}

interface Props {
  attributes?: CharacterAttributeData[];
}

withDefaults(defineProps<Props>(), {
  attributes: () => [
    {
      label: "Shape",
      iconName: "liquid-mix",
      name: "Liquid Mix",
      rarity: "limited",
    },
    {
      label: "Texture",
      iconName: "magenta-fur",
      name: "Magenta Fur",
      rarity: "rare",
    },
    {
      label: "Temper",
      iconName: "calm",
      name: "Calm",
      rarity: "legendary",
    },
    {
      label: "Flare",
      iconName: "horns",
      name: "Horns",
      rarity: "common",
    },
  ],
});

const isModalOpen = ref(false);
const selectedAttribute = ref<CharacterAttributeData | null>(null);

const getCategoriesForAttribute = (label?: string): string[] => {
  const categoryMap: Record<string, string[]> = {
    Texture: ["Hair", "Scales", "Liquid", "Glass", "Horns"],
    Shape: ["Round", "Square", "Triangle", "Organic"],
    Temper: ["Calm", "Aggressive", "Playful", "Serious"],
    Flare: ["Horns", "Wings", "Tail", "Aura"],
  };
  return categoryMap[label || ""] || ["All"];
};

const getItemsForAttribute = (_label?: string): Item[] => {
  // Sample items - in a real app, these would come from props or API
  const baseItems: Item[] = [
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
  ];

  return baseItems;
};

const modalTitle = computed(() => {
  if (!selectedAttribute.value) return "Select Item";
  return `Select ${selectedAttribute.value.label}`;
});

const openModal = (attr: CharacterAttributeData) => {
  selectedAttribute.value = attr;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedAttribute.value = null;
};

const handleItemSelect = (item: Item) => {
  // Handle item selection - update the attribute if needed
  console.log("Selected item:", item);
  // You can emit an event here or update the attribute data
};
</script>

<style scoped lang="css">
.hexagon-grid {
  background: url("../assets/backgrounds/dna-lab-configurator-section.svg")
    no-repeat center center / 100%;
}

.bg-custom-color-dark {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 200%;
  background: url("../assets/images/ellipse-bg-dark.svg") no-repeat center
    center / 100% 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
