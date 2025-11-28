<template>
  <span
    class="text-label px-2 py-0.5 rounded-full backdrop-blur-sm transition-all duration-200"
    :class="rarity"
  >
    {{ rarity }}
  </span>
</template>

<script setup lang="ts">
export type Rarity = "common" | "limited" | "rare" | "legendary";

interface Props {
  rarity: Rarity;
}

defineProps<Props>();
</script>

<style lang="css" scoped>
.common {
  border-radius: 99px;
  background: #a9adae;
  box-shadow: 0 -1px 2px 0 #4c4f4f inset, 0 1px 4px 0 #e6eff1 inset;
}

.limited {
  border-radius: 99px;
  background: #61ade7;
  box-shadow: 0 -1px 2px 0 #1869a8 inset, 0 1px 4px 0 #afdbfd inset;
}

.rare {
  border-radius: 99px;
  background: #e78561;
  box-shadow: 0 -1px 2px 0 #de4334 inset, 0 1px 4px 0 #f0a06e inset;
}

.legendary {
  border-radius: 99px;
  background: linear-gradient(151deg, #f4be3b -48.86%, #926d21 94.38%);
  box-shadow: 0 -1px 2px 0 #6b5217 inset, 0 1px 4px 0 #dbc89c inset;
}
</style>
