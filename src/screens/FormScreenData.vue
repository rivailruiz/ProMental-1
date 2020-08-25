<template>
    <v-container class="border mx-auto my-0" style="background-color:white">
        
        <v-app-bar app>
            <v-btn flat elevation="0" fab router :to="home">
                <v-icon> mdi-arrow-left</v-icon>      
            </v-btn>
        </v-app-bar>
        
        <v-form class="border mt-2"> 
            <p class="text-h5 font-weight-medium border">Qual o seu sexo? </p>
            
            <v-item-group active-class="active">    
                <v-layout justify-space-around>    
                    <v-flex class="pa-2" xs6 sm3>
                        <v-item v-slot:default="{ active, toggle }">
                            <v-card
                            :color="active ? 'light-blue lighten-1' : ''"
                            class="display-3 text-center rounded-lg pt-2"
                            height="208"
                            min-width="100"
                            max-width="300"
                            @click="toggle"
                            >
                                <v-img  height="128" width="128" class="mx-auto rounded-lg" src="./../assets/avatar-boy.png"  />
                                <v-card-title v-if="!active" class="justify-center font-weight-bold">{{cardsGender[0].title}}</v-card-title>
                                <v-card-title v-if="active" class="white--text justify-center font-weight-bold">{{cardsGender[0].title}}</v-card-title>
                            </v-card>
                        </v-item>
                    </v-flex>

                    <v-flex class="pa-2" sm3>
                        <v-item v-slot:default="{ active, toggle }">
                            <v-card
                            :color="active ? 'light-blue lighten-1' : ''"
                            class="display-3 text-center rounded-lg pt-2"
                            height="208"
                            min-width="100"
                            max-width="300"
                            @click="toggle"
                            >
                                <v-img height="128" width="128" class="mx-auto rounded-lg" src="./../assets/avatar-girl.png" />
                                <v-card-title v-if="!active" class="justify-center font-weight-bold">{{cardsGender[1].title}}</v-card-title>
                                <v-card-title v-if="active" class="white--text justify-center font-weight-bold">{{cardsGender[1].title}}</v-card-title>
                            </v-card>
                        </v-item>
                    </v-flex>
                </v-layout>
            </v-item-group>

            <p class="text-h5 font-weight-medium border mt-8 mb-4">Qual a sua idade? </p>

        
            <v-text-field
            v-model="model"
            :counter="max"
            :rules="rules"
            label="Digte sua idade"
            ></v-text-field>

            <p class="text-h5 font-weight-medium border mt-8 mb-4">Está trabalhando no momento? </p>

            <v-layout row justify-space-around class="border" wrap> 
                <v-radio-group class="border font-weight-medium" v-model="row" row>
                    <v-radio label="Sim" value="radio-1"></v-radio>
                    <v-radio label="Não" value="radio-2"></v-radio>
                </v-radio-group>
            </v-layout>
        </v-form>
        
        <v-container class=" text-right pa-0"> 
            <v-flex class="d-inline-flex ">
                <v-btn 
                color="primary" tile text
                router :to="quizScreen"> 
                    Próximo
                    <v-icon right color="primary">mdi-arrow-right</v-icon>
                </v-btn>
            </v-flex>
        </v-container>

    </v-container>
</template>

<script>
// v-for="cardsGender in cardsGender" :key="cardsGender.title"
// import CardsGender from './../components/CardsGender'
export default {
    // components: {CardsGender},
    data: () => ({
        cardsGender: [{key: 1, title: 'Homem', image: `avatar-boy.png`, src: "./../assets/avatar-boy.png"},
        {key: 2, title: 'Mulher', image: `avatar-boy.png`, src: "./../assets/avatar-boy.png"}],
        max: 3,
        cardOption: null,
        mandatory: false,
        home:'/home',
        quizScreen: '/quizScreen'
    }),

    methods: {
        cardOption(){

        }
    }
}
</script>

<style scoped>
.border{
    border: none;
}
.active{
    border: 1px solid rgb(241, 215, 215);
}
.active2{
    border: 1px solid black;
}
</style>

