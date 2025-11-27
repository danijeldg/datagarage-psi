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
import scannerIcon from "../assets/icons/scanner.svg?raw";
import exploreIcon from "../assets/icons/explore.svg?raw";
import starIcon from "../assets/icons/star.svg?raw";

// Disable automatic attribute inheritance so we can control where class goes
defineOptions({
  inheritAttrs: false,
});

// Map all icons
const icons: Record<string, string> = {
  dna: dnaIcon,
  scanner: scannerIcon,
  explore: exploreIcon,
  star: starIcon,
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

  // Set size
  svg = svg
    .replace(/width="[^"]*"/, `width="${props.size}"`)
    .replace(/height="[^"]*"/, `height="${props.size}"`);

  return svg;
});
</script>
