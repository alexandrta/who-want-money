let answersDIV = document.getElementById('answers');
let questionDIV = document.getElementById('question');
let levelsLIArray = document.getElementsByClassName('level');

let currentLevel = 0

// ---------- Variables

// ---------- Events on app interactions

const confirmTheAnswer = () => {
	increaseLevel();
	renderLevel();
;}
// class current  в хтм добавляет подсветку
const increaseLevel = () => {
	if (currentLevel < 9) {
		levelsLIArray[currentLevel].classList.remove('current');
		levelsLIArray[currentLevel].classList.add('done');  // добавляем название класса, чтобы изменить цвет (в css class done имеет серый цвет)
		currentLevel += 1;
		levelsLIArray[currentLevel].classList.add('current');
	} else {
		levelsLIArray[currentLevel].classList.remove('current');
		levelsLIArray[currentLevel].classList.add('done');  // добавляем название класса, чтобы изменить цвет (в css class done имеет серый цвет)
		setTimeout(() => alert('Вы выиграли 20 000$!'), 1); // устанавливаю таймаут, чтобы сначала убралась полоска, а потом сработал alert
		document.getElementById('b1').hidden = true // прячу обе кнопки, чтобы больше не кликали
		document.getElementById('b2').hidden = true

	} 
};

// --------- Create helpers
const createAnswerHTML = ({label, value}) => {
	return  `<div class="answer">
	<label>${label}</label>
	<input type="radio" name="answer" walue="${value}">
	</div>
`;
};

const appendAnswerToDiv = (answerHTML) => {
	answersDIV.innerHTML += answerHTML;      // или answersDIV.innerHTML = answersDIV.innerHTML + answerHTML; т.к. без += будет просто перезаписывать
};

const appendQuastionToDiv = (question) => {
	questionDIV.innerText = question;	
};

// --------- Renders
const renderAnswers = () => {
	answersDIV.innerHTML = ''

	questions[currentLevel].answers.forEach(answer => {
		let answerHTML = createAnswerHTML(answer);

		appendAnswerToDiv(answerHTML);
	});
};

const renderQuestion = () => {
	appendQuastionToDiv(questions[currentLevel].question)
};

const renderLevel = () => {
	renderAnswers()
	renderQuestion()
};

renderLevel()


// ---------- DOM elements
