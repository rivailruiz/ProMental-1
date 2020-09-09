<template>
    <v-dialog
        v-model="dialogActive"
        max-width="290">
    <v-card>
        <v-card-title class="headline">{{title}}</v-card-title>

        <v-card-text>
        {{message}}
        </v-card-text>

        <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
            color="green darken-1"
            text
            @click="clickButton(agree)">
            Sim. Vamos lá!!
        </v-btn>

        <v-btn
            color="red darken-1"
            text
            @click="clickButton(disagree)">
            não
        </v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
</template>

<script>
	export default {
		props: ['dialogActive', 'link', 'message', 'title'],
		data: () => ({
			agree: true,
			disagree: false,
		}),
		methods: {
			clickButton(option){
				if(option){
                    console.log(option);
                    window.location.href = "https://forms.gle/LgGVW5C6Kqvwfqx66"
                }else{
                    this.$router.push({name:'Home'});
                }
				
			}
		}
	}
</script>