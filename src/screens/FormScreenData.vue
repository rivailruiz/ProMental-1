<template>
    <v-container class="active2 pa-0 align-start" fluid fill-height>
        <ToolBar :active='false' :backTo='homeRouter'/>
        <v-container fluid class="active2">
            <v-row class="border mt-4">
                <v-col class="active2 pa-0" cols="12">
                    <v-row class=" justify-left" no-gutters>
                        <v-col class="border2 message col-3 col-md-1 col-sm-3">
                            <v-avatar class=" mx-auto" size="64">
                                <v-img class="border-image" src="./../assets/avatar-boy.png" alt="logo" />
                            </v-avatar>
                        </v-col>
                        <v-col class="pa-2 border3 rounded-lg 
                                    light-blue lighten-3 
                                    text-width-subtitle-2 white--text text-left 
                                    col-md-8 col-8">
                            <p class="mx-auto my-auto">{{botQuestion[0]}}</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="active2 mt-2 justify-end"> <!-- user answare -->
                <v-col class="active2 rounded-lg light-blue lighten-3 white--text col-6 col-md-3 mr-md-4"> 
                    <p class=" my-0  mr-2 text-right">{{userAnsware[index]}}</p>
                </v-col>
            </v-row>

            <v-row class="active2 mt-2 ">
                <v-col class="border2 " cols="12">
                    
                    <v-item-group v-if="steps === null" active-class="active justify-space-around" v-model="cardSelection" >  
                        <v-row class="justify-space-around">  
                            <v-col class="border col-6 col-md-3 "> 
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card
                                    :color="active ? 'light-blue lighten-3' : ''"
                                    class="display-3 text-center rounded-lg pt-2"
                                    height="208"
                                    min-width="100"
                                    max-width="300"
                                    @click="toggle">

                                        <v-img  height="128" width="128" class="mx-auto rounded-lg" :src="require(`@/assets/avatar-boy.png`)"  />
                                        <v-card-title v-if="!active" class="justify-center font-weight-bold">Homem</v-card-title>
                                        <v-card-title v-else-if="active" class="white--text justify-center font-weight-bold">Homem</v-card-title>
                                    </v-card>
                                </v-item>
                            </v-col>
                            <v-col class="border col-6 col-md-3"> 
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card
                                    :color="active ? 'pink lighten-3' : ''"
                                    class="display-3 text-center rounded-lg pt-2"
                                    height="208"
                                    min-width="100"
                                    max-width="300"
                                    @click="toggle">

                                        <v-img  height="128" width="128" class="mx-auto rounded-lg" :src="require(`@/assets/avatar-girl.png`)"  />
                                        <v-card-title v-if="!active" class="justify-center font-weight-bold">Mulher</v-card-title>
                                        <v-card-title v-if="active" class="white--text justify-center font-weight-bold">Mulher</v-card-title>
                                    </v-card>
                                </v-item>
                            </v-col>
                        </v-row>
                    </v-item-group>
                    
                    <v-radio-group v-else-if="steps === 'genderOk'"
                     v-model="radio"
                     row required>
                        <v-radio color="light-blue lighten-2" label="Trabalhando" value="sim" class="mx-auto"></v-radio>
                        <v-radio color="light-blue lighten-2" label="Não Trabalhando" value="nao" class=" mx-auto"></v-radio>
                    </v-radio-group>

                    <v-form ref="ageForm" v-else-if="steps === 'workOk'" >
                        <v-text-field
                        outlined
                        color="light-blue lighten-2"
                        type="number"
                        v-model="ageField"
                        :counter="maxTextAgeInput"
                        :rules="ageRule"
                        label="Digte sua idade"
                        required>
                        </v-text-field>
                    </v-form>
                </v-col>
            </v-row>

        </v-container>
        
        <v-container class="border-image"> 
            <v-btn v-if="cardSelection !== null && steps === null" block 
            color="light-blue lighten-2" 
            dark x-large rounded
            @click="confirmar('genderOk')"> 
                confirmar
            </v-btn>

        <v-btn v-else-if="radio !== null && steps === 'genderOk'" 
            color="light-blue lighten-2"
            block 
            dark x-large rounded
            @click="confirmar('workOk')"> 
                confirmar 
            </v-btn>

        <v-btn v-else-if="steps === 'workOk' && ageField !== ''"
            color="light-blue lighten-2" 
            block 
            dark x-large rounded
            @click="confirmar('ageOk')"> 
                confirmar 
            </v-btn>
        </v-container>
    </v-container>
</template>

<script>
// v-for="cardsGender in cardsGender" :key="cardsGender.title"
// import CardsGender from './../components/CardsGender'
import ToolBar from './../components/ToolBar'
export default {
    components: {ToolBar},
    data: () => {
        return {
        cardSelection: null,
        steps: null,
        gender: null,
        age: null,
        isWorking: null,
        ageField: '',
        maxTextAgeInput: 3,
        radio: null,
        index: 0,
        botQuestion: ['Olá seja bem vindo ao questionário, antes de começarmos, que tal contar um pouco sobre você?'],
        userAnsware: ['Eu sou', 'No momento estou', 'Eu tenho'],
        ageRule: [
                ageRules => ageRules.length < 4 || 'Excedido quantidade de caracteres',
                ageRules => ageRules !== '' || 'Campo Invalido',
                ageRules => ageRules < 120 || 'Acho dificil você estar vivo',
                // ageRules => ageRules > 15 || 'Você não deveria estar respondendo este formulário'
        ],
        homeRouter: '/home'
        }
    },
    methods: {
        confirmar(step){
            console.log(this.steps)
            if(step === 'genderOk'){
                this.steps = step;
                if(this.cardSelection == 0){
                    this.gender = 'male';
                }else if(this.cardSelection == 1){
                    this.gender = 'female';
                }
                this.index ++;

            }else if(step === 'workOk'){
                this.steps = step;
                console.log(this.radio);
                this.isWorking = this.radio;
                this.index++;  
            
            }else if(step === 'ageOk'){
                console.log('entrou')    
                if(this.$refs.ageForm.validate()){
                    console.log(this.$refs.ageForm);
                    this.steps = step;
                    this.validate = 1;
                    this.age = this.ageField;
                    this.$router.push({name:'QuizScreen', params:{genderP: this.gender, isWorkingP: this.radio , ageP: this.age }})
                }
            }

        }

    }
};
</script>

<style scoped>
/* .border {
  border: 1px solid red;
}
.border2 {
  border: 1px solid red;
  background-color: green;
}
.active {
  border: 1px solid rgb(241, 215, 215);
}*/
.active2 {
  border: 1px solid black;
} 

.message{
    display: flex;
    align-items: center;
    justify-items: center;
}
.border-image {
  border: 1px solid black;
}
</style>

