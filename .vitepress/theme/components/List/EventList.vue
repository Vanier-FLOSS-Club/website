<template>
  <Transition name="fade" mode="out-in">
    <div v-if="listData?.length" class="link-list">
      <div v-for="(type, index) in listData" :key="index" class="link-type-list">
        <div class="title">
          <h2 class="name">
            <span class="name-text">{{ type?.typeName || i18n('components.list.link-list.unknown-grouping') }}</span>
            <span v-if="showCount" class="name-count">({{ type?.typeList?.length || 0 }})</span>
          </h2>
          <span v-if="type?.typeDesc" class="tip">{{ type?.typeDesc }}</span>
        </div>
        <div class="all-link" v-if="type?.typeList">
          <a
            v-for="(link, index) in type.typeList"
            :class="[
              'link-card',
              's-card',
              {
                loss: type?.type === 'loss',
                'cf-friends-link': type?.type !== 'loss' && useFriendsLink,
              },
            ]"
            :key="index"
            :href="null"
            target="_blank"
          >
            <div class="data">
              <div class="event-header-row">
                <span :class="['name', { 'cf-friends-name': useFriendsLink }]">{{ link.name }}</span>
                <div
                  v-if="link.location"
                  class="event-location-inline"
                >
                  <i class="font-awesome fa-solid fa-map-location"></i>
                  <span class="event-location-text">{{ link.location }}</span>
                </div>
              </div>
              <span class="desc">{{ link.desc }}</span>
            </div>
            <div class="location-calendar-gap"></div>
            <div class="calendar-outer">
              <div class="calendar">
                <Calendar :date="link.time" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div v-else class="no-data">{{ i18n('components.list.link-list.no-data') }}</div>
  </Transition>
</template>

<script setup>
import { useI18n } from '@/utils/i18n'
import Calendar from '@/components/Aside/Widgets/Calendar.vue'

const { i18n } = useI18n()

const props = defineProps({
  listData: {
    type: [Array, String],
    default: () => [],
  },
  showCount: {
    type: Boolean,
    default: true,
  },
  useFriendsLink: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.link-list {
  .link-type-list {
    color: var(--main-color);
    margin-top: 2rem;
    .title {
      margin-left: 6px;
      margin-bottom: 1.6rem;
      .name {
        border-bottom: none;
        margin-bottom: 4px;
        .name-count {
          color: var(--main-font-second-color);
        }
      }
      .tip {
        color: var(--main-font-second-color);
      }
    }
    .all-link {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(1, 1fr);
      .link-card {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        min-height: 13rem;
        width: 100%;
        padding: 20px;
        &.loss {
          pointer-events: none;
        }
        .cover {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          min-width: 60px;
          margin-right: 20px;
          border-radius: 50%;
          overflow: hidden;
          background: linear-gradient(
              90deg,
              var(--main-card-border) 25%,
              var(--main-card-background) 37%,
              var(--main-card-border) 63%
          );
          background-size: 400% 100%;
          animation: skeleton-loading 1.4s ease infinite;
          transition: all 0.6s;
        }
        .calendar-outer {
          background: var(--main-font-color);
          padding: 0.2rem;
          border-radius: 1.3rem;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .calendar {
          background-color: var(--main-card-second-background);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          min-width: 7.5rem;
          min-height: 9.5rem;
          max-width: 100%;
          max-height: 100%;
          border-radius: 1.2rem;
        }
        .location-calendar-gap {
          width: 1rem;
        }
        .data {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .event-header-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            width: 100%;
            @media (max-width: 576px) {
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 0.5rem;
            }
            .name {
              font-weight: bold;
              font-size: 1.5rem;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              white-space: normal;
            }
            .event-location-inline {
              display: flex;
              align-items: center;
              font-size: 1.5rem;
                gap: 0.45em;
              .location-icon {
                vertical-align: center;
              }
              .event-location-text {
                font-weight: 500;
                font-size: 1.5rem;
                word-break: normal;
                vertical-align: center;
              }
            }
          }
          .desc {
            font-size: 1.2rem;
            margin-top: 1rem;
            line-height: 1.2;
            color: var(--main-font-second-color);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-clamp: none;
            -webkit-line-clamp: none;
            -webkit-box-orient: vertical;
            transition:
              color 0.3s,
              opacity 0.3s;
          }
        }
        .event-info-block {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          min-width: 320px;
          height: 100%;
          margin-left: 32px;
          background: none;
          box-shadow: none;
          padding: 0;
          gap: 18px;
        }
        .location-icon {
          color: var(--main-color);
        }
        &:hover {
          color: var(--main-card-background);
          background-color: var(--main-color);
          border-color: var(--main-color);
          box-shadow: 0 0 16px 6px var(--main-color-bg);
          .cover {
            margin-right: 6px;
            min-width: 0;
            opacity: 0;
            width: 0;
            height: 0;
          }
          .data {
            .desc {
              opacity: 0.7;
              color: var(--main-card-background);
            }
          }
        }
      }
      @media (max-width: 992px) {
        grid-template-columns: repeat(1, 1fr);
      }
      @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }
      @media (max-width: 576px) {
        .link-card {
          flex-direction: column;
          gap: 0.5rem;
          .calendar-outer {
            width: 100%;
            justify-content: flex-start;
            margin-bottom: 12px;
            .calendar {
              width: 100%;
              height: auto;
              min-width: 0;
              min-height: 0;
              max-width: 100%;
              max-height: 100%;
            }
          }
          .data {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .event-header-row {
              display: flex;
              align-items: center;
              width: 100%;
              @media (max-width: 576px) {
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 0.5rem;
              }
              .name {
                font-weight: bold;
                font-size: 1.5rem;
                overflow: hidden;
                display: -webkit-box;
                line-clamp: 1;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                white-space: normal;
              }
              .event-location-inline {
                display: flex;
                align-items: center;
                font-size: 1rem;
                gap: 0.45em;
                .location-icon {
                  vertical-align: center;
                }
                .event-location-text {
                  font-weight: 500;
                  font-size: 1rem;
                  word-break: normal;
                  vertical-align: center;
                }
              }
            }
          }
          .event-info-block {
            min-width: unset;
            width: 100%;
            margin-left: 0;
            margin-top: 12px;
            height: auto;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: row;
            gap: 12px;
            padding: 0;
          }
        }
      }
    }
  }
}
.no-data {
  text-align: center;
  margin-top: 40px;
  font-size: 1.4rem;
  font-weight: bold;
}
</style>
