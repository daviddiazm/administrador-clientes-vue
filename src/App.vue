<script setup>
  import AppHeader from "./components/AppHeader.vue";
  import ButtonTheme from "./components/shared/ButtonTheme.vue";
</script>

<template>
  <div class="">
    <ButtonTheme/>
    <AppHeader/>
    
    <div class="p-8">
      <RouterView />
    </div>
  </div>
</template>
