<script setup>
import Calendar from '@/components/Aside/Widgets/Calendar.vue'
import eventData from '@/assets/eventData.mjs'

const event = eventData[0]?.typeList?.[0] || {}
const url = '/pages/upcoming'
</script>

<template>
  <a
    v-if="url"
    class="event-card link-card s-card"
    :href="url"
    target="_self"
    rel="noopener"
  >
    <div class="data">
      <div class="event-header-row">
        <span class="name">{{ event.name }}</span>
        <div v-if="event.location" class="event-location-inline">
          <i class="font-awesome fa-solid fa-map-location"></i>
          <span class="event-location-text">{{ event.location }}</span>
        </div>
      </div>
      <span class="desc">{{ event.desc }}</span>
    </div>
    <div class="location-calendar-gap"></div>
    <div class="calendar-outer">
      <div class="calendar">
        <Calendar :date="event.time" />
      </div>
    </div>
  </a>
  <div
    v-else
    class="event-card link-card s-card"
  >
    <div class="data">
      <div class="event-header-row">
        <span class="name">{{ event.name }}</span>
        <div v-if="event.location" class="event-location-inline">
          <i class="font-awesome fa-solid fa-map-location"></i>
          <span class="event-location-text">{{ event.location }}</span>
        </div>
      </div>
      <span class="desc">{{ event.desc }}</span>
    </div>
    <div class="location-calendar-gap"></div>
    <div class="calendar-outer">
      <div class="calendar">
        <Calendar :date="event.time" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Style same as EventList.vue
.event-card {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 13rem;
  width: 100%;
  padding: 20px;
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
      @media (max-width: 576px) {
        font-size: 1rem;
      }
    }
  }
  .location-calendar-gap {
    width: 1rem;
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
  @media (max-width: 576px) {
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
    .location-calendar-gap {
      display: none;
    }
    .data {
      .event-header-row {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.5rem;
        .name {
          font-size: 1.5rem;
        }
        .event-location-inline {
          font-size: 1rem;
          .event-location-text {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>
