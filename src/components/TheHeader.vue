<template>
  <header id="the-header">
    <button class="menu-button" @click="toggleSidebar">Menu</button>
    <img alt="Vue logo" style="height: 50px" src="@/assets/logo.png" />
  </header>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TheHeader',
  methods: {
    ...mapMutations(['toggleSidebar'])
  }
};
</script>

<style lang="scss">
.menu-button {
  background-color: transparent;
  height: 50px;
  cursor: pointer;
  outline: 0;
  border: 1px solid rgb(59, 59, 59);
  margin-right: 1em;
}
</style>
