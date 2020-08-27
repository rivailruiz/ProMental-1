<template>
    <v-container class="border mx-auto my-0" style="background-color:white">
        
        <v-app-bar app>
            <v-btn icon router :to="home">
                <v-icon> mdi-arrow-left</v-icon>      
            </v-btn>
        </v-app-bar>
        
        <v-form class="border mt-2" ref="firstForm"> 
            <p class="text-h5 font-weight-medium border">Qual o seu sexo? </p>
            
            <v-item-group active-class="active" v-model="cardSelection" :rules="cardRule" >    
                <v-layout justify-space-around>    
                    <v-flex class="pa-2" xs6 sm3>
                        <v-item v-slot:default="{ active, toggle }">
                            <v-card
                            :color="active ? 'light-blue lighten-1' : ''"
                            class="display-3 text-center rounded-lg pt-2"
                            height="208"
                            min-width="100"
                            max-width="300"
                            @click="toggle">

                                <v-img  height="128" width="128" class="mx-auto rounded-lg" :src="require(`./../assets/${cardsGender[0].image}`)"  />
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
                            @click="toggle">

                                <v-img height="128" width="128" class="mx-auto rounded-lg" :src="require(`./../assets/${cardsGender[1].image}`)" />
                                <v-card-title v-if="!active" class="justify-center font-weight-bold">{{cardsGender[1].title}}</v-card-title>
                                <v-card-title v-if="active" class="white--text justify-center font-weight-bold">{{cardsGender[1].title}}</v-card-title>
                            </v-card>
                        </v-item>
                    </v-flex>
                </v-layout>
            </v-item-group>

            <p class="text-h5 font-weight-medium border mt-8 mb-4">Qual a sua idade? </p>
        
            <v-text-field
            outlined
            type="number"
            v-model="ageField"
            :counter="maxTextAgeInput"
            :rules="ageRule"
            label="Digte sua idade"
            required
            ></v-text-field>

            <p class="text-h5 font-weight-medium border mt-8 mb-4">Está trabalhando no momento? </p>

            <v-layout row justify-space-around class="border" wrap> 
                <v-radio-group class="border font-weight-medium" v-model="radio" :rules="radioRule" row required>
                    <v-radio label="Sim" value="yes"></v-radio>
                    <v-radio label="Não" value="no"></v-radio>
                </v-radio-group>
            </v-layout>
        </v-form>

        <v-container class=" text-right pa-0"> 
            <v-flex class="d-inline-flex ">
             
                    <v-btn 
                    color="primary" tile text
                    @click="submit()"
                    > 
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
    data: () => {
        return {
            cardSelection: null,
            maxTextAgeInput: 3,
            ageField: '',
            radio: null,
            home: '/home',
            quizScreen: '/quizScreen',
            cardsGender: [{key: 1, title: 'Homem', image: "avatar-boy.png", src: "./../assets/avatar-boy.png"},
            {key: 2, title: 'Mulher', image: `avatar-girl.png`, src: "./../assets/avatar-boy.png"}],
            validade: 0,

            //Rules for the Form Screen
            ageRule: [
                ageRules => ageRules.length < 4 || 'Excedido quantidade de caracteres',
                ageRules => ageRules !== '' || 'Campo Invalido',
                ageRules => ageRules < 120 || 'Acho dificil você estar vivo',
                // ageRules => ageRules > 15 || 'Você não deveria estar respondendo este formulário'
            ],
            radioRule: [
                radio => radio === 'yes' || radio === 'no' || 'Campo não selecionado' 
            ],
            cardRule: [
                card => console.log(card) || console.log('Deu errado')
            ],  
        }
        // 
    },

    methods: {
        submit(){
            if(this.$refs.firstForm.validate()){
                console.log(this.radio , this.ageField);
                this.validade = 1;
                console.log(this.radio , this.ageField );
                this.$router.push({name:'QuizScreen', params:{gender: this.cardSelection, isWorking: this.radio , age: this.ageField }});
            }
        },
        genderValidation(gender){
            console.log(gender);
            this.cardSelection = gender;
            console.log(this.cardSelection);
        },
        shareData(){
            this.$router.push({name:'QuizScreen', params:{gender: this.cardSelection, isWorking: this.radio , age: this.ageField }});
        }
    }
}
</script>

<style scoped>
.border{
    /* border: 1px solid red; */
}
.active{
    border: 1px solid rgb(241, 215, 215);
}
.active2{
    border: 1px solid black;
}
</style>

