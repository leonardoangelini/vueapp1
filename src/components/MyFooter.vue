<!-- definizione del template del footer-->
<template>
  <nav class="navbar fixed-bottom navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand navft" href="#">Fixed bottom</a>
    </div>
  </nav>
</template>

<!-- definizione del component footer-->
<script>
export default {
  name: "my-footer",
};
</script>

<!-- definizione degli stili del footer -->
<style scoped>
.navft {
  border: none;
  margin: auto;
  height: 50px;
}
</style>