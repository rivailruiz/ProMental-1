<template>
  <!-- <v-main class="border" style="background-color:yellow"> -->
    <v-layout row wrap justify-center align-center light-blue lighten-1 class="ma-auto white--text flex-row-reverse" style="height: 100%" >
        
        <v-flex class="border mt-4" xs12 sm4 max-width="240">
            <v-img contain height="360px" class="" src="./../assets/head.png" />
        </v-flex>
        
        <v-flex class="mx-4" xs12 sm12 md6 flex-sm-shrink-1> 
            <h2 class="border mt-4" style="text-align:center">Bem vindo ao ProMental</h2>
            <p class="border mt-6" style="text-align:center">{{StartText}}</p>
        </v-flex>

        <v-flex class="border pa-0 mt-5 mx-4" xs12 sm12 md6>
                <v-btn 
                    block
                    dark 
                    height="56px"
                    outlined 
                    rounded 
                    class="button"
                    max-width="360"
                    router :to="startFormPage" >
                     Clique aqui para começar
                </v-btn>
        </v-flex>

        <!-- <BottomMenu /> -->
    </v-layout>
 
  <!-- </v-main> -->
</template>

<script>

// import BottomMenu from './../components/BottomMenu.vue'

export default {
//   components: { },

  data: () => ({
    startLabel: [
      { label: "Olá bem vindo ao ProMental" },
      { label: "Vamos começar o formulário?" },
    ],

    startFormPage: '/formScreenData',
    StartText: `Cansaço. Irritabilidade. Insonia. Esses podem ser sintomas de stress elevado. Visando o seu bem estar, nós dispomos de um questionario de saúde mental, que tal começarmos, não tomará muito tempo `,
  }),

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border {
    /* border: 1px solid black; */
}
.father-container2 {
  align-content: space-around;
}
.father-container {
  display: flex;
  flex-flow: wrap;
  
}
</style>
