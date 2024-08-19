<script setup>
import AppForm from '@/components/AppForm.vue';
import AppHeading from '@/components/shared/AppHeading.vue';
import AppRouterLink from '@/components/shared/AppRouterLink.vue';
import { RouterLink, useRoute } from 'vue-router';



defineProps({
  title: {
    type: String,
    required: true
  }
}) 



</script>

<template>
  <div class="">
    <AppRouterLink :to="'home'">
      Ir a incio
    </AppRouterLink>

    <AppHeading>
      {{ title }}
    </AppHeading>
    <AppForm/>
  </div>
</template>
