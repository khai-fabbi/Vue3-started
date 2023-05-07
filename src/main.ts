import { createApp } from 'vue'
import './index.scss'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
// app.config.errorHandler = (err) => {
//   alert(err)
// }
app.mount('#app')
