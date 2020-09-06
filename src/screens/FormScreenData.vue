<template>
    
    <v-container class="active2 align-content-space-between" fluid fill-height>
        <tool-bar :active='false' color='white' :backTo='homeRouter' icon='mdi-arrow-left'/>
        <v-container fluid class="active2">
            <v-row class="border mt-2">
                <v-col class="active2 pa-0" cols="12">
                    <Message :textIn='botQuestion[0]'/>
                </v-col>
                </v-row>

            <v-row class="active2 mt-2 justify-end "> <!-- user answare -->
                <TextAnsware :text="userAnsware[answareIndex]"/>
                </v-row>

            <v-row class="active2 mt-2 "> <!-- form options -->
                <v-col class="border2" cols="12">
                        <v-item-group v-if="steps === null" 
                        active-class="active justify-space-around" v-model="cardSelection" >  
                            <v-row class="justify-space-around">
                                <CardItemGender v-for="(cardInfo, index) in cardGender" :key='index'
                                :colorCard='cardInfo.cardColor'
                                :gender="cardInfo.label"
                                :imageSource="cardInfo.imageSource"/>
                                </v-row>
                            </v-item-group>
                        
                        <v-radio-group v-else-if="steps === 'genderOk'"
                        v-model="radio"
                        row required>
                            <template  v-for="(option, index) in workOptions" >
                                <v-radio :key='index' color="primary" :label="option.label" :value="option.value" class="mx-auto"></v-radio>
                            </template>
                            </v-radio-group>

                        <v-form ref="ageForm" v-else-if="steps === 'workOk'" >
                            <v-text-field
                            outlined
                            color="light-blue"
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
        
        <v-container class="border">
            <v-row class="justify-center border">
                <v-col class="col-12 col-sm-8">  
                    <v-btn v-if="cardSelection !== null && steps === null" block 
                        color="light-blue" 
                        dark large rounded
                        @click="confirmar('genderOk')"> 
                        confirmar
                        </v-btn>

                    <v-btn v-else-if="radio !== null && steps === 'genderOk'" 
                        color="light-blue"
                        block 
                        dark large rounded
                        @click="confirmar('workOk')"> 
                            confirmar 
                        </v-btn>

                    <v-btn v-else-if="steps === 'workOk' && ageField !== ''"
                        color="light-blue" 
                        block 
                        dark large rounded
                        @click="confirmar('ageOk')"> 
                            confirmar 
                        </v-btn>
                </v-col>
            </v-row>
            </v-container>
    </v-container>

</template>

<script>
// v-for="cardsGender in cardsGender" :key="cardsGender.title"
import CardItemGender from './../components/CardItemGender.vue'
import Message from './../components/Message.vue'
import TextAnsware from './../components/TextAnsware.vue'
import ToolBar from './../components/ToolBar'
export default {
    components: {ToolBar, Message, TextAnsware, CardItemGender},
    data: () => {
        return {
        cardSelection: null,
        steps: null,
        user: {
                gender: null,
                age: null,
                isWorking: null
        },
        
        ageField: '',
        maxTextAgeInput: 3,
        
        radio: null,
        answareIndex: 0,
        
        botQuestion: ['Olá seja bem vindo ao questionário, antes de começarmos, que tal contar um pouco sobre você?'],
        userAnsware: ['Eu sou', 'No momento eu', 'Eu tenho'],
        
        ageRule: [
                ageRules => ageRules.length < 4 || 'Excedido quantidade de caracteres',
                ageRules => ageRules !== '' || 'Campo Invalido',
                ageRules => ageRules < 120 || 'Acho dificil você estar vivo',
                // ageRules => ageRules > 15 || 'Você não deveria estar respondendo este formulário'
        ],
        homeRouter: '/home',

        cardGender: [
            {imageSource: 'avatar-boy.png', label: 'Homem', cardColor: 'light-blue lighten-3'}, 
            {imageSource: 'avatar-girl.png', label: 'Mulher', cardColor: 'pink lighten-3'}
        ],
        workOptions: [
            {label: 'Trabalho', value: true},
            {label: 'Não Trabalho', value: false}
        ]
        
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
                this.answareIndex ++;

            }else if(step === 'workOk'){
                this.steps = step;
                console.log(this.radio);
                this.isWorking = this.radio;
                this.answareIndex++;  
            
            }else if(step === 'ageOk'){
                console.log('entrou')    
                if(this.$refs.ageForm.validate()){
                    console.log(this.$refs.ageForm);
                    this.steps = step;
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
} */
/* .border2 {
  border: 1px solid red;
  background-color: green;
}
.active {
  border: 1px solid rgb(241, 215, 215);
}
.active2 {
  border: 1px solid black;
}  */

</style>

