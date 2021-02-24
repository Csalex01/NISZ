import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAq9t85Wc3SytXk0rCcEMPg9qatjMmOkOM",
  authDomain: "kodoljhataroknelkul.firebaseapp.com",
  projectId: "kodoljhataroknelkul",
  storageBucket: "kodoljhataroknelkul.appspot.com",
  messagingSenderId: "297713532026",
  appId: "1:297713532026:web:515566d9bdd15957228fc3"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
