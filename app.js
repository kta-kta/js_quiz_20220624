const quiz = [{
    question: 'Keitaの好きなフルーツは次のうちどれ？',
    answers: ['バナナ', 'りんご', 'いちご', 'すいか'],
    correct: 'いちご'
}, {
    question: 'Keitaの好きなお金は次のうちどれ？',
    answers: ['1円玉', '500円玉', '2,000円札', '10,000円札'],
    correct: '10,000円札'
}, {
    question: 'Keitaの好きな泳ぎ方は次のうちどれ？',
    answers: ['バタフライ', '背泳ぎ', '平泳ぎ', 'クロール'],
    correct: 'バタフライ'
}];

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;


// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();


// ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解')
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！ あなたの正解数は' + score + '/' + quizLength + 'です');
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

