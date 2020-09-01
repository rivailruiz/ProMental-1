<template>
  <!-- <v-main class="border" style="background-color:yellow"> -->
    <v-layout row wrap justify-center align-center light-blue lighten-1 class="ma-auto white--text flex-row-reverse" style="height: 100%" >
        <TollBar :active='false' :icon='menu' color='light-blue lighten-1' iconColor='white' />
        <v-flex class="border mb-0" xs8 sm4 >
            <v-img contain min-height="240px" max-height="360px" class="" src="./../assets/head.svg" />
        </v-flex>
        
        <v-flex class="mx-auto mx-4" xs12 sm12 md6> 
            <p class="border mb-md-10 text-h5 text-sm-h3 text-md-h3 font-weight-bold" style="text-align:center">Bem vindo ao ProMental</p>
            <p class="border mx-xs-2 text-subtitle-1 text-sm-h5 font-weight-regular" style="text-align:center">{{startText}} <br> {{startText2}}</p>
        </v-flex>

        <v-flex class="border pa-0 mx-4" xs12 sm12 md6>
                <v-btn 
                    block
                    dark 
                    height="56px"
                    outlined 
                    rounded 
                    class="button"
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
import TollBar from './../components/ToolBar'

export default {
   components: {TollBar },

  data: () => ({
	menu: 'mdi-menu',
    startLabel: [
      { label: "Olá bem vindo ao ProMental" },
      { label: "Vamos começar o formulário?" },
    ],

    startFormPage: '/formScreenData',
    startText: "Cansaço. Irritabilidade. Insonia. Esses podem ser sintomas de stress elevado.",
    startText2: "Visando o seu bem estar, nós preparamos um questionario de saúde mental, que tal começarmos, não tomará muito tempo ",
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
