import { createApp } from 'vue';
import App from './App.vue';

// Import Bootstrap and BootstrapVue 3 CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Import BootstrapVue 3
import BootstrapVue3 from 'bootstrap-vue-3';

import router from './router';

const app = createApp(App);

// Set global properties
app.config.globalProperties.$baseRoute = 'https://localhost:7192/api';

// Use router and BootstrapVue3
app.use(router);
app.use(BootstrapVue3);

app.mount('#app');
