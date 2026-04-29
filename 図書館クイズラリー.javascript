
// 正解の設定（ここを書き換えるだけでクイズが作れます）
const correctAnswers = ["9:00", "青", "100万"];

let currentStep = 1; // 現在のページ番号
const totalSteps = 4; // クイズの総数（スタートページを除いた数）

/**
* 次のページを表示する関数
*/
function nextPage() {
 currentStep++;

 // 全ページを一旦非表示にする
 document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));

 // 指定したページを表示する
 const nextPageElement = document.getElementById('page' + currentStep);
 if (nextPageElement) {
   nextPageElement.classList.add('active');
 }

 updateProgressBar();
}

/**
* 答え合わせをする関数
* @param {number} n クイズの番号
*/
function checkAnswer(n) {
 const inputElement = document.getElementById('answer' + n);
 // trim()で空白を削除し、大文字小文字を無視して比較
 const userAnswer = inputElement.value.trim();

 if (userAnswer === correctAnswers[n - 1]) {
   alert("正解です！おめでとう！");
   nextPage();
 } else {
   alert("残念！もう一度考えてみてね。");
   inputElement.value = ""; // 入力をリセット
   inputElement.focus();    // 再入力しやすくする
 }
}

/**
* 進行状況バーを更新する関数
*/
function updateProgressBar() {
 const progressContainer = document.getElementById('progress-container');
 const progressBar = document.getElementById('progress-bar');

 if (currentStep > 1) {
   progressContainer.style.display = 'block';
   // 進捗を計算（%）
   const progress = ((currentStep - 1) / totalSteps) * 100;
   progressBar.style.width = progress + '%';
 }
}

