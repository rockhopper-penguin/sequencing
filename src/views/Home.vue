<template>
  <div class="home">
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
