<script setup >
import { computed } from 'vue';
import Button from './ui/button/Button.vue';
import CustomerService from '@/services/CustomerService';

  defineEmits(['update-customer-state', 'delete-customer'])
  const props = defineProps({
    customer: {
      type: Object,
      required: true
    },
  })

  const fullName = computed(() => {
    return props.customer.name + " " + props.customer.lastName
  })

  const isActive = computed(()=> {
    return props.customer.state 
  })

  
</script>

<template>
  <tr>
      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
          <p class="font-bold ">{{ fullName }}</p>
          <p class="text-primary ">{{ customer.email }}</p>
      </td>
      <td class="whitespace-nowrap px-3 py-4 text-sm text-current">
          <p class=" font-bold">{{ customer.company }}</p>
          <p class="text-gray-600">{{ customer.rol }}</p>
      </td>
      <td class="whitespace-nowrap px-3 py-4 text-sm">
        <Button 
          variant="ghost" 
          :class="[isActive ? 'text-green-600' : 'text-destructive']"
          @click="$emit('update-customer-state', customer)" >
          Activo
        </Button>
      </td>
      <td class="flex justify-center gap-3 whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
        <Button as-child >
          <RouterLink :to="{name: 'edit customer', params: {id: customer.id}}" >Editar</RouterLink>
        </Button>
        <Button variant="destructive" @click="$emit('delete-customer',customer)" >
          Eliminar
        </Button>
      </td>
  </tr>
</template>
