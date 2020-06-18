<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Sequencing></Sequencing>
  </div>
</template>

<script>
// @ is an alias to /src
import Sequencing from "@/components/Sequencing.vue";

export default {
  name: "Home",
  components: {
    Sequencing
  }
};
</script>
