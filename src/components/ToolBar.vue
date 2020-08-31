<template>
    <v-app-bar  color="" height="56px" app>
      <v-btn icon router :to='backTo'>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      
      <v-spacer></v-spacer>

      <ProgressBar :active='active' :progressValue="progressVal"></ProgressBar>

    </v-app-bar>
</template>

<script>
import ProgressBar from "./../components/ProgressBar.vue";
export default {
  props: ['progressVal', 'backTo', 'active'],
  components: { ProgressBar },
};
</script>

<style scoped>

</style>