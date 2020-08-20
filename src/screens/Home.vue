<template>
  <v-main>
    <v-content style="margin: 32px">
      <div class="message">
        <Avatar class />
        <v-content class="d-inline">
          <Title title="Olá bem vindo ao ProMental"></Title>
        </v-content>
      </div>
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
import Avatar from "./../components/Avatar.vue";
// import BottomNav from "./../components/BottomNav.vue";
import Title from "./../components/Title.vue";
export default {
  components: {
    /*
    CardsGender,
    InputTextIdade,
    RadioButtonGroup,
    Label,
    ToolBar,*/
    Avatar,
    // BottomNav,
    Title

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
.message {
  display: flex;
  align-items: center;
}
</style>
