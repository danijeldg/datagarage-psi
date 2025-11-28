<template>
  <div
    class="relative w-full h-full min-h-[calc(100vh-240px)] flex flex-col items-center justify-center gap-6"
  >
    <div class="absolute top-0 left-0 w-full z-10 overflow-hidden">
      <img
        src="../assets/images/character.png"
        alt="Character"
        class="w-full h-[90dvh] object-cover"
      />
    </div>

    <div class="pt-[69dvh]">
      <ActionButtons />
      <ItemsSection theme="light" />
      <ItemsSection theme="dark" />
      <ItemsSection theme="light" />
      <ItemsSection theme="dark" />
      <ItemsSection theme="light" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ActionButtons from "../components/ActionButtons.vue";
import ItemsSection from "../components/ItemsSection.vue";
</script>
