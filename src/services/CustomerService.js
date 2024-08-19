import api from "@/lib/axios";

export default {
  getDataCustomers () {
    return api.get('/customers')
  },
  postDataCustomer (data) {
    api.post('/customers',data)
  },
  getDataCustomersById (id) {
    return api.get(`/customers/${id}`)
  },
  patchDataCustomerById (id, data) {
    api.patch(`/customers/${id}`, data)
  },
  updateCustomerState(id, data) {
    api.patch(`/customers/${id}`, data)
  },
  deleteDataCustomerById (id) {
    api.delete(`/customers/${id}`)
  },

}

