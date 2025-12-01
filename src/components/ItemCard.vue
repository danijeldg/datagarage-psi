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

  <div
    v-else
    class="item-card p-2 flex flex-col items-center gap-1.5 relative"
    :class="[
      isHighlighted
        ? '!rounded-full !aspect-square justify-end'
        : 'rounded-2xl',
      item.rarity ? getRarityClass(item.rarity) : '',
    ]"
  >
    <!-- Title -->
    <div class="text-center">
      <h3 class="text-caption text-center w-full">
        {{ item.title }}
      </h3>

      <!-- Level -->
      <p v-if="!isHighlighted" class="text-label uppercase text-white/60">
        Level {{ item.level }}
      </p>
    </div>

    <!-- Icon -->
    <div :class="isHighlighted ? 'absolute -top-8' : ''">
      <Icon :name="item.icon" :size="calculateIconSize()" />
    </div>

    <!-- Rarity Badge -->
    <div
      v-if="item.rarity"
      :class="[isHighlighted ? 'absolute -bottom-2' : '']"
    >
      <RarityChip :rarity="item.rarity" />
    </div>
    <div
      v-if="isHighlighted"
      :class="[isHighlighted ? 'h-2 w-full' : '']"
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
  type?: "recent-items" | "eggs" | "challenges" | "achievements" | "chests";
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

const calculateIconSize = (): number => {
  if (!props.isHighlighted) {
    return 48;
  }
  if (props.type === "eggs") {
    return 83;
  }
  if (props.type === "chests") {
    return 110;
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
