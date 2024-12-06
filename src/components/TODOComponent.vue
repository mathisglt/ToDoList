<script setup lang="ts">
import { PropType, ref, computed, watch } from 'vue';

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
  deleteAllTasks: {
    type: Function,
    required: true,
  },
  deleteCompletedTasks: {
    type: Function,
    required: true,
  },
});

const localTaches = ref([...props.taches]);
const filter = ref<'Toutes' |'Non Terminées' | 'Terminées'>('Toutes');
const editingIndex = ref<number | null>(null);

watch(
  () => props.taches,
  (newT) => {
    localTaches.value = [...newT];
  },
  { deep: true }
);

const filteredTaches = computed(() => {
  if (filter.value === 'Toutes') {
    return localTaches.value;
  }

  return localTaches.value.filter((tache) => {
    if (filter.value === 'Non Terminées') {
      return tache.etat === 'A faire' || tache.etat === 'En cours';
    } else if (filter.value === 'Terminées') {
      return tache.etat === 'Terminé';
    }
    return tache.etat === 'A faire';
  });
});

const startEditing = (index: number) => {
  editingIndex.value = index;
};
const stopEditing = () => {
  editingIndex.value = null;
};
</script>


<template>
  <div v-if="localTaches.length > 0" class="filters">
    <div class="buttons-container">
      <div class="filter-buttons">
        <button :class="{ active: filter === 'Toutes' }" @click="filter = 'Toutes'">
          Toutes les tâches
        </button>
        <button :class="{ active: filter === 'Non Terminées' }" @click="filter = 'Non Terminées'">
          À faire
        </button>
        <button :class="{ active: filter === 'Terminées' }" @click="filter = 'Terminées'">
          Fait
        </button>
      </div>
      <div class="action-buttons">
        <button class="delete-all-btn" @click="props.deleteAllTasks()">
          Supprimer toutes les tâches
        </button>
        <button class="delete-completed-btn" @click="props.deleteCompletedTasks()">
          Supprimer les tâches terminées
        </button>
      </div>
    </div>
  </div>

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
        <tr v-for="(item, index) in filteredTaches" :key="index">
          <td>
            <span v-if="editingIndex !== index" class="intitule" @dblclick="startEditing(index)">
              {{ item.intitule }}
            </span>
            <input v-else v-model="item.intitule" @blur="stopEditing" class="edit-input" />
          </td>
          <td>
            <span class="etat">{{ item.etat }}</span>
          </td>
          <td class="date">{{ item.dateech }}</td>
          <td class="deltebtn">
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
  background: linear-gradient(45deg, #00855a, #006243);
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
  max-width: 200px;
}

td .intitule {
  width: 200px;
  overflow: auto;
  scrollbar-width: 190px;
  white-space: nowrap;
  color: #e7f5e7;
  display: block;
}

td .intitule::-webkit-scrollbar {
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

td .intitule::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #00ff9d, #009e5c);
  border-radius: 5px;
  transition: background 0.3s ease;
}

td .intitule::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #00ffb5, #00a96b);
}


td .delete-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #ff4d4d9f, #ff4d4dd6);
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

td .delete-btn:hover {
  background: linear-gradient(45deg, #ff4d4dd7, #ff4d4de7);

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

.buttons-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 20px;
  background: linear-gradient(45deg, #1e4d3417, #00381f0f);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.action-buttons {
  margin-left: 10px;
}

.filter-buttons,
.action-buttons {
  display: flex;
  gap: 10px;
}

button {
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  border: 1px solid #00855a;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease, border-color 0.3s ease;
}


button.active {
  background: linear-gradient(145deg, #00855a, #004c34);
  border-color: #00b368;
}
input[type="date"] {
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  outline: none;
  font-size: 14px;
  width: 100%;
  max-width: 200px; /* Limite la largeur */
  display: block;
  margin: 0 auto; /* Centrage horizontal */
  transition: box-shadow 0.3s ease, background 0.3s ease;
}

input[type="date"]:focus {
  box-shadow: 0 0 5px rgba(0, 255, 157, 0.8);
  background: rgba(26, 26, 26, 0.8);
}

.delete-all-btn,
.delete-completed-btn {
  background: #b72525;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


</style>
