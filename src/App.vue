<!--definizione del template -->
<template>
  <div id="app">
    <div id="nav">
      <NavBar :key="componentKey" />
    </div>
    <router-view />
    <my-footer />
  </div>
</template>

<script>
//import dei componenti footer e NavBar 
import NavBar from "./components/NavBar.vue";
import MyFooter from "./components/MyFooter.vue";

//definizione dei componenti footer e NavBar
export default {
  name: "App",
  components: {
    NavBar,
    "my-footer": MyFooter,
  },
  data() {
    return {
      componentKey: 0,
    };
  },
  //metodo per refreshare il componente NavBar 
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
  },
  //metodo per acquisire il riferimento della root nella quale si trova l'applicazione
  created() {
    this.$root.$refs.App = this;
  },
};
</script>