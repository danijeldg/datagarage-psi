<template>
  <!-- Challenge Item -->
  <div v-if="type === 'challenges'" class="flex items-center justify-center">
    <Icon :name="item.icon" :size="110" />
  </div>

  <!-- Achievement Item  -->
  <div
    v-else-if="type === 'achievements'"
    class="flex items-center justify-center"
  >
    <div class="w-[64px] h-[102px]">
      <Icon
        :name="item.icon"
        size="102"
        class="[&>svg]:w-full [&>svg]:h-full"
      />
    </div>
  </div>

  <!-- Regular Item / Gear Item -->
  <div
    v-else
    class="item-card p-2 flex flex-col items-center gap-1.5 relative"
    :class="[
      isHighlighted || type === 'gears'
        ? '!rounded-full !aspect-square justify-end'
        : 'rounded-2xl',
      item.rarity ? getRarityClass(item.rarity) : '',
    ]"
  >
    <!-- Locked Badge (for gears) -->
    <div
      v-if="type === 'gears' && (item as any).locked"
      class="absolute top-0 right-0 w-6 h-6 flex items-center justify-center z-10"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :class="getLockColor((item as any).rarity)"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    </div>

    <!-- Unlock Cost (for gears) -->
    <div
      v-if="type === 'gears' && (item as any).locked && (item as any).unlockCost"
      class="absolute top-1 left-1 flex items-center gap-1 z-10"
    >
      <Icon name="star" :size="16" />
      <span class="text-label text-white font-semibold">
        {{ (item as any).unlockCost }}
      </span>
    </div>

    <!-- NEW Badge -->
    <span
      v-if="item.isNew"
      class="absolute -top-1.5 -left-1.5 new-badge text-label font-semibold px-2 py-0.5 rounded-lg z-10"
    >
      NEW
    </span>

    <!-- Title -->
    <div class="text-center">
      <h3 class="text-caption text-center w-full" :class="type === 'gears' ? 'line-clamp-2' : ''">
        {{ item.title }}
      </h3>

      <!-- Level -->
      <p v-if="!isHighlighted && type !== 'gears'" class="text-label uppercase text-white/60">
        Level {{ item.level }}
      </p>
    </div>

    <!-- Icon -->
    <div :class="isHighlighted || type === 'gears' ? 'absolute -top-8' : ''">
      <Icon :name="item.icon" :size="calculateIconSize()" />
    </div>

    <!-- Rarity Badge -->
    <div
      v-if="item.rarity"
      :class="[isHighlighted || type === 'gears' ? 'absolute -bottom-2' : '']"
    >
      <RarityChip :rarity="item.rarity" />
    </div>
    <div
      v-if="isHighlighted || type === 'gears'"
      :class="[isHighlighted || type === 'gears' ? 'h-2 w-full' : '']"
    ></div>
  </div>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";
import RarityChip, { type Rarity } from "./RarityChip.vue";
import type { Item } from "./ItemsSection.vue";

interface Props {
  item: Item;
  isHighlighted?: boolean;
  type?: "recent-items" | "eggs" | "challenges" | "achievements" | "chests" | "gears";
}

const props = withDefaults(defineProps<Props>(), {
  isHighlighted: false,
  type: "recent-items",
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

const getLockColor = (rarity?: Rarity): string => {
  const colorMap: Record<string, string> = {
    common: "text-gray-400",
    limited: "text-blue-400",
    rare: "text-orange-400",
    legendary: "text-yellow-400",
  };
  return colorMap[rarity || "common"] || "text-gray-400";
};

const calculateIconSize = (): number => {
  if (!props.isHighlighted && props.type !== "gears") {
    return 48;
  }
  if (props.type === "eggs") {
    return 83;
  }
  if (props.type === "chests") {
    return 110;
  }
  if (props.type === "gears") {
    return 96;
  }
  return 96;
};
</script>

<style scoped>
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
  border-color: rgba(233, 30, 99, 0.3);
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

.rarity-limited {
  border-color: rgba(97, 173, 231, 0.4);
}

.rarity-limited:active {
  box-shadow: 0 4px 16px rgba(97, 173, 231, 0.3);
}

.rarity-rare {
  border-color: rgba(231, 133, 97, 0.4);
  background: rgba(255, 255, 255, 0.05);
}

.rarity-rare:active {
  box-shadow: 0 4px 16px rgba(231, 133, 97, 0.3);
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

.new-badge {
  background: linear-gradient(135deg, #e91e63 0%, #c2185b 100%);
  color: white;
  box-shadow: 0 2px 4px rgba(233, 30, 99, 0.3);
}

.gear-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.gear-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.gear-card.rarity-common .gear-icon-wrapper {
  border: 2px solid rgba(233, 30, 99, 0.3);
}

.gear-card.rarity-limited .gear-icon-wrapper {
  border: 2px solid rgba(97, 173, 231, 0.4);
}

.gear-card.rarity-rare .gear-icon-wrapper {
  border: 2px solid rgba(231, 133, 97, 0.4);
}

.gear-card.rarity-legendary .gear-icon-wrapper {
  border: 2px solid rgba(255, 128, 0, 0.5);
}
</style>
