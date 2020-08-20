<template>
  <div>
    <v-timeline :align-top="alignTop" :dense="dense" :reverse="reverse">
      <v-timeline-item
        v-for="n in 2"
        :key="n"
        :fill-dot="fillDot"
        :hide-dot="hideDot"
        :icon="icon ? 'mdi-star' : ''"
        :icon-color=" iconColor ? 'deep-orange' : ''"
        :left="left"
        :right="right"
        :small="small"
      >
        <template v-slot:icon>
          <v-avatar v-if="avatar">
            <img src="./../assets/logo.png" />
          </v-avatar>
        </template>
        <span slot="opposite">Tus eu perfecto</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">Lorem ipsum</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    alignTop: true,
    avatar: true,
    dense: true,
    fillDot: false,
    hideDot: false,
    icon: false,
    iconColor: false,
    left: true,
    reverse: false,
    right: false,
    small: true,
  }),
};
</script>

<style scoped>
    
</style>