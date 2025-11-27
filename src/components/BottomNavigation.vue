<template>
  <nav
    class="absolute bottom-0 left-0 right-0 z-[10] p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] mb-10"
  >
    <div
      class="glass-border max-w-[600px] h-[58px] mx-auto flex items-center justify-between gap-4 rounded-full bg-white/5 py-1 px-1.5 relative"
    >
      <NavButton
        v-for="item in navItems"
        :key="item.id"
        :icon="item.icon"
        :label="item.label"
        :badge="item.badge"
        :is-primary="item.isPrimary"
        :is-active="item.id === activeItem"
        @click="$emit('navigate', item.id)"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import NavButton from "./NavButton.vue";
import type { IconName } from "./Icon.vue";

interface NavItem {
  id: string;
  icon: IconName;
  label?: string;
  isPrimary?: boolean;
  badge?: string | number;
}

interface Props {
  activeItem?: string;
}

withDefaults(defineProps<Props>(), {
  activeItem: "home",
});

defineEmits<{
  navigate: [id: string];
}>();

const navItems: NavItem[] = [
  {
    id: "dna",
    icon: "dna",
  },
  {
    id: "scan",
    icon: "scanner",
    isPrimary: true,
  },
  {
    id: "explore",
    icon: "explore",
  },
];
</script>
