import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import globalDirectives from './plugins/global-directives';
import dayjs from './plugins/dayjs';
import { createPinia } from 'pinia';


const app = createApp(App);
app.use(globalDirectives);
app.use(dayjs);
app.use(createPinia());
app.use(router);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
