import Vue from "vue";

interface DatasInterface {
  /** 表示するボックス数 */
  numberOfBoxes: number;
  /** ボックスに入力される値 */
  saveNames: string[];
  /** シャッフル用配列 */
  shuffleNames: string[];
}

class Datas implements DatasInterface {
  numberOfBoxes = 0;
  saveNames = [];
  shuffleNames = [];
}

export const datas = Vue.observable(new Datas());
