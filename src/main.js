import { createApp } from 'vue'
import mitt from 'mitt'
import App from './App.vue'

const emitter = mitt()
const app = createApp(App)

window.emitter = emitter
app.config.globalProperties.emitter = emitter
app.mount('#app')
