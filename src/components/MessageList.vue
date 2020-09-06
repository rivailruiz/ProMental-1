<template>
	<v-row class="border mx-md-4 justify-left" no-gutters>
		<!-- <avatar class="border" source="avatar-girl.png"/> -->
		<text-list :listItem="list"/>
	</v-row>
</template>

<script>
// import Avatar from "./../components/Avatar.vue";
import TextList from "./../components/TextList.vue";
export default {
  props:  ['list'],
  components: { TextList },
};
</script>

<style scoped> 
.border{
	/* border: 1px solid black; */
}
</style>