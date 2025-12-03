<template>
  <SvgClipPaths />

  <header class="absolute top-0 left-0 right-0 z-[100] p-4">
    <div class="relative w-full max-w-[600px] mx-auto">
      <div
        class="name-notch-custom-shape absolute py-[7px] z-10 top-0 w-[35.8%] max-w-[240px] min-h-[38px] left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 cursor-pointer text-callout transition-colors"
      >
        <!-- <NotificationBadge
          v-if="notificationCount > 0"
          :count="notificationCount"
        /> -->

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
        class="header-custom-shape min-h-[74px] relative max-w-[600px] px-5 py-2 rounded-3xl mx-auto flex items-center justify-between gap-4"
      >
        <div class="absolute flex-shrink-0 items-center">
          <CircleLoader :progress="progress" :size="56" class="absolute">
            <div
              class="crown-circle-bg h-10 w-10 rounded-full flex justify-center items-center"
            >
              <Icon name="crown" />
            </div>
          </CircleLoader>
        </div>

        <div class="flex-1 flex flex-col items-center gap-2"></div>

        <div class="relative flex-shrink-0">
          <img
            :src="opponentAvatar"
            alt="Opponent"
            class="w-[40px] h-[40px] rounded-full object-cover border-3 border-purple shadow-[0_4px_12px_rgba(131,123,217,0.3)]"
          />
        </div>
      </div>
      <div class="absolute -bottom-4 left-1/2 -translate-x-1/2">
        <PointsBadge :points="points" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import CircleLoader from "./CircleLoader.vue";
import Icon from "./Icon.vue";
import SvgClipPaths from "./SvgClipPaths.vue";
import PointsBadge from "./PointsBadge.vue";
import profileImg from "../assets/images/profile-img.png";

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
  opponentAvatar: profileImg,
});
</script>

<style scoped lang="css">
.header-custom-shape {
  background-image: url("../assets/images/header-notch.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.name-notch-custom-shape {
  background-image: url("../assets/images/name-notch.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.crown-circle-bg {
  background: linear-gradient(180deg, #fae3a5 0%, #ea9c36 100%);
}
</style>
