<template>
  <!-- <v-main class="border" style="background-color:yellow"> -->
    <v-container align-center grey lighten-5 class=" ma-auto" >
        <v-responsive class="border">
            <v-img class=""  src="./../assets/background-image.png" />
        </v-responsive>
        
        <h2 class="border mt-4" style="text-align:center">Bem vindo ao ProMental</h2>
        <p class="border mt-2" style="text-align:center">{{StartText}}</p>

        <v-container class="border pa-0 mt-10">
                <v-btn 
                    block 
                    height="56px" 
                    color="primary" 
                    outlined 
                    rounded 
                    class="button"
                    router :to="startFormPage" >
                     Clique aqui para começar
                </v-btn>
        </v-container>

        <BottomMenu />
    </v-container>
 
  <!-- </v-main> -->
</template>

<script>

import BottomMenu from './../components/BottomMenu.vue'
export default {
  components: { BottomMenu},

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
    border: none;
}
.father-container2 {
  align-content: space-around;
}
.father-container {
  display: flex;
  flex-flow: wrap;
  
}
</style>
