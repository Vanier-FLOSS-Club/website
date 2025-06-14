<!-- Home Page -->
<template>
  <div class="home">
    <Banner v-if="showHeader" :height="store.bannerType" />
    <!-- Main Content -->
    <div class="home-content">
      <div class="posts-content">
        <!-- Event Card -->
        <template v-if="eventCardVisible">
          <div class="event-tip">Upcoming Next: </div>
          <EventCard class="home-event" />
        </template>
        <!-- All Categories or Tags  -->
        <TypeBar :type="showTags ? 'tags' : 'categories'" />
        <!-- List of Posts -->
        <PostList :listData="postData" />
        <!-- Page for Post List -->
        <Pagination
          :total="allListTotal"
          :page="Number(page)"
          :limit="postSize"
          :useParams="showCategories || showTags ? true : false"
          :routePath="
            showCategories
              ? `/pages/categories/${showCategories}`
              : showTags
                ? `/pages/tags/${showTags}`
                : ''
          "
        />
      </div>
      <!-- Sidebar -->
      <Aside />
    </div>
  </div>
</template>

<script setup>
import { mainStore } from "@/store";
import EventCard from "../components/Tags/EventCard.vue";
import eventData from "../assets/auto-event-data/output/eventData.mjs";

const { theme } = useData();
const store = mainStore();
const props = defineProps({
  showHeader: {
    type: Boolean,
    default: false,
  },
  page: {
    type: Number,
    default: 1,
  },
  showCategories: {
    type: [null, String],
    default: null,
  },
  showTags: {
    type: [null, String],
    default: null,
  },
  eventCardVisible: {
    type: Boolean,
    default: false,
  },
});

// Number of Posts per Page
const postSize = theme.value.postSize;

// Number of Posts in Total
const allListTotal = computed(() => {
  const data = props.showCategories
    ? theme.value.categoriesData[props.showCategories]?.articles
    : props.showTags
      ? theme.value.tagsData[props.showTags]?.articles
      : theme.value.postData;
  return data ? data.length : 0;
});

// Get Number of Current Page
const getCurrentPage = () => {
  if (props.showCategories || props.showTags) {
    if (typeof window === "undefined") return 0;
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page");
    if (!page) return 0;
    const currentPage = Number(page);
    return currentPage ? currentPage - 1 : 0;
  }
  return props.page ? props.page - 1 : 0;
};

// Compute Data Related to Posts
const postData = computed(() => {
  const page = getCurrentPage();
  console.log("Current Page：", page);
  let data = null;
  // Category Data
  if (props.showCategories) {
    data = theme.value.categoriesData[props.showCategories]?.articles;
  }
  // Tag Data
  else if (props.showTags) {
    data = theme.value.tagsData[props.showTags]?.articles;
  }
  // Post Data
  else {
    data = theme.value.postData;
  }
  // Return All Data
  return data ? data.slice(page * postSize, page * postSize + postSize) : [];
});

// Determine if there exist events
const eventCardVisible = computed(() => {
  return (
    Array.isArray(eventData) &&
    eventData.length > 0 &&
    Array.isArray(eventData[0].typeList) &&
    eventData[0].typeList.length > 0
  );
});

// Restore Y Scroll Position
const restoreScrollY = (val) => {
  if (typeof window === "undefined" || val) return false;
  const scrollY = store.lastScrollY;
  nextTick().then(() => {
    console.log("Y Scroll Position: ", scrollY);
    // Smooth Scroll to Y Position
    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    });
    // Clear Scroll Position
    store.lastScrollY = 0;
  });
};

// Listen for End of Loading
watch(
  () => store.loadingStatus,
  (val) => restoreScrollY(val),
);
</script>

<style lang="scss" scoped>
.home {
  .event-tip {
    font-size: 1.75rem;
    font-weight: bold;
    color: var(--main-color);
    margin-bottom: 1rem;
    margin-top: 1rem;
    margin-left: 0.5rem;
    text-align: left;
    font-family: var(--main-font-family);

    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }
  .home-event {
    margin-bottom: 2rem;
  }
  .home-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    .posts-content {
      width: calc(100% - 300px);
      transition: width 0.3s;
    }
    .main-aside {
      width: 300px;
      padding-left: 1rem;
    }
    @media (max-width: 1200px) {
      .posts-content {
        width: 100%;
      }
      .main-aside {
        display: none;
      }
    }
  }
}
</style>
