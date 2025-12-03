<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-end justify-center modal-overlay"
        @click.self="close"
      >
        <div
          ref="modalContent"
          class="modal-content w-full max-w-full h-[90vh] rounded-t-3xl overflow-hidden flex flex-col"
          @click.stop
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <!-- Drag Handle -->
          <div class="flex justify-center pt-3 pb-2">
            <div class="w-12 h-1.5 bg-[#1A182C] rounded-full"></div>
          </div>

          <!-- Search Bar -->
          <div class="px-4 mb-4 pt-2">
            <div
              class="search-bar flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-md border border-white/15 bg-white/5"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-white/60"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                v-model="searchQuery"
                type="text"
                :placeholder="searchPlaceholder"
                class="flex-1 bg-transparent border-none outline-none text-white placeholder-white/60 text-callout"
              />
            </div>
          </div>

          <!-- Category Filters -->
          <div class="px-4 mb-4 overflow-x-auto no-scrollbar">
            <div class="flex gap-2">
              <button
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                class="category-filter px-4 py-2 rounded-xl text-callout font-medium whitespace-nowrap transition-all"
                :class="
                  selectedCategory === category
                    ? 'category-active text-white'
                    : 'text-white/60 hover:text-white/80'
                "
              >
                {{ category }}
              </button>
            </div>
          </div>

          <!-- Items Grid -->
          <div class="flex-1 overflow-y-auto p-4">
            <div class="grid grid-cols-3 gap-4">
              <ItemCard
                v-for="item in filteredItems"
                :key="item.id"
                :item="item"
                :type="itemType"
                class="cursor-pointer"
                @click="selectItem(item)"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ItemCard from "./ItemCard.vue";
import type { Item } from "./ItemsSection.vue";

const modalContent = ref<HTMLElement | null>(null);
let touchStartY = 0;
let touchCurrentY = 0;
let isDragging = false;

const handleTouchStart = (e: TouchEvent) => {
  touchStartY = e.touches[0].clientY;
  isDragging = false;
};

const handleTouchMove = (e: TouchEvent) => {
  if (!modalContent.value) return;

  touchCurrentY = e.touches[0].clientY;
  const deltaY = touchCurrentY - touchStartY;

  // Only allow dragging down
  if (deltaY > 0) {
    isDragging = true;
    modalContent.value.style.transform = `translateY(${deltaY}px)`;
  }
};

const handleTouchEnd = () => {
  if (!modalContent.value) return;

  const deltaY = touchCurrentY - touchStartY;

  // If dragged down more than 100px, close the modal
  if (isDragging && deltaY > 100) {
    close();
  } else {
    // Reset position
    modalContent.value.style.transform = "";
  }

  isDragging = false;
  touchStartY = 0;
  touchCurrentY = 0;
};

interface Props {
  isOpen: boolean;
  title?: string;
  searchPlaceholder?: string;
  categories?: string[];
  items?: Item[];
  itemType?:
    | "recent-items"
    | "eggs"
    | "challenges"
    | "achievements"
    | "chests"
    | "gears";
}

const props = withDefaults(defineProps<Props>(), {
  title: "Select Item",
  searchPlaceholder: "Search Items",
  categories: () => ["All"],
  items: () => [],
  itemType: "recent-items",
});

const emit = defineEmits<{
  close: [];
  select: [item: Item];
}>();

const searchQuery = ref("");
const selectedCategory = ref(props.categories[0] || "All");

const filteredItems = computed(() => {
  let filtered = props.items;

  // Filter by category
  if (selectedCategory.value !== "All") {
    // For now, show all items since we don't have category on items yet
    // This can be extended later if items have a category property
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
  }

  return filtered;
});

const close = () => {
  emit("close");
};

const selectItem = (item: Item) => {
  emit("select", item);
  close();
};
</script>

<style scoped lang="css">
.modal-overlay {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}

.modal-content {
  background: linear-gradient(90deg, #1d1a32 50%, #574f98 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease-out;
  touch-action: pan-y;
}

.search-bar {
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.08) inset,
    0 4px 6px rgba(0, 0, 0, 0.15);
}

.category-filter {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
}

.category-filter:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
}

.category-active {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(79, 209, 197, 0.5);
  position: relative;
}

.category-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #4fd1c5;
  border-radius: 2px 2px 0 0;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: translateY(100%);
}
</style>
