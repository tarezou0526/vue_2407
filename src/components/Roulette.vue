<template>

      <h1>シンプルルーレット</h1>
      <p>このアプリは登録した選択肢からランダムに一つを選択する。とてもシンプルなアプリです。</p>
      <div class="input-group">
        <label for="newText">Add Text:</label>
        <input v-model="newText" id="newText" @keyup.enter="addText" />
        <button @click="addText">項目追加</button>
      </div>
      <ul class="list-group">
        <li v-for="(text, index) in texts" :key="index" :class="{ highlighted: highlightedIndex === index }">
          {{ text }}
          <button @click="removeText(index)" class="delete-button">削除</button>
        </li>
      </ul>
      <button class="spin-button" @click="spinRoulette">スタート！</button>
      <h2 v-if="selectedText">Selected: {{ selectedText }}</h2>

</template>

<script>
export default {
  data() {
    return {
      newText: '',
      texts: [],
      selectedText: '',
      highlightedIndex: null,
      spinning: false,
    };
  },
  methods: {
    addText() {
      if (this.newText) {
        this.texts.push(this.newText);
        this.newText = '';
      }
    },
    removeText(index) {
      this.texts.splice(index, 1);
    },
    spinRoulette() {
      if (this.spinning || this.texts.length === 0) return;
      this.spinning = true;
      
      const spinDuration = 3000; // アニメーションの全体の長さ
      const interval = 100; // 色の変わる間隔
      const totalIterations = spinDuration / interval;
      let currentIteration = 0;
      const randomIndex = Math.floor(Math.random() * this.texts.length);

      const spinInterval = setInterval(() => {
        this.highlightedIndex = currentIteration % this.texts.length;
        currentIteration++;

        if (currentIteration > totalIterations) {
          clearInterval(spinInterval);
          this.highlightedIndex = randomIndex;
          this.selectedText = this.texts[randomIndex];
          this.spinning = false;
        }
      }, interval);
    },
  },
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.card h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.card p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.input-group label {
  display: none;
}

.input-group input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
}

.input-group button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.input-group button:hover {
  background-color: #0056b3;
}

.list-group {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

.list-group li {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

.list-group li.highlighted {
  background-color: #f8d7da;
  color: #721c24;
}

.delete-button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 12px;
  margin-left: 10px;
}

.delete-button:hover {
  background-color: #c82333;
}

.spin-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.spin-button:hover {
  background-color: #218838;
}

.card h2 {
  margin-top: 20px;
  color: #333;
}
</style>
