<script>
import MenuBar from './components/MenuBar/MenuBar.vue';
import FooterBar from './components/FooterBar/FooterBar.vue';

export default {
  components: {
    MenuBar,
    FooterBar
  }
}
</script>

<template>
  <MenuBar />
  <main>
    <RouterView />
  </main>
  <FooterBar />
</template>

<style scoped>
main {
  margin-bottom: 100px;
}
</style>
