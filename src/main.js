// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'

// import { plugin, defaultConfig } from '@formkit/vue'
// import config from '../FormKit.config'

const app = createApp(App)

// createApp(App).use(plugin, defaultConfig).mount('#app')
// createApp(App).use().mount('#app')
// app.use(plugin, defaultConfig(config))

app.use(router)

app.mount('#app')
