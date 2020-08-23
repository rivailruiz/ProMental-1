<template>
    <v-container> 
        <h3 class="primary--text" v-if="questionsBase.questions[i] !== teste && score < corte">{{questionsBase.questions[i]}}</h3>
        <h3 class="red--text" v-if="(questionsBase.questions[i] === teste || score >= corte) && questionsRed.questions[j] !== teste">{{questionsRed.questions[j]}}</h3>

        <v-layout v-if="questionsBase.questions[i] !== teste && score < corte" row class="border justify-space-around mt-4" >
            <v-container xs4 v-for="resp in quantidade" :key="resp" class="border ">
                <v-btn dark block color="primary"  @click="select(questionsBase.id, questionsBase.answare[resp-1])" large> 
                    {{questionsBase.answare[resp-1]}}
                </v-btn>
            </v-container>
        </v-layout>

        <v-layout v-if="(questionsBase.questions[i] === teste || score >= corte) && questionsRed.questions[j] !== teste" row class="border justify-space-around mt-4" >
            <v-container xs5 v-for="r in quantidade2" :key="r" class="border ">
                <v-btn class="mx-1" dark block color="primary"  @click="select(questionsRed.id, questionsRed.answare[r-1])" large> 
                    {{questionsRed.answare[r-1]}}
                </v-btn>
            </v-container>
        </v-layout>

        <h1 class="mt-4"> score: {{score}}</h1>

        <h1 v-if="questionsRed.questions[j] === teste"> {{scoreAnalisys()}}</h1>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        i: 0,
        j:0,
        teste: "fim",
        score: 0,
        scoreRed: 0,
        quantidade: 2,
        quantidade2: 6,
        corte: 7,

        questionsBase:  {id: "base", answare: ['SIM', 'NAO'], 
                        questions: ['Sente-se nervoso (a), tenso (a) ou preocupado (a)', 'Assusta-se com facilidade', 'Tem se sentido triste ultimamente', 'Tem chorado mais do que de costume ', 'Tem dores de cabeça frequentes ', 'Dorme mal', 'Tem sensações desagradáveis no estômago ',
                                    'Tem má-digestão ','Tem falta de apetite ','Tem tremores nas mãos ','Cansa-se com facilidade ','Tem dificuldade em tomar decisões ','Tem dificuldades para realizar com satisfação suas atividades diárias','Tem dificuldades no serviço (o trabalho é penoso e causa sofrimento)',
                                    'Sente-se cansado o tempo todo ','Tem dificuldade de pensar com clareza ', 'É incapaz de desempenhar um papel útil em sua vida ','Tem perdido o interesse pelas coisas ','Tem tido a ideia de acabar com a vida ', 'Sente-se uma pessoa inútil, sem préstimo', 'fim'] },
        questionsRed:   {id: "red", answare: ['Nunca', 'Poucas vezes', 'Poucas vezes ao mês', '1 x por semana', 'Poucas vezes por semana', 'Sempre'], 
                        questions: ['Sinto que me tornei mais duro(a) com as pessoas, desde que comecei este trabalho.', 'Fico preocupado(a) que este trabalho esteja me enrijecendo emocionalmente.', 'Sinto que realmente não me importa o que ocorra com as pessoas as quais tenho que atender profissionalmente', 
                                    'Sinto que estou tratando algumas pessoas com as quais me relaciono no meu trabalho como se fossem objetos impessoais.', 'Parece-me que os beneficiados com meu trabalho culpam-me por alguns de seus problemas.', "fim"] },
        
    }),

    methods: {
        select(id, resposta){
            if(id === "base"){
                if(resposta === "SIM"){
                    this.i++;
                    this.score += 1 
                    console.log(resposta);
                }else if(resposta === "NAO"){
                    this.i++
                    console.log(resposta);
                }
            }else if(id === "red"){
                if(resposta === "Nunca"){
                    this.j++;
                    this.score += 0 ;
                    console.log(resposta);
                }else if(resposta === "Poucas vezes"){
                    this.j++;
                    this.scoreRed += 1
                    this.score += 1; 
                    console.log(resposta);
                }else if(resposta === "Poucas vezes ao mês"){
                    this.j++;
                    this.scoreRed += 1
                    this.score += 2; 
                    console.log(resposta);
                }else if(resposta === "1 x por semana"){
                    this.j++;
                    this.scoreRed += 1
                    this.score += 3; 
                    console.log(resposta);
                }else if(resposta === "Poucas vezes por semana"){
                    this.j++;
                    this.scoreRed += 1
                    this.score += 4; 
                    console.log(resposta);
                }else if(resposta === "Sempre"){
                    this.j++;
                    this.scoreRed += 1
                    this.score += 5; 
                    console.log(resposta);
                }
            }
            
        },

        scoreAnalisys(){
            if(this.score >=7 || this.scoreRed > 0){
                return 'Precisa ir ao medico';
            }else{
                return 'Tudo está bem';
            }
        }
    }
}
</script>

<style scoped>
.border{
    border: none;
}
</style>