<template>
  <button
    :class="[
      'flex flex-col items-center gap-2 w-1/3 h-full rounded-full px-6 py-3 cursor-pointer transition-all duration-300',
      {
        'inset-glow-purple !p-4 !rounded-full absolute left-0 right-0 mx-auto w-[80px] !h-[80px] !max-w-[80px] flex items-center justify-center':
          isPrimary,
        relative: !isPrimary,
        ' bg-dark-tertiary': isActive,
      },
    ]"
    @click="$emit('click')"
  >
    <span
      v-if="badge"
      class="absolute -top-2 -right-2 bg-red-500 text-white text-[0.7rem] font-bold py-[0.15rem] px-2 rounded-xl z-[1] border-2 border-dark leading-none min-w-[20px] text-center"
    >
      {{ badge }}
    </span>
    <span
      class="flex flex-col items-center justify-center text-white gap-1 relative"
    >
      <Icon
        :name="icon"
        :size="isPrimary ? 28 : 24"
        :class="[
          'transition-all duration-300',
          {
            'text-white': !isActive,
            'text-blue icon-glow-blue': isActive && !isPrimary,
          },
        ]"
      />
    </span>
    <span
      v-if="label && !isPrimary"
      class="text-xs font-semibold text-white text-center whitespace-nowrap"
    >
      {{ label }}
    </span>
    <span
      :class="[
        {
          'transition-all duration-300 w-1/2 h-[1px] rounded-full bg-blue absolute bottom-[1px] line-shadow-blue':
            isActive,
          hidden: !isActive || isPrimary,
        },
      ]"
    />
  </button>
</template>

<script setup lang="ts">
import Icon, { type IconName } from "./Icon.vue";

interface Props {
  icon: IconName;
  label?: string;
  badge?: string | number;
  isPrimary?: boolean;
  isActive?: boolean;
}

withDefaults(defineProps<Props>(), {
  isPrimary: false,
  isActive: false,
});

defineEmits<{
  click: [];
}>();
</script>
