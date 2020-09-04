import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from '/@/App.vue';
import { router } from '/@/router/index';
import './index.scss';

// todo
createApp(App)
  .use(router)
  .use(Antd)
  .mount('#app');