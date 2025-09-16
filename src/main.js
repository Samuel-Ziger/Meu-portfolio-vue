import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/app.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App)
  .use(router)
  .component('vue-cookie-accept-decline', VueCookieAcceptDecline)
  .mount('#app')
