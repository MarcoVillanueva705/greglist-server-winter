<template>
  <div  lass="car-details container-fluid">
    <header class="row">
      <div class="col-lg-6">
        <router-link :to="{ name: 'cars' }">
          <h1>C<img alt="Vue logo" src="../assets/logo.png" />rs</h1>
        </router-link>
      </div>
      <div class="col-lg-6">
        <router-link :to="{ name: 'home' }">
          <h1>H<img alt="Vue logo" src="../assets/logo.png" />me</h1>
        </router-link>
      </div>
    </header>
    <h3>{{ car.make }}</h3>
    <h3>{{ car.year }}</h3>
     <img :src="car.imgUrl" />
  </div>
</template>

<script>
export default {
  name: "CarDetails",
  mounted() {
    this.$store.dispatch("getCarById", this.$route.params.id);
  },
  computed: {
    car() {
      return this.$store.state.activeCar;
    }
  }
};
</script>

<style></style>
