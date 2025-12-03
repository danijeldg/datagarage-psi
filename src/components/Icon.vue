<template>
  <div
    :class="['inline-flex items-center justify-center', $attrs.class]"
    :style="{ width: `${size}px`, height: `${size}px` }"
    v-html="svgContent"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import dnaIcon from "../assets/icons/dna.svg?raw";
import dna3dIcon from "../assets/icons/dna-3d.svg?raw";
import scannerIcon from "../assets/icons/scanner.svg?raw";
import exploreIcon from "../assets/icons/explore.svg?raw";
import starIcon from "../assets/icons/star.svg?raw";
import shirtIcon from "../assets/icons/shirt.svg?raw";
import crownIcon from "../assets/icons/crown.svg?raw";
import notificationElipseIcon from "../assets/icons/notification-elipse.svg?raw";
import chewyBarIcon from "../assets/icons/chewy-bar.svg?raw";
import liquidMixIcon from "../assets/icons/liquid-mix.svg?raw";
import pepsiHatIcon from "../assets/icons/pepsi-hat.svg?raw";
import eggYellowIcon from "../assets/icons/egg-yellow.svg?raw";
import eggDragonSkinIcon from "../assets/icons/egg-dragon-skin.svg?raw";
import eggBlueRedIcon from "../assets/icons/egg-blue-red.svg?raw";
import pepsiChallengeIcon from "../assets/icons/pepsi-challenge.svg?raw";
import doritosChallengeIcon from "../assets/icons/doritos-challenge.svg?raw";
import mtnDewChallengeIcon from "../assets/icons/mtn-dew-challenge.svg?raw";
import pepsiAchievementIcon from "../assets/icons/achievements/pepsi.svg?raw";
import doritosAchievementIcon from "../assets/icons/achievements/doritos.svg?raw";
import cheetosAchievementIcon from "../assets/icons/achievements/cheetos.svg?raw";
import mtnDewAchievementIcon from "../assets/icons/achievements/mtn-dew.svg?raw";
import chest1Icon from "../assets/icons/chests/chest-1.svg?raw";
import chest2Icon from "../assets/icons/chests/chest-2.svg?raw";
import chest3Icon from "../assets/icons/chests/chest-3.svg?raw";
import calmIcon from "../assets/icons/tempers/calm.svg?raw";
import hornsIcon from "../assets/icons/flares/horns.svg?raw";
import magentaFurIcon from "../assets/icons/textures/magenta-fur.svg?raw";
import characterLevel2Icon from "../assets/icons/character-levels/level-2.svg?raw";
import doritosGlassesIcon from "../assets/icons/gears/doritos-glasses.svg?raw";
import doritosChefsIcon from "../assets/icons/gears/doritos-chef's.svg?raw";
import capnCrunchIcon from "../assets/icons/gears/cap'n-crunch.svg?raw";
import cowboyHatIcon from "../assets/icons/gears/cawboy-hat.svg?raw";
import gatoradeGamerCapIcon from "../assets/icons/gears/gatorade-gamer-cap.svg?raw";

// Disable automatic attribute inheritance so we can control where class goes
defineOptions({
  inheritAttrs: false,
});

// Map all icons
const icons: Record<string, string> = {
  dna: dnaIcon,
  "dna-3d": dna3dIcon,
  scanner: scannerIcon,
  explore: exploreIcon,
  star: starIcon,
  shirt: shirtIcon,
  "notification-elipse": notificationElipseIcon,
  crown: crownIcon,
  "chewy-bar": chewyBarIcon,
  "liquid-mix": liquidMixIcon,
  "pepsi-hat": pepsiHatIcon,
  "egg-yellow": eggYellowIcon,
  "egg-dragon-skin": eggDragonSkinIcon,
  "egg-blue-red": eggBlueRedIcon,
  "pepsi-challenge": pepsiChallengeIcon,
  "doritos-challenge": doritosChallengeIcon,
  "mtn-dew-challenge": mtnDewChallengeIcon,
  "pepsi-achievement": pepsiAchievementIcon,
  "doritos-achievement": doritosAchievementIcon,
  "cheetos-achievement": cheetosAchievementIcon,
  "mtn-dew-achievement": mtnDewAchievementIcon,
  "chest-1": chest1Icon,
  "chest-2": chest2Icon,
  "chest-3": chest3Icon,
  calm: calmIcon,
  horns: hornsIcon,
  "magenta-fur": magentaFurIcon,
  "character-level-2": characterLevel2Icon,
  "doritos-glasses": doritosGlassesIcon,
  "doritos-chefs": doritosChefsIcon,
  "capn-crunch": capnCrunchIcon,
  "cowboy-hat": cowboyHatIcon,
  "gatorade-gamer-cap": gatoradeGamerCapIcon,
};

export type IconName = keyof typeof icons;

interface Props {
  name: IconName;
  size?: string | number;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: "currentColor",
});

const svgContent = computed(() => {
  let svg = icons[props.name];

  if (!svg) {
    console.warn(`Icon "${props.name}" not found`);
    return "";
  }

  // For gear and shirt icons, preserve original colors (blue and red)
  // For dna-3d, preserve original colors for 3D effect
  // For egg icons, preserve original colors for the egg designs
  // For challenge and achievement icons, preserve original colors
  // For chest icons, preserve original colors
  // For temper, flare, and texture icons, preserve original colors
  if (
    props.name !== "gear" &&
    props.name !== "shirt" &&
    props.name !== "dna-3d" &&
    !props.name.startsWith("egg-") &&
    !props.name.endsWith("-challenge") &&
    !props.name.endsWith("-achievement") &&
    !props.name.startsWith("chest-") &&
    props.name !== "calm" &&
    props.name !== "horns" &&
    props.name !== "magenta-fur" &&
    !props.name.startsWith("doritos-") &&
    props.name !== "capn-crunch" &&
    props.name !== "cowboy-hat" &&
    props.name !== "gatorade-gamer-cap"
  ) {
    // Replace hardcoded colors with currentColor
    svg = svg
      .replace(/fill="#[^"]*"/g, 'fill="currentColor"')
      .replace(/stroke="#[^"]*"/g, 'stroke="currentColor"')
      .replace(/fill="#000000"/g, 'fill="currentColor"');

    // Preserve fill="none" and stroke="none"
    svg = svg.replace(/fill="currentColor"([^>]*?)fill="none"/g, 'fill="none"');
    svg = svg.replace(
      /stroke="currentColor"([^>]*?)stroke="none"/g,
      'stroke="none"'
    );
  }

  // Set size
  svg = svg
    .replace(/width="[^"]*"/, `width="${props.size}"`)
    .replace(/height="[^"]*"/, `height="${props.size}"`);

  return svg;
});
</script>
