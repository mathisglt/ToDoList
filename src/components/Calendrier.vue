<script lang="ts" setup>
import { defineProps, computed, ref } from 'vue';

type Tache = {
  intitule: string;
  etat: string;
  dateech: string;
};

const props = defineProps<{
  taches: Tache[];
}>();

const taskDates = computed(() => new Set(props.taches.map((tache) => tache.dateech)));

const tasksByDate = computed(() => {
  const map = new Map<string, Tache[]>();
  props.taches.forEach((tache) => {
    if (!map.has(tache.dateech)) {
      map.set(tache.dateech, []);
    }
    map.get(tache.dateech)!.push(tache);
  });
  return map;
});

const currentDate = ref(new Date());

const currentMonthLabel = computed(() => {
  return currentDate.value.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
});

const changeMonth = (delta: number) => {
  currentDate.value = new Date(currentDate.value.setMonth(currentDate.value.getMonth() + delta));
};

const daysInMonth = computed(() => {
  const totalDays = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    0
  ).getDate();
  return Array.from({ length: totalDays }, (_, i) => {
  const dayDate = new Date(Date.UTC(currentDate.value.getFullYear(), currentDate.value.getMonth(), i + 1));
  return {
    day: dayDate.getUTCDate(),
    date: dayDate.toISOString().split('T')[0],
  };
});


});
</script>


<template>
  <div class="calendar">
    <div class="calendar-header">
      <button @click="changeMonth(-1)" class="nav-button">&lt;</button>
      <span class="month-label">{{ currentMonthLabel }}</span>
      <button @click="changeMonth(1)" class="nav-button">&gt;</button>
    </div>
    <div class="calendar-grid">
      <div v-for="day in daysInMonth" :key="day.date" class="calendar-cell"
        :class="{ 'task-day': taskDates.has(day.date) }">
        <span>{{ day.day }}</span>
        <div v-if="tasksByDate.has(day.date)" class="tooltip">
          <ul>
            <li v-for="task in tasksByDate.get(day.date)" :key="task.intitule">
              <strong>{{ task.intitule }}</strong> - {{ task.etat }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.calendar {
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background: rgba(22, 22, 22, 0.8);
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
  cursor: pointer;
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

.calendar-cell .tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(8, 216, 119, 0.8);
  color: white;
  padding: 8px;
  border-radius: 5px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  z-index: 10;
}

.calendar-cell:hover .tooltip {
  opacity: 1;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.nav-button {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #c3ffc3;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.month-label {
  color: #c3ffc3;
  font-size: 18px;
  text-transform: capitalize;
}
</style>
