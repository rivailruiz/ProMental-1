<template> 
    <v-container class="border align-content-space-between pa-0"  fill-height fluid >
        <ToolBar backTo="/home" :progressVal="progress"/>
        <v-container class="border" fluid no-gutters>
            
            <v-row class="border mt-4" > 
                <v-col cols="12 pa-0 "> 
                        <v-row class="border mx-md-4 justify-left" no-gutters > 
                            <v-col class=" border2 message col-3 col-md-1 col-sm-3 ">
                                    <v-avatar class="border2 mx-auto"  size="64">
                                        <v-img class="border-image " src="./../assets/avatarboy.jpg" alt="logo" />
                                    </v-avatar>
                            </v-col>

                            <v-col class="  pa-2
                                            border3 rounded-lg 
                                            blue ligthteen-4 
                                            text-width-subtitle-2 white--text text-left 
                                            col-md-8 col-8" > 
                                <p v-if="dataBaseQuestions.ask[dataBaseQuestions.askIndexBase] !== lastQuestion && 
                                         user.score < cutScore" 
                                         class="mx-auto my-auto">{{dataBaseQuestions.ask[dataBaseQuestions.askIndexBase]}}</p>
                                
                                <p  v-if="(dataBaseQuestions.ask[dataBaseQuestions.askIndexBase] === lastQuestion || user.score >= cutScore) && 
                                           dataBaseQuestionsGroup4.ask[dataBaseQuestionsGroup4.askIndexG4] !== lastQuestion" 
                                           class="mx-auto my-auto">{{dataBaseQuestionsGroup4.ask[dataBaseQuestionsGroup4.askIndexG4]}}</p>
                                
                                <p v-if=" dataBaseQuestionsGroup4.ask[dataBaseQuestionsGroup4.askIndexG4] === lastQuestion && user.isWorking === 'sim' && 
                                          dataBaseQuestionsWork.ask[dataBaseQuestionsWork.askIndexWork] !== lastQuestion" 
                                          class="mx-auto my-auto">{{dataBaseQuestionsWork.ask[dataBaseQuestionsWork.askIndexWork]}}</p>
                            </v-col>
                        </v-row>
                </v-col>
            </v-row>
            
            <!-- <v-row class="border justify-end text-center mt-4" > 
                <v-col class="border mr-4 blue rounded-lg white--text col-3 col-md-2"> 
                        asdfg asdfg asdfg
                </v-col>
            </v-row> -->

        </v-container>


        <v-container class="px-6 align-center" fluid wrap>
            <v-row  v-if="(dataBaseQuestions.ask[dataBaseQuestions.askIndexBase] !== lastQuestion && user.score < cutScore)"  
                    class="border-chat justify-space-around py-2" no-gutters > 
                <template v-for="(answare,index) in dataBaseQuestions.answare">
                    <v-col class="border4 col-4 col-md-5"  cols="4" :key="index">
                        <v-btn block max-width="100%" class="wrap rounded-xl" color="primary" @click="answareQuestion(answare, dataBaseQuestions.id )"> 
                                {{answare}}
                        </v-btn>
                    </v-col>
                </template>
            </v-row>

            <v-row v-if="(((dataBaseQuestions.ask[dataBaseQuestions.askIndexBase] === lastQuestion) || user.score >= cutScore) && 
                            dataBaseQuestionsGroup4.ask[dataBaseQuestionsGroup4.askIndexG4] !== lastQuestion)" 
                        class="border3 justify-space-around pa-2" no-gutters > 
                <template v-for="(answare,index) in dataBaseQuestionsGroup4.answare">
                    <v-col class="border4"  cols="4" :key="index">
                        <v-btn block class="wrap rounded-xl" color="primary" @click="answareQuestion(answare, dataBaseQuestionsGroup4.id)"> 
                                {{answare}}
                        </v-btn>
                    </v-col>
                </template>
            </v-row>
            
            <v-row v-if="( dataBaseQuestionsGroup4.ask[dataBaseQuestionsGroup4.askIndexG4] === lastQuestion && user.isWorking === 'sim' && 
                            dataBaseQuestionsWork.ask[dataBaseQuestionsWork.askIndexWork] !== lastQuestion)" 
                        class="border3 justify-space-around pa-2" no-gutters > 
                <template v-for="(answare,index) in dataBaseQuestionsWork.answare">
                    <v-col class="border4 col-12 col-md-5 mt-2"  :key="index">
                        <v-btn block class="wrap rounded-xl" color="primary" @click="answareQuestion(answare, dataBaseQuestionsWork.id)"> 
                                {{answare}}
                        </v-btn>
                    </v-col>
                </template>
            </v-row>             
        </v-container>

    </v-container>
