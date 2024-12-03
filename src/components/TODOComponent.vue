<script setup lang="ts">
import { PropType, ref, watch } from 'vue';

type Tache = {
  intitule: string;
  etat: string;
  dateech: string;
};

const props = defineProps({
  taches: {
    type: Array as PropType<Tache[]>,
    required: true,
  },
  deleteTask: {
    type: Function,
    required: true,
  },
});

const localTaches = ref([...props.taches]);

watch(
  () => props.taches,
  (newT) => {
    localTaches.value = [...newT];
  },
  { deep: true }
);
</script>

<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Tâche</th>
          <th>État</th>
          <th>Date d'échéance</th>
          <th>Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in localTaches" :key="index">
          <td>
            <span class="intitule">{{ item.intitule }}</span>
          </td>
          <td>
            <span class="etat">{{ item.etat }}</span>
          </td>
          <td class="date">{{ item.dateech }}</td>
          <td class="deltebtn">
            <!-- Appel de deleteTask via la prop -->
            <button class="delete-btn" @click="props.deleteTask(index)">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  margin: 20px auto;
  max-width: 800px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
}

table {
  width: 100%;
  border-collapse: collapse;
  color: #e7f5e7;
}

thead {
  background: linear-gradient(45deg, #00855a, #004c34);
  color: #ffffff;
}

th,
td {
  padding: 15px;
  text-align: left;
  border: 1px solid #2b2b2b;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}

th {
  font-weight: bold;
  text-transform: uppercase;
}

tbody tr {
  background: rgba(26, 26, 26, 0.9);
  transition: background 0.3s ease;
}

tbody tr:hover {
  background: rgba(33, 33, 33, 0.95);
}

td .etat {
  padding: 5px 10px;
  border-radius: 8px;
  background: rgba(43, 43, 43, 0.8);
  color: #86e386;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
}

td .date {
  font-size: 14px;
  font-style: italic;
  color: #a9f5a9;
}

td .intitule {
  max-width: 65px;
  overflow: auto;
  text-overflow: clip;
  white-space: nowrap;
  color: #e7f5e7;
  display: block;
}

td .intitule::-webkit-scrollbar {
  height: 8px;
  background: rgba(0, 0, 0, 0.2);
}

td .intitule::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #00ff9d, #006a3d);
  border-radius: 4px;
}

td .intitule::-webkit-scrollbar-thumb:hover {
  background: #00e085;
}

td .delete-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #ff4d4d, #b20000);
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

td .delete-btn:hover {
  background: linear-gradient(45deg, #ff6666, #cc0000);
  transform: scale(1.1);
}

.table-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(45deg, #00ff9d, #006a3d);
  z-index: -1;
  filter: blur(20px);
  opacity: 0.15;
}
</style>
