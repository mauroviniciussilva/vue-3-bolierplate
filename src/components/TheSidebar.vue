<template>
  <!-- {{ isSidebarOpen }} -->
  <aside id="the-sidebar" v-if="isSidebarOpen">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'TheSidebar',
  computed: {
    ...mapState(['isSidebarOpen'])
  }
});
</script>

<style lang="css">
#the-sidebar > nav {
  display: flex;
  flex-direction: column;
}
</style>
