<template>
  <div>
    <div class="sequencing">
      <div>
        <p class="lead p-3">表示するボックス数</p>
        <p>
          <b-form-input
            class="input_numbers"
            type="number"
            v-model.number="Data.numberOfBoxes"
            min="0"
            @change="deleteElement"
          />
        </p>
      </div>
      <div class="input_namaes" v-for="item in Data.numberOfBoxes" :key="item">
        <b-form-input type="text" v-model="Data.saveNames[item - 1]" />
      </div>
      <div class="m-2">
        <p>
          <b-button variant="outline-secondary" @click="shuffle"
            >シャッフル</b-button
          >
        </p>
        <p class="lead p-3" v-for="item in Data.shuffleNames" :key="item">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { datas } from "@/store/index";

@Component
export default class Sequencing extends Vue {
  private get Data() {
    return datas;
  }

  private shuffle() {
    // 配列の初期化
    this.Data.shuffleNames = [];
    // シャッフル用配列にボックスの入力値配列をディープコピー
    this.Data.shuffleNames = [...this.Data.saveNames];
    for (let i = this.Data.shuffleNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = this.Data.shuffleNames[i];
      this.Data.shuffleNames[i] = this.Data.shuffleNames[j];
      this.Data.shuffleNames[j] = tmp;
    }
  }

  deleteElement() {
    if (this.Data.saveNames.length > this.Data.numberOfBoxes) {
      this.Data.saveNames.splice(
        this.Data.numberOfBoxes,
        this.Data.saveNames.length
      );
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
