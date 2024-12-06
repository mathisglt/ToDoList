<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="app-container">
    <main>
      <header>
        <h1>Gestionnaire de Tâches</h1>
      </header>
      <div class="content-wrapper">
        <div class="task-list">
          <TODOComponent :taches="taches" :deleteTask="deleteTask" :deleteAllTasks="deleteAllTasks"
            :deleteCompletedTasks="deleteCompletedTasks" />
        </div>
        <div class="task-form">
          <form @submit.prevent="addTask">
            <div class="form-group">
              <label class="form-label" for="taskName">Nom de la tâche</label>
              <input v-model="newTask.intitule" id="taskName" type="text" placeholder="Entrer une tâche" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="dueDate">Date d'échéance</label>
              <vue-flatpickr v-model="newTask.dateech" :config="flatpickrConfig" placeholder="Sélectionner une date" />
            </div>
            <div class="form-group">
              <label class="form-label">État</label>
              <div class="button-group">
                <button type="button" class="state-button" :class="{ active: newTask.etat === 'A faire' }"
                  @click="newTask.etat = 'A faire'">
                  À faire
                </button>
                <button type="button" class="state-button" :class="{ active: newTask.etat === 'En cours' }"
                  @click="newTask.etat = 'En cours'">
                  En cours
                </button>
                <button type="button" class="state-button" :class="{ active: newTask.etat === 'Terminé' }"
                  @click="newTask.etat = 'Terminé'">
                  Terminé
                </button>
              </div>
            </div>

            <button class="add-button" type="submit">Ajouter</button>
          </form>
          <div class="calendar-section">
            <Calendrier :taches="taches" />
          </div>
        </div>
      </div>
      <footer>
        <span v-if="tasktodo !== 0">Nombre de tâches non terminées : {{ tasktodo }}</span>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import VueFlatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import TODOComponent from '@/components/TODOComponent.vue';
import Calendrier from '@/components/Calendrier.vue';

type Tache = {
  intitule: string;
  etat: string;
  dateech: string;
};

const taches = reactive<Tache[]>([]);

const tasktodo = computed(() =>
  taches.filter(task => task.etat === "En cours" || task.etat === "A faire").length
);

const newTask = ref({
  intitule: '',
  etat: 'A faire',
  dateech: '',
});

const flatpickrConfig = {
  dateFormat: 'Y-m-d',
  allowInput: true,
  static: true,
  minDate: 'today',
};

const addTask = () => {
  if (newTask.value.intitule && newTask.value.dateech) {
    taches.push({
      intitule: newTask.value.intitule,
      etat: newTask.value.etat,
      dateech: newTask.value.dateech,
    });
    newTask.value.intitule = '';
    newTask.value.dateech = '';
  } else {
    alert('Veuillez remplir tous les champs.');
  }
};

const deleteTask = (index: number) => {
  taches.splice(index, 1);
};
const deleteAllTasks = () => {
  taches.splice(0, taches.length);
};

const deleteCompletedTasks = () => {
  const restantes = taches.filter(
    (tache) => tache.etat === 'A faire' || tache.etat === 'En cours'
  );
  taches.splice(0, taches.length, ...restantes);
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  background: #00463d;
  color: #e7f5e7;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #00855a, #006243);
  justify-content: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #c3ffc3;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

main {
  background: rgba(26, 26, 26, 0.95);
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 100%;
  max-width: 80vw;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

select {
  padding: 12px;
  border: 1px solid #00855a;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  outline: none;
  font-size: 14px;
}

select:focus {
  background: rgba(26, 26, 26, 0.8);
  border-color: #00b368;
}

.task-list {
  flex: 2;
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 10px;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
}

.task-form {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  padding: 10px;
  border-radius: 10px;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  margin-bottom: 8px;
  font-weight: 600;
  color: #c3ffc3;
}

input[type="text"],
vue-flatpickr {
  padding: 12px;
  border: 1px solid #00855a;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  outline: none;
  font-size: 14px;
  width: 80%;
  display: block;
  margin: 0 auto;
}

input[type="text"]:focus,
vue-flatpickr:focus {
  background: rgba(26, 26, 26, 0.8);
  border-color: #00b368;
}

.button-group {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 10px;
}
.form-label {
  display: flex;
  gap: 20px;
  justify-content: center;

}

.state-button,button {
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

.state-button.active {
  background: linear-gradient(145deg, #00855a, #004c34);
  border-color: #00b368;
}

.add-button {
  padding: 10px 15px;
  border: 1px solid #00b368;
  border-radius: 8px;
  background: linear-gradient(45deg, #00b368, #007d48);
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 80%;
  display: block;
  margin: 0 auto;
}

.add-button:focus {
  outline: none;
  background: linear-gradient(45deg, #00e676, #009a59);
}
</style>
