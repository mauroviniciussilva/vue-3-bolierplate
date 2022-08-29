<template>
  <TheHeader />
  <div id="app-container">
    <TheSidebar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';

export default defineComponent({
  name: 'App',
  components: { TheHeader, TheSidebar }
});
</script>
