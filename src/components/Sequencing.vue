<template>
  <div>
    <div class="input_box">
      <div>
        <p>表示するボックス数</p>
        <p>
          <input type="number" v-model.number="numberOfBoxes" min="0" />
        </p>
      </div>
      <div v-for="item in numberOfBoxes" :key="item">
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Sequencing extends Vue {
  private numberOfBoxes = 0;
}
</script>

<style>
</style>