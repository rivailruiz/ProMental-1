<template>
  <!-- <v-main class="border" style="background-color:yellow"> -->
    <v-container  align-center grey lighten-5 class="mt-auto">
        <v-responsive class="border">
            <v-img class=""  src="./../assets/background-image.png" />
        </v-responsive>
        <h2 class="border mt-4" style="text-align:center">Bem vindo ao ProMental</h2>
        <p class="border mt-2" style="text-align:center">{{StartText}}</p>

        <v-container class="border pa-0 my-auto">
                <v-btn 
                    block 
                    height="56px" 
                    color="primary" 
                    outlined 
                    rounded 
                    class="button"
                    >
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
    StartText: `Cansaço. Irritabilidade. Insonias. Esses podem ser sintomas de stress elevado.

Visando o seu bem estar, nós dispomos de um questionario de saúde mental, que tal começarmos, não tomará muito tempo `,
    link: '/FormScreenData'
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
