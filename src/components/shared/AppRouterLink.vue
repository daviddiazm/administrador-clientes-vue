<script setup >
import { RouterLink } from 'vue-router';
import { Button } from '../ui/button';

  defineProps({
    to: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="flex justify-end">
    <Button>
      <RouterLink :to="{ name: to }" >
          <slot></slot>
      </RouterLink>
    </Button>
  </div>
</template>
