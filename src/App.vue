<script>
import { mapGetters } from 'vuex';
import MenuBar from './components/MenuBar/MenuBar.vue';
import FooterBar from './components/FooterBar/FooterBar.vue';
import Loader from './components/Loader/Loader.vue';

export default {
  components: {
    MenuBar,
    FooterBar,
    Loader
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<template>
  <Loader v-if="isLoading" />
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
