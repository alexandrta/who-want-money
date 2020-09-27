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
	levelsLIArray[currentLevel].classList.remove('current');
	currentLevel += 1;
	levelsLIArray[currentLevel].classList.add('current');
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
