<template>
  <a-menu v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    :inline-collapsed="collapsed"
    :theme="theme"
    mode="inline"
    class="sider-menu">
    <SiderMenuItem v-for="menu in menus"
      :key="menu.name"
      :menuItem="menu" />
  </a-menu>
</template>

<script lang="ts">
/**
 * @author zhushiqi
 */

import { defineComponent, inject } from 'vue';
import { MenuService } from '/@/services/Menu.service';
import { ThemeService, ThemeServiceToken } from '/@/services/Theme.service';
import SiderMenuItem from './SiderMenuItem.vue';

export default defineComponent({
  name: 'SiderMenu',
  components: { SiderMenuItem },
  setup() {
    const menuService = MenuService.getInstance();
    const themeService = inject(ThemeServiceToken) as ThemeService;

    return {
      ...menuService,
      ...themeService,
    };
  },
});
</script>
