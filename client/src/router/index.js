import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import CarDetails from "../views/CarDetails.vue";
// @ts-ignore
import Jobs from "../views/Jobs.vue";
// @ts-ignore
import Cars from "../views/Cars.vue";
// @ts-ignore
import Houses from "../views/Houses.vue";
// @ts-ignore
import HouseDetails from "../views/HouseDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/cars/:id",
    name: "carDetails",
    component: CarDetails
  },
  {
    path: "/cars",
    name: "cars",
    component: Cars
  },
  {
    path: "/house/:id",
    name: "houseDetails",
    component: HouseDetails
  },
  {
    path: "/houses",
    name: "houses",
    component: Houses
  },

  {
    path: "/jobs",
    name: "jobs",
    component: Jobs
  },

  
  {
    path: "*", //saftey net that returns bad routes back to the home
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
