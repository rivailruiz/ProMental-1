<template>
	<v-row class="border mx-md-4 justify-left" no-gutters>
		<avatar source="avatar-boy.png" />
		<text-question :text="textIn"/>
	</v-row>
</template>

<script>
import Avatar from "./../components/Avatar.vue";
import TextQuestion from "./../components/TextQuestion.vue";

export default {
	props: ['textIn' , 'map'],
	components: { Avatar, TextQuestion },
};
</script>
<style scoped>
.message {
  display: flex;
  align-items: center;
}

/* .border3{
	border: 1px soli black;
	background-color: green;
} */
</style>