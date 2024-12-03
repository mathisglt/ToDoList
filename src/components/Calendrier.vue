<script lang="ts" setup>
import { defineProps, computed } from 'vue';

type Tache = {
  intitule: string;
  etat: string;
  dateech: string;
};

const props = defineProps<{
  taches: Tache[];
}>();

const taskDates = computed(() => new Set(props.taches.map((tache) => tache.dateech)));

const today = new Date();
const daysInMonth = computed(() => {
  const totalDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  return Array.from({ length: totalDays }, (_, i) => ({
    day: i + 1,
    date: new Date(today.getFullYear(), today.getMonth(), i + 1).toISOString().split('T')[0],
  }));
});
</script>

<template>
  <div class="calendar">
    <div class="calendar-grid">
      <div v-for="day in daysInMonth" :key="day.date" class="calendar-cell"
        :class="{ 'task-day': taskDates.has(day.date) }">
        <span>{{ day.day }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar {
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.9);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  max-width: 800px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.calendar-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  font-size: 14px;
  color: #c3ffc3;
  position: relative;
  text-align: center;
}

.calendar-cell.task-day::after {
  content: '';
  position: absolute;
  bottom: 5px;
  width: 8px;
  height: 8px;
  background: #00ff9d;
  border-radius: 50%;
}
</style>
