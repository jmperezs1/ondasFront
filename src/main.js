import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap-vue/dist/bootstrap-vue.css'; // Import BootstrapVue styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle'; // Import Bootstrap JavaScript utilities
import router from './router';

const app = createApp(App);

// Set global properties
app.config.globalProperties.$baseRoute = 'https://localhost:7192/api';

// Use router and mount the app
app.use(router);

app.mount('#app');