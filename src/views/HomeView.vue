<script setup>
import AppHeading from '@/components/shared/AppHeading.vue';
import AppRouterLink from '@/components/shared/AppRouterLink.vue';
import UserCell from '@/components/UserCell.vue';
import CustomerService from '@/services/CustomerService';
import { computed, onMounted, ref } from 'vue';


// const url = `http://localhost:3000`
const customers = ref([])
const state = ref(false)
defineProps({
  title: {
    type: String,
    required: true
  }
})

onMounted(() => {
  getCustomers()
})

const getCustomers = async () => {
  try {
    const {data} = await CustomerService.getDataCustomers()
    customers.value = data
  } catch (error) {
    console.log(error);
  }
}

const updateCustomerState= (customer) => {
  const { id } = customer
  customer.state = !customer.state
  try {
    CustomerService.updateCustomerState(id, customer)
    state.value = customer.state 
  } catch (error) {
    console.log(error);
  }
}

const isCustomers = computed(() => {
  return customers.value.length > 0
})

const deleteCustomer = async ({id}) => {
  try {
    CustomerService.deleteDataCustomerById(id)
    await getCustomers()
  } catch (error) {
    console.log(error);
    
  }
}

</script>

<template>
  <div class=" flex flex-col gap-3 ">
    <AppRouterLink :to="'create customer'">
      Ir a Crear Cliente
    </AppRouterLink>

    <AppHeading>
      {{ title }}
    </AppHeading>
    
    <div v-if="isCustomers" class="flow-root mx-auto w-4/5 mt-10 p-5  shadow">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table class="min-w-full divide-y divide-gray-300">
                  <thead>
                  <tr>
                      <th scope="col" class="p-2 text-left text-sm font-extrabold text-primary">Nombre</th>
                      <th scope="col" class="p-2 text-left text-sm font-extrabold text-primary">Empresa</th>
                      <th scope="col" class="p-2 text-left text-sm font-extrabold text-primary">Estado</th>
                      <th scope="col" class="p-2 text-center text-sm font-extrabold text-primary">Acciones</th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 ">
                    <UserCell
                      v-for="customer in customers"
                      :customer="customer"
                      @update-customer-state="updateCustomerState"
                      @delete-customer="deleteCustomer"
                    />
                  </tbody>
              </table>
          </div>
      </div>
  </div>
    
  </div>
</template>
