<template>
    <v-app-bar  color="" height="56px" app>
      <v-btn icon router :to='backTo'>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      
      <v-spacer></v-spacer>

      <ProgressBar :progressValue="progressVal"></ProgressBar>

    </v-app-bar>
</template>

<script>
import ProgressBar from "./../components/ProgressBar.vue";
export default {
  props: ['progressVal', 'backTo'],
  components: { ProgressBar },
};
</script>

<style scoped>

</style>