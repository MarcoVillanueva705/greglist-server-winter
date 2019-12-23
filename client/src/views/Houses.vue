<template>
  <div class="houses container-fluid">
    <header class="row">
      <div class="col">
          <router-link :to="{ name: 'home' }">
        <h1>Homes For S<img alt="Vue logo" src="../assets/logo.png" />le</h1>
        </router-link>
      </div>
    </header>

    <main class="row search">
      <div class="col-12">
        <form @submit.prevent="createHouse">
          <input
            required
            type="text"
            v-model="newHouse.neighborhood"
            placeholder="Neighborhood"
          />
          <input
            required
            type="number"
            v-model="newHouse.price"
            placeholder="price"
          />
          <input
            required
            type="number"
            v-model="newHouse.year"
            placeholder="year"
          />
          <input
            required
            type="text"
            v-model="newHouse.imgUrl"
            placeholder="imgUrl"
          />
          <input
            required
            type="text"
            v-model="newHouse.description"
            placeholder="description"
          />
          <button class="btn btn-success" type="submit">Add House</button>
        </form>
      </div>
       <div class="col-12">
        <div class="row houses">
          <div class="col-4" v-for="house in houses" :key="house.id">
            <!-- Props are data passed from parent to child with :propName="DATA" -->
            <house-component :houseData="house" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HouseComponent from "@/components/House";
export default {
  name: "houses",
  mounted() {
    //runs when the component is first put (mounted) on the dom
    this.$store.dispatch("getHouses");
  },
  data() {
    return {
      newHouse: {
        neighborhood: "",
        price: 0,
        year: 0,
        imgUrl: "",
        description: ""
      }
    };
  },
  methods: {
    createHouse() {
      let house = { ...this.newHouse }; //NOTE makes a copy of the house data object
      this.$store.dispatch("createHouse", house);
      this.newHouse = {
        neighborhood: "",
        price: "",
        price: 0,
        year: 0,
        imgUrl: "",
        description: ""
      };
    }
  },
 computed: {
    houses() {
      return this.$store.state.houses;
    },
    unsoldHouses() {
      this.houses.filter(h=> !house.sold);
    }
  },
  components: {
    HouseComponent
  }
};
</script>

<style>
h1 img {
  transform: rotate(180deg);
  height: 1em;
}
</style>