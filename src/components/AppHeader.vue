<template>
  <SvgClipPaths />

  <header class="absolute top-0 left-0 right-0 z-[100] p-4">
    <div
      class="name-notch-custom-shape py-[9px] absolute z-10 top-4 w-1/3 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 cursor-pointer px-3 text-callout transition-colors"
    >
      <span class="text-base font-semibold text-white">{{ username }}</span>
      <svg
        class="text-white/70"
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
      >
        <path
          d="M1 1L6 6L11 1"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div
      class="header-custom-shape relative max-w-[600px] px-5 py-2 rounded-3xl mx-auto flex items-center justify-between gap-4"
    >
      <div class="flex-shrink-0">
        <CircleLoader :progress="progress" :size="70">
          <img
            src="/vite.svg"
            alt="Avatar"
            class="w-8 h-8 rounded-full object-cover"
          />
        </CircleLoader>
      </div>

      <div class="flex-1 flex flex-col items-center gap-2"></div>

      <div class="relative flex-shrink-0">
        <div
          v-if="notificationCount > 0"
          class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center z-[1] border-2 border-dark"
        >
          {{ notificationCount }}
        </div>
        <img
          :src="opponentAvatar"
          alt="Opponent"
          class="w-[60px] h-[60px] rounded-full object-cover border-3 border-purple shadow-[0_4px_12px_rgba(131,123,217,0.3)]"
        />
      </div>
    </div>
    <div
      class="absolute z-10 overflow-visible bottom-0 left-1/2 -translate-x-1/2 h-[36px] flex items-center gap-2 px-5 py-2 pl-14 rounded-[20px] points-bg"
    >
      <Icon
        name="star"
        class="w-[43px] h-[43px] absolute left-2 bottom-[4px]"
        size="43"
      />
      <span class="text-subheadline text-white">{{ points }} pts</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import CircleLoader from "./CircleLoader.vue";
import Icon from "./Icon.vue";
import SvgClipPaths from "./SvgClipPaths.vue";

interface Props {
  username?: string;
  points?: number;
  progress?: number;
  notificationCount?: number;
  opponentAvatar?: string;
}

withDefaults(defineProps<Props>(), {
  username: "Noma",
  points: 344,
  progress: 65,
  notificationCount: 2,
  opponentAvatar: "https://i.pravatar.cc/150?img=12",
});
</script>

<style scoped lang="css">
.header-custom-shape {
  clip-path: url(#cutoutTrapezoid);
  border: 1px solid rgba(255, 255, 255, 0);

  background: linear-gradient(
    180deg,
    rgba(43, 33, 143, 0.35) 0%,
    rgba(12, 9, 41, 0.56) 25.33%
  );

  backdrop-filter: blur(45px);
}

.points-bg {
  border-radius: 99px;
  background: var(--Brand-priority, #837bd9);
  box-shadow: 0 -1px 2px 0 #400ced inset, 0 1px 4px 0 #c5caf5 inset;
}

.name-notch-custom-shape {
  clip-path: url(#roundedTrapezoid);
  fill: linear-gradient(
    0deg,
    rgba(42, 37, 89, 0.32) 0%,
    rgba(42, 37, 89, 0.32) 100%
  );

  stroke-width: 0.2px;
  stroke: rgba(255, 255, 255, 0);

  box-shadow: 0 2px 4px 0 rgba(255, 255, 255, 0.08) inset;

  backdrop-filter: blur(45px);
}
</style>
