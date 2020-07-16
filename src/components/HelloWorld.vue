<template>
  <v-container>
    <v-row class="text-center">
      <v-alert type="info" elevation="12">{{name}}</v-alert>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: "HelloWorld"
  })
};
</script>
