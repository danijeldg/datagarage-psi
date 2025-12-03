<template>
  <div class="w-full py-7 relative overflow-hidden -mt-5">
    <ArchedBackground variant="dark" />
    <div class="relative container z-10">
      <div class="flex justify-center gap-6 px-4 mb-4">
        <div
          v-for="(slot, index) in gearSlots"
          :key="index"
          class="flex flex-col items-center gap-2"
        >
          <!-- Label above slot -->
          <span class="text-label text-white uppercase">{{ slot.label }}</span>

          <!-- Circular slot -->
          <button
            class="gear-slot relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            @click="handleSlotClick(slot)"
          >
            <!-- Empty placeholder sphere -->
            <div class="empty-sphere w-full h-full rounded-full"></div>
          </button>

          <!-- Empty label below slot -->
          <span class="text-callout text-white/80">Empty</span>
        </div>
      </div>
    </div>

    <!-- Gear Selection Modal -->
    <SelectionModal
      :is-open="isModalOpen"
      :title="modalTitle"
      search-placeholder="Search Head Gear"
      :categories="getCategoriesForSlot(selectedSlot?.type)"
      :items="getItemsForSlot(selectedSlot?.type)"
      item-type="gears"
      @close="closeModal"
      @select="handleItemSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import SelectionModal from "./SelectionModal.vue";
import type { Item } from "./ItemsSection.vue";
import ArchedBackground from "./ArchedBackground.vue";

export interface GearSlot {
  label: string;
  type: "extras" | "head" | "body" | "bottoms";
}

const gearSlots: GearSlot[] = [
  { label: "EXTRAS", type: "extras" },
  { label: "HEAD", type: "head" },
  { label: "BODY", type: "body" },
  { label: "BOTTOMS", type: "bottoms" },
];

const isModalOpen = ref(false);
const selectedSlot = ref<GearSlot | null>(null);

const getCategoriesForSlot = (slotType?: string): string[] => {
  const categoryMap: Record<string, string[]> = {
    head: ["All gear", "Sunglasses", "Hats", "Horns"],
    extras: ["All gear", "Accessories"],
    body: ["All gear", "Shirts", "Armor"],
    bottoms: ["All gear", "Pants", "Shorts"],
  };
  return categoryMap[slotType || ""] || ["All gear"];
};

const getItemsForSlot = (slotType?: string): Item[] => {
  // Sample gear items based on image description
  const baseItems: Item[] = [
    {
      id: 1,
      title: "Pepsi Baseball Cap",
      level: 1,
      icon: "pepsi-hat",
      rarity: "rare",
      isNew: true,
    },
    {
      id: 2,
      title: "Gatorade Gamer Cap",
      level: 1,
      icon: "gatorade-gamer-cap",
      rarity: "limited",
    },
    {
      id: 3,
      title: "Cowboy Hat",
      level: 1,
      icon: "cowboy-hat",
      rarity: "common",
    },
    {
      id: 4,
      title: "Cap'n Crunch",
      level: 1,
      icon: "capn-crunch",
      rarity: "limited",
    },
    {
      id: 5,
      title: "Doritos Chef's Pride Hat",
      level: 1,
      icon: "doritos-chefs",
      rarity: "legendary",
    },
    {
      id: 6,
      title: "Doritos Glasses",
      level: 1,
      icon: "doritos-glasses",
      rarity: "rare",
    },
    {
      id: 7,
      title: "Thunder Shades",
      level: 1,
      icon: "doritos-glasses",
      rarity: "rare",
      locked: true,
      unlockCost: 324,
    },
    {
      id: 8,
      title: "Classic Sunglasses",
      level: 1,
      icon: "doritos-glasses",
      rarity: "limited",
      locked: true,
      unlockCost: 324,
    },
    {
      id: 9,
      title: "Wizard Hat",
      level: 1,
      icon: "capn-crunch",
      rarity: "legendary",
      locked: true,
      unlockCost: 324,
    },
  ];

  // Filter by slot type if needed
  if (slotType === "head") {
    return baseItems;
  }

  return baseItems;
};

const modalTitle = computed(() => {
  if (!selectedSlot.value) return "Select Gear";
  return `Search ${selectedSlot.value.label} Gear`;
});

const handleSlotClick = (slot: GearSlot) => {
  selectedSlot.value = slot;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedSlot.value = null;
};

const handleItemSelect = (item: Item) => {
  console.log("Selected gear item:", item);
  // TODO: Update the slot with selected item
};
</script>

<style scoped lang="css">
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

.gear-slot {
  background: transparent;
  border: none;
  cursor: pointer;
}

.empty-sphere {
  background: radial-gradient(
    circle at center,
    rgba(173, 216, 230, 0.15) 0%,
    rgba(135, 206, 250, 0.1) 30%,
    rgba(135, 206, 250, 0.05) 60%,
    transparent 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 25px rgba(135, 206, 250, 0.25),
    inset 0 0 30px rgba(173, 216, 230, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(2px);
}

.empty-sphere::before {
  content: "";
  position: absolute;
  top: 15%;
  left: 20%;
  width: 60%;
  height: 60%;
  background: radial-gradient(
    ellipse at 40% 40%,
    rgba(173, 216, 230, 0.5) 0%,
    rgba(135, 206, 250, 0.3) 40%,
    transparent 80%
  );
  border-radius: 50%;
  filter: blur(10px);
  animation: float 4s ease-in-out infinite;
}

.empty-sphere::after {
  content: "";
  position: absolute;
  top: 35%;
  left: 35%;
  width: 30%;
  height: 30%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(173, 216, 230, 0.2) 50%,
    transparent 80%
  );
  border-radius: 50%;
  filter: blur(6px);
  animation: float 3s ease-in-out infinite reverse;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translate(5px, -5px) scale(1.1);
    opacity: 1;
  }
}
</style>
