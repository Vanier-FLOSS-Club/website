<template>
  <div class="calendar-bg">
    <div class="calendar-date-block">
      <div class="text-lg font-handwriting calendar-date-underline">{{ monthYear }}</div>
      <div class="border-b border-yellow-300 my-1 w-4/5 mx-auto"></div>
      <div class="calendar-date-inner-block text-5xl font-bold py-4">{{ day }}</div>
    </div>
    <div class="calendar-divider"></div>
    <div class="calendar-time-block">
      <span class="calendar-time-text">{{ timeStr }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  date: {
    type: [String, Date],
    default: null
  }
})

const dateObj = computed(() => {
  if (!props.date) return null
  const d = typeof props.date === 'string' ? new Date(props.date) : props.date
  return isNaN(d) ? null : d
})

const monthYear = computed(() => {
  if (!dateObj.value) return ''
  return dateObj.value.toLocaleString('en-CA', { month: 'long', year: 'numeric' })
})
const day = computed(() => {
  if (!dateObj.value) return ''
  return dateObj.value.getDate()
})
const timeStr = computed(() => {
  if (!dateObj.value) return ''
  return dateObj.value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
})
</script>

<style scoped>
.calendar-bg {
  width: 10rem;
  height: 100%;
  border: 2rem;
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box;
  transition: width 0.2s, height 0.2s;
}
.calendar-date-block {
  color: var(--main-font-color);
  text-align: center;
  padding: 0.75rem 0.5rem 0.5rem 0.5rem;
  font-size: 1.3rem;
}
.calendar-date-underline {
  border-bottom: 2px solid var(--main-color);
  display: inline-block;
  padding-bottom: 2px;
}
.calendar-date-inner-block {
  line-height: 2.3;
  font-size: 2.5rem;
}
.calendar-divider {
  height: 2px;
  background: var(--main-color);
  margin: 0;
}
.calendar-time-block {
  background: var(--main-color);
  color: #222;
  text-align: center;
  padding: 0.75rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 100%;
}
.calendar-time-text {
  font-size: 1.25rem;
  font-family: var(--main-font-family) !important;
  font-weight: bold;
  letter-spacing: 0.05em;
}
.font-handwriting {
  font-family: var(--main-font-family) !important;
}

@media (max-width: 576px) {
  .calendar-bg {
    width: 100%;
    height: auto;
    min-width: 0;
    min-height: 0;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    padding: 0;
  }
  .calendar-date-block,
  .calendar-time-block {
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    min-width: 0;
    min-height: 0;
    flex: 1 1 0;
    box-sizing: border-box;
  }
  .calendar-date-block {
    border-right: 2px solid var(--main-color);
    border-bottom: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .calendar-date-inner-block {
    font-size: 1.5rem;
    line-height: 1.5;
    padding: 0.2em 0;
  }
  .calendar-time-block {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    min-width: 0;
    min-height: 0;
  }
  .calendar-divider {
    display: none;
  }
}
</style>
