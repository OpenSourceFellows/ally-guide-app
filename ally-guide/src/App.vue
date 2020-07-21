<template>
  <div id="app">
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />
     <HeaderMobile />
         <div class="content" :class="{'open':showNav}">
           <div class="top-bar">
             <div id="navigation-icon" v-if="mobileView"
               @click="showNav = !showNav">
               <i class="fas fa-bars"></i>
             </div>
            </div>
          </div>
    <Header  v-if="!mobileView" />

    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/partials/Header.vue";
import Footer from "@/components/partials/Footer.vue";
import HeaderMobile from "@/components/partials/HeaderMobile.vue";

export default {
   data: () => {
      return {
        mobileView: true,
        showNav: false
      };
    },
    methods: {
       handleView() {
         this.mobileView = window.innerWidth <= 990;
       }
     },
  components: {
    Header, HeaderMobile, Footer,
  },
  created() {
   this.handleView();
   window.addEventListener('resize', this.handleView);
 }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
