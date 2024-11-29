<script setup lang="ts">
import { ref, reactive } from 'vue';
import TODOComponent from '@/components/TODOComponent.vue';

type Tache = {
  intitule: string;
  etat: string;
  dateech: string;
};

const taches = reactive<Tache[]>([
  { intitule: 'WE', etat: 'En cours', dateech: '2024-11-28' },
  { intitule: 'CSE', etat: 'A faire', dateech: '2024-11-28' },
  { intitule: 'Bar', etat: 'A faire', dateech: '2024-11-28' },
]);

const newTask = ref({
  intitule: '',
  etat: 'A faire',
  dateech: '',
});

const addTask = () => {
  if (newTask.value.intitule && newTask.value.dateech) {
    taches.push({ intitule: newTask.value.intitule, etat: newTask.value.etat, dateech: newTask.value.dateech });
    newTask.value.intitule = '';
    newTask.value.dateech = '';
  } else {
    alert('Veuillez remplir tous les champs.');
  }
};
</script>

<template>
  <div>
    <TODOComponent :taches="taches" />

    <form @submit.prevent="addTask" class="ajoutTache">
      <div class="ajoutTache">
        <label for="nomTache">Nom de la tâche: </label>
        <input v-model="newTask.intitule" id="nomTache" required />
      </div>
      <div class="ajoutTache">
        <label for="dateech">Date d'échéance: </label>
        <input v-model="newTask.dateech" id="dateech" type="date" required />
      </div>
      <div class="ajoutTache">
        <input type="submit" value="Ajouter" />
      </div>
    </form>
  </div>
</template>

<style scoped>
.ajoutTache {
  margin-bottom: 1em;
}
</style>
