<template>
  <div  class="all-links container-fluid">
    <header class="row">
      <div class="col-6">
        <router-link :to="{ name: 'cars' }">
          <h1>C<img alt="Vue logo" src="../assets/logo.png" />rs</h1>
        </router-link>
      </div>
      <div class="col-6">
        <router-link :to="{ name: 'houses' }">
          <h1>P<img alt="Vue logo" src="../assets/logo.png" />ds</h1>
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
// export default {
//   name: "CarDetails",
//   mounted() {
//     this.$store.dispatch("getCarById", this.$route.params.id);
//   },
//   computed: {
//     car() {
//       return this.$store.state.activeCar;
//     }
//   }
// };
export default {
  name: "home",
}
</script>
<style></style>
