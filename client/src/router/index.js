import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Amplify from "../views/Amplify.vue";
import Give from "../views/Give.vue"
import Learn from "../views/Learn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "contribute" */ "../views/Home.vue")
  },
  {
    path: "/amplify",
    name: "Amplify",
    component: Amplify
  },

  {
    path: "/learn",
    name: "Learn",
    component: Learn
  },
  {
    path: "/give",
    name: "Give",
    component: Give
  },
  {
    path: "/collaborate",
    name: "Collaborate",
    component: () =>
      import(/* webpackChunkName: "collaborate" */ "../views/Collaborate.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  // {
  //   path: "/elevate",
  //   name: "Elevate",
  //       // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Elevate.vue")
  // },

];

const router = new VueRouter({
  routes : routes,
  mode : 'history'
});

export default router;
