<template>
  <div class="link">
    <Banner type="page" title="Upcoming Events" desc="Check Out The Next FLOSS Event!">
      <template v-slot:header-slot>
      </template>
    </Banner>
    <!-- Link Data -->
    <EventList :listData="linkData" :useFriendsLink="true" />
  </div>
</template>

<script setup>
import { smoothScrolling } from "@/utils/helper";
import linkData from "@/assets/auto-event-data/output/eventData.mjs";
import { useI18n } from '@/utils/i18n'

const { i18n } = useI18n()

const allLinkData = computed(() => {
  return linkData.flatMap((item) => item.typeList);
});

const randomJump = () => {
  try {
    const friendList = allLinkData.value;
    const randomList = friendList[Math.floor(Math.random() * friendList.length)];
    if (randomList?.url) window.open(randomList.url, "_blank");
  } catch (error) {
    console.error("Error Accessing Event Link: ", error);
    $message.error("Error Accessing Event Link. Please try again.");
  }
};
</script>

<style lang="scss" scoped>
.link {
  margin-bottom: 4rem;
  .banner-page {
    // min-height: 440px;
    min-height: auto;
    .menu {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-start;
      margin-bottom: auto;
      .menu-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46px;
        padding: 12px 18px;
        border-radius: 8px;
        background-color: var(--main-card-second-background);
        border: 1px solid var(--main-card-border);
        box-shadow: 0 8px 16px -4px var(--main-border-shadow);
        transition: all 0.3s;
        cursor: pointer;
        .font-awesome {
          font-size: 18px;
          margin-right: 8px;
          transition: color 0.3s;
        }
        &.random {
          color: var(--main-color);
          .font-awesome {
            color: var(--main-color);
          }
        }
        &.add {
          color: var(--main-card-second-background);
          background-color: var(--main-font-color);
          .font-awesome {
            font-size: 22px;
            margin-right: 6px;
            color: var(--main-card-second-background);
          }
        }
        &:last-child {
          margin-left: 20px;
        }
        &:hover {
          color: #fff;
          background-color: var(--main-color);
          box-shadow: 0 8px 16px -4px var(--main-color-bg);
          .font-awesome {
            color: #fff;
          }
        }
      }
    }
    .link-group {
      position: absolute;
      left: 0;
      top: 140px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow: hidden;
      .link-group-item {
        display: flex;
        flex-direction: column;
        .link-logo {
          margin-right: 1.2rem;
          .link-logo-img {
            width: 120px;
            height: 120px;
            min-width: 120px;
            border-radius: 50%;
            overflow: hidden;
          }
          &:nth-of-type(2n) {
            margin-top: 1.2rem;
            transform: translate(-60px);
          }
        }
      }
    }
    @media (max-width: 800px) {
      min-height: auto;
      .menu,
      .link-group {
        display: none;
      }
    }
  }
}
</style>
