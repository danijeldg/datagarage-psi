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
  if (
    props.name !== "gear" &&
    props.name !== "shirt" &&
    props.name !== "dna-3d"
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
