<template>
  <div class="message">
    <Avatar class />
    <v-content class="d-inline">
      <Title :title=title></Title>
    </v-content>
  </div>
</template>

<script>
import Avatar from "./../components/Avatar.vue";
import Title from "./../components/Title.vue";
export default {
    props: {title: String},
    components:{Avatar, Title}
};
</script>
<style scoped>
.message {
  display: flex;
  align-items: center;
}
</style>