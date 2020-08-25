<template>
    <!-- App.vue -->
    <v-app>
        <!-- <v-navigation-drawer app>
        </v-navigation-drawer> -->

        <!-- <v-app-bar app>
        <v-icon> mdi-menu</v-icon>
        <h2 class="mx-2 " >ProMental </h2>
        </v-app-bar> -->

        <!--Sizes your content based upon application components-->
        <v-main class="background-main">
        <!-- Provides the application the proper gutter -->
        <!-- <v-container style="background-color:red"> -->
            <router-view></router-view>
        <!-- </v-container> -->
        </v-main>

    </v-app>
</template>

<script>
// import BottomMenu from "./../components/BottomMenu.vue";
// import ToolBar from "./../components/ToolBar.vue";
export default {
  name: "App",
  // components: { ToolBar },

    data() {
    return {
      activeBtn: 1,
    };
  },
};
</script>

<style>
#app {
  font-family: "Work Sans", "Roboto", "Avenir", Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; */
  
}
.background-main{
  background-color: #ffff;

}
</style>
