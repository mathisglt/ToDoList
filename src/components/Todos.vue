<!-- Todos -->
<template>
  <div class="app-container">
    <header>
      <h1>Gestionnaire de Tâches</h1>
    </header>
    <main>
      <div class="content-wrapper">
        <div class="task-list">
          <TODOComponent :taches="taches" />
        </div>
        <div class="task-form">
          <form @submit.prevent="addTask">
            <div class="form-group">
              <label for="taskName">Nom de la tâche</label>
              <input v-model="newTask.intitule" id="taskName" type="text" placeholder="Entrer une tâche" required />
            </div>
            <div class="form-group">
              <label for="dueDate">Date d'échéance</label>
              <input v-model="newTask.dateech" id="dueDate" type="date" required />
            </div>
            <button type="submit">Ajouter</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import TODOComponent from '@/components/TODOComponent.vue';

type Tache = {
  intitule: string;
  etat: string;
  dateech: string;
};

const taches = reactive<Tache[]>([]);

const newTask = ref({
  intitule: '',
  etat: 'A faire',
  dateech: '',
});

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
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.app-container {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(45deg, #00855a, #004c34);
  color: #e7f5e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  padding: 20px;
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
  width: 90%;
  max-width: 1200px;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
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
  padding: 15px;
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
input[type="date"] {
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  outline: none;
  font-size: 14px;
  transition: box-shadow 0.2s ease;
}

input[type="text"]:focus,
input[type="date"]:focus {
  box-shadow: 0 0 5px rgba(0, 255, 157, 0.8);
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #00b368, #007d48);
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;
}

button:hover {
  background: linear-gradient(45deg, #00e676, #009a59);
  transform: scale(1.05);
}
</style>
