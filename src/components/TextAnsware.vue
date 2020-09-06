<template>
    <v-col
        class="pa-2 border2 rounded-lg 
        light-blue 
        text-width-subtitle-2 white--text 
        col-5 col-sm-3 col-md-3 mr-2 mr-sm-4">
        <p
        class="mx-auto my-auto border2">
        {{text}}
        </p>
    </v-col>
</template>

<script>
export default {
	data: () => ({}),
	props: {
		text: String,
	}
};
</script>

<style scoped>

</style>