<template>
  <div class="house" :class="{ greyscale: houseData.sold }">
    <router-link :to="{ name: 'houseDetails', params: { id: houseData.id } }">
      <img :src="houseData.imgUrl" alt="" />
      <p>{{ houseMakeUpperCase }} | {{ houseData.price }}</p>
    </router-link>
    <button @click="sold">SOLD</button>
  </div>
</template>

<script>
export default {
  name: "House",
  props: ["houseData"], //NOTE props come from parents
  computed: {
    houseMakeUpperCase() {
      return this.houseData.neighborhood.toUpperCase();
    }
  },
  methods: {
    sold() {
      this.$store.dispatch("soldHouse", this.houseData.id);
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
}
.greyscale {
  filter: grayscale(1);
}
</style>