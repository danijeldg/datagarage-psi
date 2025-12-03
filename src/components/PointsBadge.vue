<template>
  <div
    class="relative z-10 overflow-visible h-[36px] flex items-center gap-2 px-5 py-2 pl-14 rounded-[20px] points-bg"
  >
    <Icon
      name="star"
      class="w-[43px] h-[43px] absolute left-2 bottom-[4px]"
      size="43"
    />
    <span class="text-subheadline text-white">{{ points }} pts</span>
  </div>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";

interface Props {
  points?: number;
}

withDefaults(defineProps<Props>(), {
  points: 344,
});
</script>

<style scoped lang="css">
.points-bg {
  border-radius: 99px;
  background: var(--Brand-priority, #837bd9);
  box-shadow: 0 -1px 2px 0 #400ced inset, 0 1px 4px 0 #c5caf5 inset;
}
</style>

