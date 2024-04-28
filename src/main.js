import './assets/main.css';
import 'vuetify/styles';

import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import App from './App.vue';
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives
});

createApp(App).use(vuetify, {
    iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
}).mount('#app')