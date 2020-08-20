<template>
  <v-main>
    <v-content style="margin: 32px">
      <Message title="Olá mundo"> </Message>
    </v-content>

  </v-main>
</template>

<script>
/*import BottomNav from "./../components/BottomNav.vue";
import CardsGender from "./../components/CardsGender.vue";
import InputTextIdade from "./../components/InputTextIdade.vue";
import RadioButtonGroup from "./../components/RadioButtonGroup.vue";
import Title from "./../components/Title.vue";
import ToolBar from "./../components/ToolBar.vue";*/

// import BottomNav from "./../components/BottomNav.vue";
import Message from "./../components/Message.vue";
export default {
  components: {
    /*
    CardsGender,
    InputTextIdade,
    RadioButtonGroup,
    Label,
    ToolBar,*/
    // BottomNav,
    Message

  },

  data: () => ({
    startLabel: [{label: 'Olá bem vindo ao ProMental'},
                  {label: 'Vamos começar o formulário?'}],
  }),

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margingBetweenLabels {
  margin-top: 8px;
}

</style>
