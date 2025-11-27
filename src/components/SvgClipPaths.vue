<template>
  <!-- SVG definitions for clip-paths in app -->
  <svg width="0" height="0" style="position: absolute; pointer-events: none">
    <defs>
      <!-- Rounded trapezoid name notch -->
      <clipPath id="roundedTrapezoid" clipPathUnits="objectBoundingBox">
        <path
          d="
          M 0.02,0
          Q 0,0 0,0.02
          L 0.18,0.95
          Q 0.2,1 0.225,1
          L 0.775,1
          Q 0.8,1 0.82,0.95
          L 1,0.02
          Q 1,0 0.98,0
          L 0.02,0
          Z
        "
        />
      </clipPath>

      <clipPath id="cutoutTrapezoid" clipPathUnits="objectBoundingBox">
        <!-- Rectangle with trapezoid cutout at the top - all edges rounded -->
        <path
          d="
          M 0.02,0
          L 0.28,0
          Q 0.3,0 0.31,0.02
          L 0.37,0.58
          Q 0.38,0.60 0.4,0.60
          L 0.6,0.60
          Q 0.62,0.60 0.63,0.58
          L 0.69,0.02
          Q 0.7,0 0.72,0
          L 0.98,0
          Q 1,0 1,0.02
          L 1,0.98
          Q 1,1 0.98,1
          L 0.02,1
          Q 0,1 0,0.98
          L 0,0.02
          Q 0,0 0.02,0
          Z
        "
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup lang="ts">
// This component only defines SVG clip-paths
// It doesn't render anything visible, just definitions that other components can use
</script>
