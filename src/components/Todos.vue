<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import TODOComponent from './TODOComponent.vue';

const taches = ref([
  { intitule: 'WE', etat: 'En cours', dateech: '2024-11-28' },
  { intitule: 'CSE', etat: 'En attente', dateech: '2024-11-28' },
  { intitule: 'Bar', etat: 'En attente', dateech: '2024-11-28' }
]);
</script>

<template>
  <TODOComponent :taches="taches" />
</template>
