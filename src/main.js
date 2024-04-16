import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
// import { Icon } from '@iconify/vue'; // Import Iconify component
// import '@iconify/iconify'; // Import the Iconify core icon set
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

//Vuetify
import "vuetify/styles";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    theme: {
        defaultTheme: "dark",
      },
    icons: {
        iconfont: 'md', // 'mdi' for previous versions
      },
 components,
 directives,
});
// Create the Vue app
const app = createApp(App);

// Register the Iconify component globally
// app.component('Icon', Icon);


createApp(App).use(router).use(vuetify).mount("#app");
// Mount the app to the DOM
// app.use(router).mount('#app');
