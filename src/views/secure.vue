<template>
  <div id="secure">
    <h1>Secure Area</h1>
    <p>
      This is a secure area
    </p>
    <button class="btn btn-primary goBack" v-on:click="indietro()">Indietro</button>
  </div>
</template>

<script>
export default {
  name: "secure",
    methods: {
        indietro(){
            this.$router.replace({ name: "login" });
        }
    }
};
</script>
