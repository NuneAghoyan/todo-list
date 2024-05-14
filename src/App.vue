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
  <div class="wrapper">
    <Loader v-if="isLoading" />
    <MenuBar />
    <main>
      <RouterView />
    </main>
    <FooterBar />
  </div>
</template>


<style scoped>
.wrapper {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>
