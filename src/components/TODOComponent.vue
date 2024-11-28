<template>
  <ul>
    <li v-for="(item, index) in taches" :key="index">
      {{ item.intitule }} - {{ item.etat }} - {{ item.dateech }}
    </li>
  </ul>
</template>

<script setup>
defineProps({
  taches: {
    type: Array,
    required: true
  }
});
</script>
