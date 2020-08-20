<template>
  <v-text-field class="mx-4" v-model="text" :counter="3" :rules="nameRules" label="Age" required></v-text-field>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    text: "",
    name: "",
    nameRules: [
      (v) => !!v || "Age is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    select: null,
    lazy: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style scoped>
</style>