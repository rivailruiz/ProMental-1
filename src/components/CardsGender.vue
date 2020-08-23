<template>
  <v-card class=" mx-auto rounded-lg  pt-4" height="224">
    <v-img height="128" width="128" class="mx-auto rounded-lg" src="./../assets/logo.png"  />
    <v-card-title class="justify-center font-weight-bold">{{label}}</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    label: String,
    picture: {source: "./../assets/avatarboy.jpg"},
  }
};
</script>
<style scoped>
</style>