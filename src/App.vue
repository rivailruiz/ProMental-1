<template>
  <v-main>
    <v-app>
      <v-content class="">
        <router-view></router-view>
      </v-content>
    </v-app>
  </v-main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
