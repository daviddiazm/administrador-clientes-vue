<script setup>
import AppForm from '@/components/AppForm.vue';
import AppHeading from '@/components/shared/AppHeading.vue';
import AppRouterLink from '@/components/shared/AppRouterLink.vue';
import CustomerService from '@/services/CustomerService';
import { computed, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const customer = reactive({
  name: null,
  lastName: null,
  email: null,
  telephone: null,
  company: null,
  rol: null,
  active: null,
});

const { params } = useRoute();

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const getCustomerById = async (id) => {
  try {
    const { data } = await CustomerService.getDataCustomersById(id);
    // customer.name = data.name;
    Object.assign(customer, data)
  } catch (error) {
    console.log(error);
  }
};

const isCustomer = computed(() => {
  return customer.email !== null
})

onMounted(() => {
  getCustomerById(params.id);
});
</script>

<template>
  <div class="">
    <AppRouterLink :to="'home'">
      Ir a incio
    </AppRouterLink>

    <AppHeading>
      {{ title }}
    </AppHeading>

    <AppForm
      v-if="isCustomer"
      :customer="customer"
    />
  </div>
</template>