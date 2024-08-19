<script setup >
import { computed, onMounted, reactive } from 'vue';
import Input from './ui/input/Input.vue';
import Button from './ui/button/Button.vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import CustomerService from '@/services/CustomerService';
const router = useRouter()

  const { params } = useRoute();
  const { id } = params
  const customer = reactive({
    name: '',
    lastName: '',
    email: '',
    telephone: '',
    company: '',
    rol: '',
    state: false,
  })
  const props = defineProps({
    customer: {
      type: Object,
      required: false
    }
  })

  const handlerSubmit = () => {
    if(id) {
      console.log('esta entrando a editar');
      
      patchCustomer(id, customer)
      return
    }
    postCustomer(customer)
  }

  const postCustomer = async (customer) => {
    try {
      CustomerService.postDataCustomer(customer)
      await router.push({name: 'home'})
    } catch (error) {
      console.log(error);
    }
  }

  const patchCustomer = async (id, customer) => {
    try {
      CustomerService.patchDataCustomerById(id, customer)
      await router.push({name: 'home'})
    } catch (error) {
      console.log(error);
      
    }
  }

  const isEdit = computed(() => {
    return id !== undefined  
  })

  onMounted(() => {
    if(id) {
      Object.assign(customer, props.customer)
    }
  })

</script>

<template>
  <form 
    @submit.prevent="handlerSubmit"
    class="flex flex-col gap-3 ">
    <div>
      <label class="font-bold text-xl" for="name">Nombre</label>
      <Input
        id="name"
        placeholder="nombre"
        v-model:model-value="customer.name"
      />
    </div>
    
    <div>
      <label class="font-bold text-xl" for="last-name">Apellido</label>
      <Input
        id="last-name"
        placeholder="apellido"
        v-model:model-value="customer.lastName"
      />
    </div>
    
    <div>
      <label class="font-bold text-xl" for="email">Correo electronico</label>
      <Input
        type="email"
        id="email"
        placeholder="customer@email.com"
        v-model:model-value="customer.email"
      />
    </div>
    
    <div>
      <label class="font-bold text-xl" for="tel">Numero de telefono</label>
      <Input
        type="tel"
        id="tel"
        placeholder="12349709"
        v-model:model-value="customer.telephone"
      />
    </div>
    
    <div>
      <label class="font-bold text-xl" for="company">Empresa</label>
      <Input
        type="text"
        id="company"
        placeholder="empresa a la que pertenece"
        v-model:model-value="customer.company"
      />
    </div>
    
    <div>
      <label class="font-bold text-xl" for="rol">Puesto</label>
      <Input
        type="text"
        id="rol"
        placeholder="su pocision en al empresa"
        v-model:model-value="customer.rol"
      />
    </div>
    <Button type="submit">
      {{ id ? "Editar" : "Registrar" }}
    </Button>
  </form>
</template>
