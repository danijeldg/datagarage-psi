import { onMounted, onUnmounted } from "vue";

/**
 * Composable that disables body scroll when component is mounted
 * and restores it when component is unmounted
 */
export function useDisableBodyScroll() {
  onMounted(() => {
    document.body.style.overflow = "hidden";
  });

  onUnmounted(() => {
    document.body.style.overflow = "";
  });
}

