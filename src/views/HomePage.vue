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

    <div class="pt-[69dvh] w-full">
      <ActionButtons @gearClick="handleGearClick" @dnaLabClick="handleDnaLabClick" />
      <ItemsSection
        theme="light"
        type="recent-items"
        title="Recent Items"
        class="z-[5]"
      />
      <ItemsSection
        theme="dark"
        :items="eggItems"
        type="eggs"
        title="Eggs"
        class="z-[4]"
      />
      <ItemsSection
        theme="light"
        :items="challengeItems"
        type="challenges"
        title="Challenges"
        class="z-[3]"
      />
      <ItemsSection
        theme="dark"
        :items="achievementItems"
        type="achievements"
        title="Achievements"
        class="z-[2]"
      />
      <ItemsSection
        theme="light"
        :items="chestItems"
        type="chests"
        title="Chests"
        class="z-[1]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import ActionButtons from "../components/ActionButtons.vue";
import ItemsSection, { type Item } from "../components/ItemsSection.vue";

const router = useRouter();

const handleGearClick = () => {
  router.push({ name: "gear" });
};

const handleDnaLabClick = () => {
  router.push({ name: "dna" });
};

// Egg items
const eggItems: Item[] = [
  {
    id: "egg-1",
    title: "Yellow Egg",
    level: 1,
    icon: "egg-dragon-skin",
    rarity: "limited",
  },
  {
    id: "egg-2",
    title: "Dragon Skin Egg",
    level: 5,
    icon: "egg-yellow",
    rarity: "rare",
  },
  {
    id: "egg-3",
    title: "Blue Red Egg",
    level: 3,
    icon: "egg-blue-red",
    rarity: "legendary",
  },
];

// Challenge items
const challengeItems: Item[] = [
  {
    id: "challenge-1",
    title: "Pepsi Challenge",
    level: 1,
    icon: "pepsi-challenge",
    rarity: "rare",
  },
  {
    id: "challenge-2",
    title: "Doritos Challenge",
    level: 1,
    icon: "doritos-challenge",
    rarity: "legendary",
  },
  {
    id: "challenge-3",
    title: "Mtn Dew Challenge",
    level: 1,
    icon: "mtn-dew-challenge",
    rarity: "limited",
  },
];

// Achievement items
const achievementItems: Item[] = [
  {
    id: "achievement-1",
    title: "Pepsi Achievement",
    level: 1,
    icon: "pepsi-achievement",
    rarity: "rare",
  },
  {
    id: "achievement-2",
    title: "Doritos Achievement",
    level: 1,
    icon: "doritos-achievement",
    rarity: "legendary",
  },
  {
    id: "achievement-3",
    title: "Cheetos Achievement",
    level: 1,
    icon: "cheetos-achievement",
    rarity: "common",
  },
  {
    id: "achievement-4",
    title: "Mtn Dew Achievement",
    level: 1,
    icon: "mtn-dew-achievement",
    rarity: "rare",
  },
  {
    id: "achievement-5",
    title: "Pepsi Achievement 2",
    level: 1,
    icon: "pepsi-achievement",
    rarity: "legendary",
  },
  {
    id: "achievement-6",
    title: "Doritos Achievement 2",
    level: 1,
    icon: "doritos-achievement",
    rarity: "rare",
  },
  {
    id: "achievement-7",
    title: "Cheetos Achievement 2",
    level: 1,
    icon: "cheetos-achievement",
    rarity: "legendary",
  },
  {
    id: "achievement-8",
    title: "Mtn Dew Achievement 2",
    level: 1,
    icon: "mtn-dew-achievement",
    rarity: "common",
  },
];

// Chest items
const chestItems: Item[] = [
  {
    id: "chest-1",
    title: "Bronze Chest",
    level: 1,
    icon: "chest-1",
  },
  {
    id: "chest-2",
    title: "Silver Chest",
    level: 5,
    icon: "chest-2",
  },
  {
    id: "chest-3",
    title: "Gold Chest",
    level: 10,
    icon: "chest-3",
  },
];
</script>
