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
      <div>
        <p>
          <button @click="shuffle">シャッフル</button>
        </p>
        <p v-for="item in shuffleNames" :key="item">{{ item }}</p>
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
}
</script>

<style>
</style>