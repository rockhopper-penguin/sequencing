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
        <input type="text" v-model="saveNames[item - 1]" />
      </div>
      <button @click="debug">値を出力</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Sequencing extends Vue {
  private numberOfBoxes = 0;
  private saveNames: string[] = [];

  debug() {
    console.log(this.saveNames);
  }
}
</script>

<style>
</style>