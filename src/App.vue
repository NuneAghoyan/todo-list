<script>
import MenuBar from './components/MenuBar/MenuBar.vue';
import TodoList from './components/TodoList/TodoList.vue';
import FooterBar from './components/FooterBar/FooterBar.vue';

export default {
  components: {
    MenuBar,
    TodoList,
    FooterBar
  }
}
</script>

<template>
  <MenuBar />
  <main>
    <TodoList />
  </main>
  <FooterBar />
</template>
