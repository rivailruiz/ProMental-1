<template>
	<v-row class="border mx-md-4 justify-left" no-gutters>
		<Avatar />
		<Label2 />
	</v-row>
</template>

<script>
import Avatar from "./../components/Avatar.vue";
import Label2 from "./../components/Label.vue";
export default {
  props: { title: String },
  components: { Avatar, Title },
};
</script>
<style scoped>
.message {
  display: flex;
  align-items: center;
}
</style>