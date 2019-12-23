<template>
  <div  lass="house-details container-fluid">
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
    <h3>{{ house.neighborhood }}</h3>
    <h3>{{ house.year }}</h3>
     <img :src="house.imgUrl" />
  </div>
</template>

<script>
export default {
  name: "HouseDetails",
  mounted() {
    this.$store.dispatch("getHouseById", this.$route.params.id);
  },
  computed: {
    house() {
      return this.$store.state.activeHouse;
    }
  }
};
</script>

<style></style>
