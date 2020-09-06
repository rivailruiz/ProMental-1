<template>
    <v-app-bar  class="ma-0" :color="color" short app>
      <v-btn icon router :to='backTo'>
        <v-icon :color='iconColor'>{{icon}}</v-icon>
      </v-btn>
      
      <ProgressBar :activeBar='active' :progressValue="progressVal"></ProgressBar>

    </v-app-bar>
</template>

<script>
import ProgressBar from "./../components/ProgressBar.vue";
export default {
  props: ['progressVal', 'backTo', 'active', 'icon', 'color', 'iconColor'],
  components: { ProgressBar },
  color: 'white',
};
//mdi-arrow-left
</script>

<style scoped>

</style>