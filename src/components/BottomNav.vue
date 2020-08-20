<template>
  <nav>
    <v-bottom-navigation hide-on-scroll :value="activeBtn" grow color="teal" height="56" app>
      <v-btn >
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn >
        <span>Mais</span>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      activeBtn: 1,
    };
  },
};
</script>

<style scoped>
</style>