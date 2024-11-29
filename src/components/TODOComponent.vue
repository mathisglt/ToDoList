<script setup lang="ts">
import { PropType } from 'vue';
type Tache = {
  intitule: string;
  etat: string;
  dateech: string;
};

defineProps({
  taches: {
    type: Array as PropType<Tache[]>,
    required: true,
  },
});
</script>
<template>
  <ul>
    <li v-for="(item, index) in taches" :key="index">
      {{ item.intitule }} - {{ item.etat }} - {{ item.dateech }}
    </li>
  </ul>
</template>
