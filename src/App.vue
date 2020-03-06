<template>
  <div id="app">
    <Header class="col-12" title="Locadora de Filmes" />
    <router-view />
  </div>
</template>

<script>
//import Main from "./components/Main.vue";
//import CartaoFilme from "./components/CartaoFilme.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  data: function(){
    return{};
  },
  components: {
    Header
  }
};
</script>

