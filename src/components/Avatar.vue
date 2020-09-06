<template>
	<v-col class="message col-2 col-md-1 col-sm-1">
		<v-avatar class="mx-auto" size="48">
			<v-img class="border-image" :src="require(`./../assets/${source}`)" alt="logo" />
		</v-avatar>
	</v-col>
</template>

<script>
export default {
	props:['source']
};
</script>

<style scoped>
.border-image {
    border: 1px solid black;
}
</style>