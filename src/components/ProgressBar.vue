<template>
  <v-progress-linear
    :active="active"
    :background-opacity="opacity"
    :bottom="bottom"
    :buffer-value="buffer"
    :height="height"
    :indeterminate="indeterminate"
    :query="query"
    :rounded="rounded"
    :stream="stream"
    :striped="striped"
    :top="top"
    :value="value"
    color="light-blue"
    class="rounded-xl"
  ></v-progress-linear>
</template>

<script>
export default {
  data: () => ({
    absolute: false,
    active: true,
    opacity: 0.3,
    bottom: false,
    buffer: 100,
    fixed: false,
    height: 24,
    indeterminate: false,
    query: false,
    rounded: true,
    stream: false,
    striped: true,
    top: false,
    value: 25,
  }),
  methods: {
    addProgress() {
      if (this.value === 100) {
        this.value = 0;
      } else {
        console.log(this.value);
        this.value += 5;
        console.log(this.value);
      }
    },
  },
};
</script>

<style scoped>
</style>