</template>

<script>
// import Message from './../components/Message.vue'
// import Title from './../components/Title.vue'
import ToolBar from './../components/ToolBar.vue'

export default {
    components: {ToolBar},
    data: () => ({
        user: { age: null,
                gender: null,
                isWorking: null ,
                score: 0,     
        },

        dataBaseQuestions:{ id:'base', 
                            askIndexBase: 0,
                            answare: ['sim', 'nao'], 
                            ask: [  'Sente-se nervoso(a), tenso(a) ou preocupado(a)', 'Assusta-se com facilidade', 'Tem se sentido triste ultimamente', 
                                    'Tem chorado mais do que de costume ', 'Tem dores de cabeça frequentes ', 'Dorme mal', "Tem sensações desagradáveis no estômago",
                                    'Tem má-digestão ', 'Tem falta de apetite ', 'Tem tremores nas mãos ', 'Cansa-se com facilidade ', 'Tem dificuldade em tomar decisões',
                                    'Tem dificuldades para realizar com satisfação suas atividades diárias', 'Tem dificuldades no serviço (o trabalho é penoso e causa sofrimento)',
                                    'Sente-se cansado o tempo todo', 'Tem dificuldade de pensar com clareza ', 'fim']},

        dataBaseQuestionsGroup4:{ id:'g4',
                                askIndexG4:0,
                                classifcationG4: false, 
                                answare: ['sim', 'nao', 'teste'],
                                ask: ['É incapaz de desempenhar um papel útil em sua vida ', 'Tem perdido o interesse pelas coisas ', 
                                'Tem tido a ideia de acabar com a vida ', 'Sente-se uma pessoa inútil, sem préstimo' ,'fim']},
        dataBaseQuestionsWork:{ id:'work',
                                askIndexWork:0, 
                                answare: ['Nunca', 'Poucas vezes', 'Poucas vezes ao mês', '1 x por semana', 'Poucas vezes por semana', 'Sempre'], 
                                ask: ['Sinto que meu trabalho está me desgastando.', 'Quando termino minha jornada de trabalho sinto-me esgotado', 
                                'Quando me levanto pela manhã e me deparo com outra jornada de trabalho, já me sinto esgotado', 'Sinto que estou trabalhando demais.',
                                'Sinto-me frustrado(a) com meu trabalho.', 'Sinto-me como se estivesse no limite de minhas possibilidades.', 
                                'Sinto-me emocionalmente decepcionado(a) com meu trabalho.', 'Sinto que trabalhar todo o dia com pessoas me cansa.',
                                'Sinto que trabalhar em contato direto com pessoas, todo o dia, me estressa.', 'Sinto que estou exercendo influência positiva na vida de pessoas através do meu trabalho.',
                                'Creio que consigo muitas coisas valiosas nesse trabalho.', 'Sinto que posso criar, com facilidade, um clima agradável em meu trabalho',
                                'Sinto que, no meu trabalho, os problemas emocionais são tratados de forma adequada.', 'Sinto-me estimulado depois de haver trabalhado diretamente com quem tenho que atender',
                                'Sinto-me com muita energia no meu trabalho.', 'Sinto que trato com muita eficiência os problemas das pessoas as quais tenho que atender.', 
                                'Sinto que posso entender facilmente as pessoas que tenho que atender.', 'Sinto que me tornei mais duro(a) com as pessoas, desde que comecei este trabalho.',
                                'Fico preocupado(a) que este trabalho esteja me enrijecendo emocionalmente.', 'Sinto que realmente não me importa o que ocorra com as pessoas as quais tenho que atender profissionalmente.', 
                                'Sinto que estou tratando algumas pessoas com as quais me relaciono no meu trabalho como se fossem objetos impessoais', 
                                'Parece-me que os beneficiados com meu trabalho culpam-me por alguns de seus problemas.', 'fim']
        },
        progress: 0,
        lastQuestion: 'fim',
        cutScore: 7,
        faintScore: 0,

        addProgress: null,
    }),

    methods: {
        answareQuestion(answare, id){
            console.log(answare, id);
            if(id === 'g4' && answare == 'sim'){
                console.log(this.dataBaseQuestionsGroup4.classifcationG4);
                this.dataBaseQuestionsGroup4.classifcationG4 = true;
                console.log(this.dataBaseQuestionsGroup4.classifcationG4);
            }
            if(answare === 'sim'){
                this.user.score++;
                console.log('User Score:', this.user.score);
            }else if(answare === 'Poucas vezes'){
                this.user.score += 1;
                console.log('User Score:', this.user.score);
            }else if(answare === 'Poucas vezes ao mês'){
                this.user.score += 2;
                console.log('User Score:', this.user.score);
            }else if(answare === '1 x por semana'){
                this.user.score += 3;
                console.log('User Score:', this.user.score);
            }else if(answare === 'Poucas vezes por semana'){
                this.user.score += 4;
                console.log('User Score:', this.user.score);
            }else if(answare === 'Sempre'){
                this.user.score += 5;
                console.log('User Score:', this.user.score);
            }

            this.faintScore++;

            console.log('User Score:', this.user.score, 'Cut Score:', this.cutScore, 'FaintScore', this.faintScore);
            console.log('Antes:', 'Progress:', this.progress, 'Cut Score:', this.addProgress);
            
            if(this.faintScore === this.cutScore){
                if(this.user.isWorking == 'sim'){
                    this.progress = 100 - (22*this.addProgress);
                }else if(this.user.isWorking == 'nao'){
                    this.progress = 100 - (4*this.addProgress);
                }
            }else if(this.faintScore !== this.cutScore){
                this.progress += this.addProgress;
            }

            console.log('Depois:', 'Progress:', this.progress, 'Cut Score:', this.addProgress)
            switch (id){
                case 'base':
                    this.dataBaseQuestions.askIndexBase++;
                    break;
                case 'g4':
                    this.dataBaseQuestionsGroup4.askIndexG4++;
                    break;
                case 'work':
                    this.dataBaseQuestionsWork.askIndexWork++;
                    break;
                default:
                    console.log('id não encontrado');
            }            
            
        },
        limparlista(){
            this.perguntas.pop();
        },
        // adicionaRespostaEPergunta(resp){
        //     console.log(resp);
        //     this.perguntas.push(resp);
        //     console.log(this.perguntas)
        //     this.perguntas.push(this.quiz[this.askIndex]);
        //     console.log(this.perguntas);
        //     this.askIndex++;
        // },
    },
    created(){
        this.user.age = this.$route.params.ageP;
        this.user.gender = this.$route.params.genderP;
        this.user.isWorking = this.$route.params.isWorkingP;

        console.log(this.user);

        if(this.$route.params.genderP === 'male'){
            this.cutScore = 6;
        
        }else if(this.$route.params.genderP === 'female'){
            console.log('cutScore: ', this.cutScore);
            this.cutScore = 7;
            console.log('cutScore:', this.cutScore);
        }

        if(this.$route.params.isWorkingP == 'sim'){
            this.addProgress = 100/42;
            console.log('Add Progress: ', this.addProgress);
        }else if(this.$route.params.isWorkingP == 'nao'){
            this.addProgress = 100/20;
            console.log('Add Progress:', this.addProgress);
        }
    }
}
</script>

<style scoped>
.border{
    /* border: 1px solid black; */
}
.border2{
    /* border: 1px solid green; */
    /* background-color: cyan; */
}

.border-chat{
    border: 1px solid #F5F5F5;
    background-color: #F5F5F5;
    border-radius: 30px;
}
.border4{
    /* border: 1px solid black; */
    /* background-color: greenyellow; */
}
.message{
    display: flex;
    align-items: center;
    justify-items: center;
}
.border-image{
    border: 1px solid black;
}
</style>

        

        <!-- <ToolBar /> -->
            <!-- <v-toolbar  class="mt-0" color="white" short dense height="56px" app>
                <v-btn icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <ProgressBar></ProgressBar>

                <v-spacer></v-spacer>
            </v-toolbar> -->
        <!-- <Title v-for="(pergunta, index) in perguntas" :key="index" :title="perguntas[index]" />
        
        <v-btn @click="adicionaRespostaEPergunta('sim')"> 
            sim    
        </v-btn>
        <v-btn @click="adicionaRespostaEPergunta('nao')"> 
            nao
        </v-btn>
        <v-btn @click="limparlista()"> 
            clear
        </v-btn> -->