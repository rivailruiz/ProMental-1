<template>
  <v-card class=" rounded-lg  pt-4" height="224" width="152">
    <v-img height="128" width="128" class="mx-auto rounded-lg" src="./../assets/avatarboy.jpg"  />
    <v-card-title class="justify-center">{{label}}</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    label: String,
  }
};
</script>
<style scoped>
</style>