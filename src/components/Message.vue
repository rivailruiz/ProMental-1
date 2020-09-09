<template>
	<v-row class="mx-md-4 justify-left" no-gutters>
		<avatar source="avatar-girl2.png" />
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
</style>