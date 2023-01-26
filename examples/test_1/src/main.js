import { createApp } from 'vue'
import App from './App.vue'

import { VueFormJSON } from 'vue-formulario-json'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(VueFormJSON).mount('#app')
