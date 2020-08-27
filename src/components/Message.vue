<template>
  <div class="message">
    <Avatar />
    <div clas="d-flex inline-flex" style="border: 1px solid red">
      <Title :title=title></Title>
    </div>  
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