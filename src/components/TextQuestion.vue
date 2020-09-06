<template>
    <v-col
        class="pa-2 border2 rounded-lg 
        light-blue 
        text-width-subtitle-2 white--text text-left 
        col-md-8 col-8"
    >
        <p
        class="mx-auto my-auto border2"
        >{{text}}</p>
    </v-col>
</template>

<script>
export default {
	props: ["text"],
};
</script>
<style scoped>
.border2 {
	order: 1px solid black;
	/* background-color: cyan; */
}
</style>


