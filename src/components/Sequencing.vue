<template>
  <div>
    <div class="sequencing">
      <div>
        <p class="lead p-3">表示するボックス数</p>
        <p>
          <b-form-input
            class="input_numbers"
            type="number"
            v-model.number="numberOfBoxes"
            min="0"
            @change="deleteElement"
          />
        </p>
      </div>
      <div class="input_namaes" v-for="item in numberOfBoxes" :key="item">
        <b-form-input type="text" v-model="saveNames[item - 1]" />
      </div>
      <div class="m-2">
        <p>
          <b-button variant="outline-secondary" @click="shuffle"
            >シャッフル</b-button
          >
        </p>
        <p class="lead p-3" v-for="item in shuffleNames" :key="item">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Sequencing extends Vue {
  /** 表示するボックス数 */
  private numberOfBoxes = 0;
  /** ボックスに入力される値 */
  private saveNames: string[] = [];
  /** シャッフル用配列 */
  private shuffleNames: string[] = [];

  private shuffle() {
    // 配列の初期化
    this.shuffleNames = [];
    // シャッフル用配列にボックスの入力値配列をディープコピー
    this.shuffleNames = [...this.saveNames];
    for (let i = this.shuffleNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = this.shuffleNames[i];
      this.shuffleNames[i] = this.shuffleNames[j];
      this.shuffleNames[j] = tmp;
    }
  }

  deleteElement() {
    if (this.saveNames.length > this.numberOfBoxes) {
      this.saveNames.splice(this.numberOfBoxes, this.saveNames.length);
    }
  }
}
</script>

<style>
.sequencing {
  width: 80%;
  margin: auto;
}

.input_numbers,
.input_namaes {
  padding: 10px;
}
</style>
