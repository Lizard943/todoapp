import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5wUpulSJUPrRkCPi_Pbr7QD9RDv_gMWg',
  authDomain: 'todoapp-luanvu.firebaseapp.com',
  projectId: 'todoapp-luanvu',
  storageBucket: 'todoapp-luanvu.firebasestorage.app',
  messagingSenderId: '911494550097',
  appId: '1:911494550097:web:7e860053fe90e464091e70',
}

// Initialize Firebase
initializeApp(firebaseConfig)
const app = createApp(App)

app.use(createPinia())
app.use(router)

// eslint-disable-next-line vue/multi-word-component-names
app.component('Icon', Icon).mount('#app')
