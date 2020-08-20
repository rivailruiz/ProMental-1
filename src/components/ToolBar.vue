<template>
  <nav >
    <v-toolbar  color="" short dense>
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <ProgressBar></ProgressBar>

      <v-spacer></v-spacer>
    </v-toolbar>
  </nav>
</template>

<script>
import ProgressBar from "./../components/ProgressBar.vue";
export default {
  components: { ProgressBar },
};
</script>

<style scoped>

</style>