window.Vue = require('vue');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

//Importo App.vue
import App from './views/App';

const app = new Vue({
    el: '#app',
    render: (h) => h(App)
});